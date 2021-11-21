import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './AddCard.style';
import Input from '../Input/';
import Button from '../Button';

const AddCard = ({sendProduct}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  // App.js e Gönderilecek nesne
  const [product, setProduct] = useState({});

  const onButtonPress = () => {
    if (name === '' || price === '') {
      return;
    }
    const date = new Date();
    // name, price , date değerlerinin product nesnesine atanması
    setProduct({name, price, date});
  };

  // product güncellendiğinde App.js e gönderilecek 
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <View style={styles.container}>
      <Input
        label="Ürün Adı"
        placeholder="Ürün Adını Girin"
        sendText={text => setName(text)}
      />
      <Input
        label="Ürün Fiyatı"
        placeholder="Ürün Fiyatı"
        sendText={text => setPrice(text)}
      />
      <Button title="Ekle..." onPress={onButtonPress} />
    </View>
  );
};
export default AddCard;