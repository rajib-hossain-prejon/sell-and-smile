import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';



function NewListingButton({onPress}) {
return <TouchableOpacity onPress={onPress} >
 <View style={styles.container}>
 
 <MaterialCommunityIcons name='plus-circle' color={colors.white  } size={30}/>
 
</View>
</TouchableOpacity>;
}

const styles = StyleSheet.create({
container: {
 alignItems: 'center',
 backgroundColor: colors.primary,
 borderColor: colors.white,
 bottom: 30,
 borderRadius: 40,
 borderWidth: 3, 
 borderRadius: 40,
 height: 70,
 justifyContent: 'center',
 width: 70 
},
});

export default NewListingButton;
