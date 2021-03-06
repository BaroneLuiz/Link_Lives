import React from 'react';

import { useNavigation, Link } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';
import { useState } from 'react';

const Login = () => { 
  
  const { navigate } = useNavigation();

  function login() {
    //Fazer validações para o login
    //Se passar => navigate('Main')
    navigate('Main');
  }

  function cadastro() {
    navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Faça seu Login</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder={'Sua ID'} style={styles.input} />

        <TextInput
          placeholder={'Senha'}
          style={[styles.input, { marginTop: 16 }]}
        />

        <RectButton style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <Text style={styles.link} onPress={cadastro}>
          <FontAwesome
            name={'angle-right'}
            size={24}
            color={'#EB3C3C'}
            style={{}}
          />
          Não tenho cadastro
        </Text>
      </View>
    </View>
  );
};

export default Login;
