import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';
import FormInput from '../../components/FormInput';
import { styles, COLOR_DEFAULT } from '../../style/MainStyle';
import * as Animatable from 'react-native-animatable';
import componentStyle from '../register/componentStyle';

export default function LoginScreen() {
    return (
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Bem-vindo(a)!</Text>
          <Animatable.View
            animation="fadeInUp"
            delay={500}
            style={styles.containerForm}
          >
            <FormInput
              styleText={styles.title}
              styleInput={styles.input}
              title="Email"
              placeholderInput="Digite um email"
            />
            <FormInput
              styleText={styles.title}
              styleInput={styles.input}
              title="Senha"
              placeholderInput="********"
            />
            <TouchableOpacity style={componentStyle.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ componentStyle.text }>
              <Text style={styles.buttonRegisterText}>Register</Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>
      </View>
    );
}