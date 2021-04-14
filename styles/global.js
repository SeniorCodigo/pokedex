
import { StyleSheet} from 'react-native';


const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0082f',
      justifyContent: 'center',
      
    },
    backgroundImageTap:{
      height:'95%',
      width:'115%',
    },
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      textAlign: 'center',
      
    },
    space: {
      borderWidth: 10,
      borderColor: "rgba(0,0,0,0)",
    },
    image: {
      width: 140,
      height: 140,
      left: 15,
      marginTop: 50,
  },
    backgroundImage:{
      position: 'absolute',
      top: -100,
      backgroundColor: "#841584", 
    },
    text: {
      top: -120,
      left: 170,
      marginBottom: 50,
    }
})

  export default globalStyles;