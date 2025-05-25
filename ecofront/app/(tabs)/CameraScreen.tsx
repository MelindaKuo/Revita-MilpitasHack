import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import NavigationBar from '../../components/NavigationBar';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null); 

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.grantButton}>
          <Text style={styles.grantButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      setImageUri(photo.uri);
      setBase64Image(photo.base64 || null);
    }
  };

  const handleClosePreview = () => {
    setImageUri(null);
    setBase64Image(null);
  };

  const handleClassify = async () => {
    if (!base64Image) {
      Alert.alert('Error', 'No image to send. Please take a photo.');
      return;
    }

    try {
      const response = await fetch('https://wuming233-garbage-sense.hf.space/run/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [`data:image/jpeg;base64,${base64Image}`], 
        }),
      });
    
      const result = await response.json();
      //console.log('Hugging Face response:', result);
      console.log(result.data?.[0].label)
      const prediction = result.data?.[0] || 'No prediction found';
      //console.log('Hugging Face response:', prediction);
      //Alert.alert('Classification Result', result.data?.[0].label);
      if (result.data?.[0].label != 'cardboard'){
        Alert.alert('Classification Result '+ result.data?.[0].label+". You should recycle this ") ;
        //increment score by 5
      }
      else{
        Alert.alert('Classification Result '+ result.data?.[0].label+". You should NOT recycle this ") ;
      }



    } catch (error: any) {
      console.error('Error sending to Hugging Face:', error);
      Alert.alert('Error', error.message || 'Failed to get classification');
    }
    
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>
      </CameraView>

      {imageUri && (
        <View style={styles.imagePreviewContainer}>
          <View style={styles.polaroid}>
            <Image source={{ uri: imageUri }} style={styles.capturedImage} />
            <TouchableOpacity style={styles.closeButton} onPress={handleClosePreview}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.classifyButton} onPress={handleClassify}>
              <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
       <NavigationBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
    marginBottom: 20,
  },
  grantButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  grantButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: 'transparent',
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#ddd',
    marginBottom: 80,
  },
  imagePreviewContainer: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '60%',
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  polaroid: {
    flex: 1,
    position: 'relative',
  },
  capturedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    borderRadius: 20,
  },
  classifyButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
