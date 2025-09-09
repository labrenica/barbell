import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';


export default function RootLayout(){
  return (
    <View style={{ flex: 1, backgroundColor: '#0C1412' }}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0C1412' } }} />
    </View>
  );
}