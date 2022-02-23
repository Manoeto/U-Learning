import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';


import RoutesBottom from './src/routesBottom';
import RoutesHeader from './src/routesHeader';

const Courses = () => {
    const navigation = useNavigation();
  return (<>    
    <SafeAreaView>
    
        <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
        <RoutesHeader/>
       
    
    </SafeAreaView> 
    
    <NavigationContainer independent={true}>
          <RoutesBottom />
        </NavigationContainer>

      </>

  )
}

export default Courses

const styles = StyleSheet.create({})