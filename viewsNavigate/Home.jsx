import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, TextInput, Button, KeyboardAvoidingView  } from 'react-native';
import globalStyles from '../styles/global';
import axios from 'axios';

const Home =({navigation})=> {
  
  const text="";
  const [pokemonRes, setPokemonRes] = useState([]);
  const [pokemon, setPokemon]= useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbility, setPokemonAbility] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokeIdImg, setPokeIdImg] = useState("");
  

const getPokemon = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
    const res = await axios.get(url);
    let abilities = [res.data.abilities[0].ability.name, res.data.abilities[1].ability.name];
    let pokeInfo = [res.data.weight, res.data.height];
    let idImg = res.data.forms[0].url.split("/");

    setPokemonRes(res.data)
    setPokemonType(res.data.types[0].type.name);
    setPokemonName(res.data.forms[0].name);   
    setPokemonAbility(abilities);
    setPokemonInfo(pokeInfo);
    setPokeIdImg(idImg[6])
  } catch (e) {
    console.log(e);
    alert("El nombre del pokemon no está bien escrito o no se encuentra en la base de datos de pokedex")
  }
  
};

const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+ pokeIdImg +'.png';

  
  return (
    
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView>
      <Image
        source={require('../images/pokedex.png')}
        style={globalStyles.backgroundImage}>
      </Image>
      <Image style ={globalStyles.image} source={{uri: imageUrl}}/>

     <Text style={globalStyles.text}> 
     {pokemonAbility ?
      (<View >
        <Text>{pokemonName.charAt(0).toUpperCase()+ pokemonName.slice(1)}</Text>
        <Text>Type: {pokemonType}</Text>
        <Text>Abilities 1: {pokemonAbility[0]}</Text>
        <Text>Abilities 2: {pokemonAbility[1]}</Text>
        <Text>Weight: {pokemonInfo[0]}</Text>
        <Text>Height: {pokemonInfo[1]}</Text>
      </View> ):''
      } </Text>
      
      <TextInput
        style={globalStyles.input}
        placeholder="Gotta catch 'em all!"
        onChangeText={text => setPokemon(text)}
        defaultValue={text}
      />

      <Button
        onPress={getPokemon}
        title="Search"
      />
      <View style={globalStyles.space} />
      <Button
        onPress={() => navigation.navigate('Tap')}
        title="Put de cover"
      />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default Home;