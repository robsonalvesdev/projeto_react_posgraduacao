import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeListScreen from './src/HomeListScreen';
import Route from './src/Route';

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <Route/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
