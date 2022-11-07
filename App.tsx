import { View, StyleSheet, Text } from "react-native";
import { RootStackScreenProps } from "./types";
import FusionCharts from 'react-native-fusioncharts';
import React, { useEffect } from "react";

export default function App() {
  const modules = ['timeseries'];


  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <View>
      <Text>asdasd</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 500,
    backgroundColor: '#fff',
  }
});