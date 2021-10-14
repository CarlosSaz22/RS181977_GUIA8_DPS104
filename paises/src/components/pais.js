import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado }) => {
  
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [area, setArea] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {

    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map((e) => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setArea(e.area.total);
 

    const getImage = (pais) => {
      pais  = e.nome.abreviado;
  switch (pais) {
    case "Argentina":
      return  require("../Img/Argentina.png")
      case "Canada":
      return  require("../Img/Canada.jpg")
      case "Colômbia":
      return  require("../Img/Colombia.png")
      case "Costa Rica":
      return  require("../Img/Costa_Rica.jpeg")
       case "El Salvador":
      return  require("../Img/El_Salvador.jpg")
      case "Estados Unidos da América":
      return  require("../Img/Estados_Unidos.png")
      case "Honduras":
      return  require("../Img/Honduras.png")
      case "Espanha":
      return  require("../Img/Espanha.png")
      case "Guatemala":
      return  require("../Img/Guatemala.png")
          case "México":
      return  require("../Img/Mexico.png")
      case "Nicarágua":
      return  require("../Img/Nicaragua.jpg")
      case "Panamá":
      return  require("../Img/Panama.jpg")
       case "Peru":
      return  require("../Img/Peru.png")
    default:
    return require("../Img/transparente.jpg");
  }
}  
setUrl(getImage);

      Object.values(e.linguas).map((l) => {
        lengua.push(l.nome);
      });
    });


    
  });

  

 
  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{ justifyContent: 'center' }}>
        <Text>Capital:{capital}</Text>
        <Text>Region:{region}</Text>
        <Text>Lengua:{lengua.toString()}</Text>
          <Text>Extensión teritorial: {area} km²</Text>
           <Text style={styles.textobandera}>Bandera</Text>
   
     <View style={styles.container}>
     <Image
        style={styles.bandera}
 source={url}

  
      />


          </View>  
      </View>
    </Card>
  );
};
export default Pais;

const styles = StyleSheet.create({
 container:{
   justifyContent: 'center',
    alignItems: 'center',
 },
  bandera: {
    width: 200,
    height: 100,

  },
  textobandera:{
    textAlign: 'center'
  },
});
