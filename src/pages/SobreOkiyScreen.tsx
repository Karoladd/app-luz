import React from 'react'
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
import { useNavigation } from  '@react-navigation/native';

export default function SobreOkiyScreen () {

  return (
    <SafeAreaView className="flex-1 justify-end mx-20 my-40">
      <View className="tems-center justify-center bg-gray">
        <View className="space-y-5">
        <View >
            <TouchableOpacity className="items-center bg-blue-600 p-4 " ><Text className="text-white">NOVO OKIYOME</Text></TouchableOpacity>
          </View>
            <View>
            <TouchableOpacity className="items-center bg-blue-600 p-4 "  ><Text className="text-white">REGISTRO</Text></TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity className="items-center bg-blue-600 p-4 "  ><Text className="text-white">ESTATÍSTICA</Text></TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity className="items-center bg-blue-600 p-4 "  ><Text className="text-white">SOBRE</Text></TouchableOpacity>
          </View>
          </View>
      </View>
    </SafeAreaView>
  )
};