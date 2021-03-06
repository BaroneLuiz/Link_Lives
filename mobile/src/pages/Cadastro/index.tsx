import React, { useState } from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import styles from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [genre, setGenre] = useState(0);
  const [smoker, setSmoker] = useState(false);
  const [disease, setDisease] = useState('');
  const [emailParente, setEmailParente] = useState('');

  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleCadastrar() {
    console.log({
      name,
      cpf,
      rg,
      email,
      birthday,
      genre,
      smoker,
      disease,
      emailParente,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
          justifyContent: 'center',
        }}
      >
        <View style={styles.header}>
          <Feather
            name='arrow-left'
            size={24}
            onPress={handleNavigateBack}
            style={styles.icon}
          />
        </View>
        <Image style={styles.logo} source={logo} />

        <View style={styles.body}>
          <Text style={styles.title}>Informe dados para cadastro</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Nome'}
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            <TextInput
              placeholder={'CPF'}
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
            />

            <TextInput
              placeholder={'RG'}
              style={styles.input}
              value={rg}
              onChangeText={setRg}
            />

            <TextInput
              placeholder={'Email'}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder={'Data de Nascimento'}
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
            />

            <Text style={styles.switchText}>Gênero</Text>

            <SwitchSelector
              height={48}
              fontSize={18}
              buttonColor='#EB3C3C'
              style={styles.switch}
              options={[
                { label: 'Masculino', value: 0 },
                { label: 'Feminino', value: 1 },
                { label: 'Outros', value: 2 },
              ]}
              initial={0}
              onPress={(value: number) => setGenre(value)}
            />

            <Text style={styles.switchText}>Fumante?</Text>

            <SwitchSelector
              fontSize={18}
              buttonColor='#EB3C3C'
              style={styles.switch}
              options={[
                { label: 'Sim', value: 1 },
                { label: 'Não', value: 0 },
              ]}
              initial={0}
              onPress={(value: number) => setSmoker(value === 1)}
            />

            <TextInput
              placeholder={'Descrição caso tenha doença infecciosa'}
              style={styles.input}
              value={disease}
              onChangeText={setDisease}
            />

            <TextInput
              placeholder={'Email de um parente'}
              style={styles.input}
              value={emailParente}
              onChangeText={setEmailParente}
            />
          </View>

          <RectButton onPress={handleCadastrar} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
