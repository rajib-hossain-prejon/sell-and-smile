import React from 'react';
import { View, StyleSheet, Image, Touchable, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card({ title, subTitle, imageUrl, onPress }) {

  
  
  return (
    
    
    <TouchableWithoutFeedback onPress={onPress} >
    <View style={styles.card}>
      <Image  style={styles.image}     source={{
          uri: imageUrl,
        }} />

      <AppText style={styles.title} numberOfLines={1}>
        {title}
      </AppText>
      <AppText numberOfLines={2}>{subTitle}</AppText>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
