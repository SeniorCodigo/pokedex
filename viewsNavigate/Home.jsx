import React, {useState} from 'react';
import {View, SafeAreaView, Image, TextInput, Button, KeyboardAvoidingView  } from 'react-native';
import globalStyles from '../styles/global';
import PokemonAPI from '../API/PokemonAPI'

const Home =({navigation})=> {
  
  const text="";
  const [pokemon, setPokemon]= useState("");

  return (
    
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView>
      <Image
        source={require('../images/pokedex.png')}
        style={globalStyles.backgroundImage}>
      </Image>

      <PokemonAPI name={pokemon}/>

      <TextInput
        style={globalStyles.input}
        placeholder="Gotta catch 'em all!"
        onChangeText={text => setPokemon(text)}
        defaultValue={text}
      />
      <View style={globalStyles.space} />
      <Button
        onPress={() => navigation.navigate('Tap')}
        title="Press here to put the cover"
        color='#e0082f'
      />
      
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default Home;