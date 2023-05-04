import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
  
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WelcomeScreen from './app/screens/WelcomeScreen';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //    {/* <ListingEditScreen></ListingEditScreen>  */}
       
    //    <WelcomeScreen></WelcomeScreen>

    //   {/* <AuthNavigator></AuthNavigator> */}
      
    //   {/* <Text style={{padding: '20%', backgroundColor: 'red'}} >Zindegi</Text> */}
    //  </GestureHandlerRootView>
    <NavigationContainer theme={navigationTheme} >
      {/* <AppNavigator></AppNavigator> */}
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({});
 