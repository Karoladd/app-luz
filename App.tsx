import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Pressable ,
  View,
  SafeAreaView,
  Text,
  Alert,
  Button,
  TouchableOpacity 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import NovoOkiyScreen from './src/pages/NovoOkiyScreen';
import RegistOkiyScreen from './src/pages/RegistOkiyScreen';
import EstatOkiyScreen from './src/pages/EstatOkiyScreen';
import SobreOkiyScreen from './src/pages/SobreOkiyScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
/*     <View style={styles.container}>
      <Text>Teste</Text>
      <StatusBar style="auto" />
    </View> */
    <NavigationContainer >
    <Stack.Navigator  
       screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#2563EB' },
              }}
        >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Novo Okiyome" component={NovoOkiyScreen} />
      <Stack.Screen name="Registro" component={RegistOkiyScreen} />
      <Stack.Screen name="Estatística" component={EstatOkiyScreen} />
      <Stack.Screen name="Sobre" component={SobreOkiyScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}