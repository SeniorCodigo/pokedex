import React from 'react';
import {Image, StyleSheet, Button, SafeAreaView} from 'react-native';
import globalStyles from '../styles/global'


const Tap = ({navigation}) => {
    return ( 
      
        <SafeAreaView style={globalStyles.container}>

          <Image
            source={require('../images/cover.png')}
            style={globalStyles.backgroundImageTap}
          />
          <Button 
            onPress={() => navigation.navigate('Home')}
            title="Press here to open Pokedex"
            color='#e0082f'
          />
          
        </SafeAreaView>
     );
}

export default Tap;