import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stylesLogin } from '../css/stylesLogin';
import { firebase } from '../database/firebase';
import config from '../../config'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  atualizarValor = (valor, props) => {
    this.setState({ [props]: valor });
  };

  userLogin = () => {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      alert('Usuário ou senha inválidos!');
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          this.setState({ email: '', password: '', isLoading: false });
          this.props.navigation.navigate('Home');
        })
        .catch((error) => {
          alert('Erro ao fazer login: ' + error.message);
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    return (
      <View style={stylesLogin.container}>
        <Text style={stylesLogin.textLogIn}>Log In</Text>
        <Text>Email</Text>
        <TextInput
          style={stylesLogin.input}
          value={this.state.email}
          onChangeText={(val) => this.atualizarValor(val, 'email')}
        />
        <Text>Password</Text>
        <TextInput
          style={stylesLogin.input}
          value={this.state.password}
          onChangeText={(val) => this.atualizarValor(val, 'password')}
          secureTextEntry={true}
          maxLength={8}
        />
        {this.state.isLoading ? (
          <View>
            <ActivityIndicator size="large" color="#3740fe" />
          </View>
        ) : (
          <TouchableOpacity style={stylesLogin.button} onPress={this.userLogin}>
            <Text style={stylesLogin.buttonText}>Log In</Text>
          </TouchableOpacity>
        )}
        <Text style={stylesLogin.signUp} onPress={() => this.props.navigation.navigate('Cadastro')}>
          Sign up
        </Text>
      </View>
    );
  }
}
