import { View, Image, StyleSheet , ImageSourcePropType} from 'react-native';
import { ThemedText } from './ThemedText';
import {BlurView} from 'expo-blur'

interface RectangleImageProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
  text: string; // Add a prop for the text to display
  style?:any
}

export function Widget({
  source,
  width,
  height,
  text,
  style,
}: RectangleImageProps) {
  return (
    <View style={[styles.container, style, { width, height }]}>
      <Image source={source} style={styles.image} />
      <BlurView
        style={styles.absolute}
        tint = "light"
        intensity = {15}
         // You can change this to 'dark' or 'extraLight' as needed
     // Adjust the blur amount
      // Fallback color
        >
      <ThemedText style = {styles.text} type = "title">
        {text}
      </ThemedText>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure text can be positioned absolutely
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    // opacity: 0.35,
  },
  text: {
    position: 'absolute', // Position text over the image
    justifyContent: 'center',
    color: 'white', // Ensure text is visible
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default Widget;
