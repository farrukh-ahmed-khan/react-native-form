import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavigation from './Pages/config/navigation';
const App= () => {
 

  return (
      <AppNavigation/>

  );
};

const styles = StyleSheet.create({
 veiwmain:{
   backgroundColor:'white',
   flex:1
 }
});

export default App;
