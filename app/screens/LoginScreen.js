import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppButton,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')}></Image>

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        ></AppFormField>

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          textContentType='password'
          secureTextEntry={true}
        ></AppFormField>

        <SubmitButton title='Login'></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
