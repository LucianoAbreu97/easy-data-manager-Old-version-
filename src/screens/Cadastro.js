import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { stylesCadastro } from '../css/stylesCadastro';
import { firebase } from '../database/firebase';

export default class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      displayName: '',
    };
  }

  atualizarValor = (valor, props) => {
    this.setState({ [props]: valor });
  };

  cadastrar = () => {
    const { email, password, displayName } = this.state;
    if (email === '' || password === '' || displayName === '') {
      alert('Digite usuário e senha!');
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          response.user.updateProfile({ displayName: displayName });
          this.setState({ email: '', password: '', isLoading: false, displayName: '' });
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
          alert('Erro: ' + error.message);
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#3740fe" />
        </View>
      );
    }

    return (
      <View style={stylesCadastro.container}>
        <Text>Name</Text>
        <TextInput
          style={stylesCadastro.input}
          value={this.state.displayName}
          onChangeText={(val) => this.atualizarValor(val, 'displayName')}
        />
        <Text>Email</Text>
        <TextInput
          style={stylesCadastro.input}
          value={this.state.email}
          onChangeText={(val) => this.atualizarValor(val, 'email')}
        />
        <Text>Password</Text>
        <TextInput
          style={stylesCadastro.input}
          value={this.state.password}
          onChangeText={(val) => this.atualizarValor(val, 'password')}
          secureTextEntry={true}
          maxLength={8}
        />
        <TouchableOpacity style={stylesCadastro.button} onPress={this.cadastrar}>
          <Text style={stylesCadastro.buttonTxt}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={stylesCadastro.returnLogin} onPress={() => this.props.navigation.navigate('Login')}>
          Já tem conta? Clique aqui para fazer Login!
        </Text>
      </View>
    );
  }
}
