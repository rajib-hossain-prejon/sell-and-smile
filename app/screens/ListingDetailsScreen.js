import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from 
'../components/ListItem';


function ListingDetailsScreen({route}) {

  const listing = route.params;

  console.log(listing)

  return (
    <View>
      <Image style={styles.image} source={{uri: listing.images[0].url}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/person.jpg')}
            title='Rajib Hossain'
            subTitle='10 Listings'
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
