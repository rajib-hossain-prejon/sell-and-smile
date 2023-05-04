import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';

import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Food', value: 1, backgroundColor: 'salmon', icon: 'food' },
  { label: 'Watch', value: 2, backgroundColor: 'royalblue', icon: 'watch' },
  { label: 'Camera', value: 3, backgroundColor: 'cyan', icon: 'camera' },
  { label: 'Clothing', value: 3, backgroundColor: 'salmon', icon: 'tshirt-v-outline' },
];

function ListingEditScreen(props) {
 const location = useLocation();
  



  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images'></FormImagePicker>
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />

        <Picker
          items={categories}
          name='category'
          placeholder='Category'
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          width='50%'
        />

        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />

        <SubmitButton title='Post' />
      </Form>
    </Screen>
  );
}
 
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
