import React, {useState} from 'react';
import {Text, View, Image, Button } from 'react-native';
import globalStyles from '../styles/global'
import axios from 'axios';

const Pokemon = (props) => {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbility, setPokemonAbility] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokeIdImg, setPokeIdImg] = useState("");
  

const getPokemon = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${props.name.toLowerCase()}`;
    const res = await axios.get(url);
    let abilities = [res.data.abilities[0].ability.name, res.data.abilities[1].ability.name];
    let pokeInfo = [res.data.weight, res.data.height];
    let idImg = res.data.forms[0].url.split("/");

    setPokemonType(res.data.types[0].type.name);
    setPokemonName(res.data.forms[0].name);   
    setPokemonAbility(abilities);
    setPokemonInfo(pokeInfo);
    setPokeIdImg(idImg[6])
  } catch (e) {
    console.log(e);
    alert("The name of the pokemon is not spelled correctly or it is not in the pokedex database")
  }
  
};

const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+ pokeIdImg +'.png';


    return ( 
        
    
            <View >
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
              } 
              </Text>
              
              <Button
                onPress={getPokemon}
                title="Search"
                color='#01fbfb'
              />
       

            </View>
         
     );
}
 
export default Pokemon;