import React from 'react';

import { useFormikContext } from 'formik';

import { TouchableNativeFeedback } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      ></AppTextInput>
      <ErrorMessage error={errors[name]} visible={touched.email}></ErrorMessage>
    </>
  );
}

export default AppFormField;
