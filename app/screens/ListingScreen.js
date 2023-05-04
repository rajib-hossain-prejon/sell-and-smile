import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes'

import listingApi from '../api/listings'
import AppText from '../components/AppText';
import App from '../../App';
import AppButton from '../components/AppButton';

function ListingScreen({navigation}) {

  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  

  useEffect(() => {
loadListings();
  },[])

  const loadListings = async() => {
    console.log('angry')
    const response = await listingApi.getListings();
    console.log('ok',response.ok)
    if(!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  }

  console.log(error)


  return (
    <Screen style={styles.screen}>
      {
        error && (<>
        <AppText>Data Unavailable!!!</AppText>
        <AppButton title="Retry" onPress={loadListings} ></AppButton>
        </>)
      }
      {
        !error && <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>  navigation.navigate(routes.LISTING_DETAILS, item) }
          ></Card>
        )} 
      ></FlatList>
      }
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
