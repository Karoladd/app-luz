import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Pressable ,
  View,
  SafeAreaView,
  Text,
  Alert,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
  const { onPress, novo = 'NOVO OKIYOME' } = props;

  return (
    <SafeAreaView className="flex-1 justify-end mx-20 my-40">
      <View className="tems-center justify-center bg-gray">
        <View className="space-y-5">
        <View >
            <Button   title="NOVO OKIYOME" ></Button>
          </View>
            <View>
            <Button  title="REGISTRO" ></Button>
          </View>
          <View>
            <Button  title="ESTATÍSTICA" ></Button>
          </View>
          <View>
            <Button  title="SOBRE" ></Button>
          </View>
          </View>
      </View>
    </SafeAreaView>
  );
}

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
        headerStyle: { backgroundColor: '#00a2ff' },
              }}
        >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
