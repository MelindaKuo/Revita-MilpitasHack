import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const FrequencyChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [0, 0, 0, 0, 0, 0, 4], // Add hidden max value (4) in last position
      color: (opacity = 1, index) => 
        index === 6 ? 'rgba(0,0,0,0)' : `rgba(52, 152, 219, ${opacity})`, // Make last bar transparent
    }],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={350}
        height={220}
        fromZero
        showBarTops={false}
        withHorizontalLabels={true}
        withVerticalLabels={true}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        segments={4} // Force 4 segments
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientToOpacity: 1,
          color: (opacity = 1, index) => 
            index === 6 ? 'rgba(0,0,0,0)' : `rgba(52, 152, 219, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForBackgroundLines: {
            strokeWidth: 0 // Remove grid lines
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

// Keep your existing styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginRight: 50,
    justifyContent: 'center',
  },
});

export default FrequencyChart;