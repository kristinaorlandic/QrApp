import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [loginError, setLoginError] = useState('');

    const [companiesArray, setCompaniesArray] = useState([]);

    const login = () => {

        if (username != "" && password != "") {
            /*  await fetch('https://api.tiramisuerp.com/api/prijava-preduzece', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                      'email': username,
                      'password': md5(password)
                  })
              }).then(res => res.json())
                  .then(resData => {
                      if (resData.error != null) {
                          setLoginError(resData.error);
                      } else {
                          setLoginError('');
                          AsyncStorage.setItem("companies", JSON.stringify(resData.companies))
                          AsyncStorage.setItem("token", JSON.stringify(resData.token))
                            navigation.navigate('Preduzeće');
                      }
                  })*/

            axios.post('https://api.tiramisuerp.com/api/prijava-preduzece',
                {
                    'email': username,
                    'password': md5(password)

                }).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 200) {
                            console.log("Login successful");
                            setLoginError('');
                            AsyncStorage.setItem("companies", JSON.stringify(response.data.companies))
                            AsyncStorage.setItem("token", JSON.stringify(response.data.token))
                            navigation.navigate('Preduzeće')
                        } else {
                            setLoginError(response.error);
                        }

                    }, (err) => {
                        console.log('Could not establish connection');
                    }
                );
        }
        if (username != "") {
            setUsernameError('');
        } else {
            setUsernameError('Morate unijeti email!');
        }

        if (password != "") {
            setPasswordError('');
        } else {
            setPasswordError('Morate unijeti lozinku!');
        }
    };
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                    onChange={() => setUsernameError('')}
                />
            </View>
            <Text style={styles.error}>{usernameError}</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}

                    placeholder="Lozinka"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    onChange={() => setPasswordError('')}
                    secureTextEntry={true} />
            </View>
            <Text style={styles.error}>{passwordError}</Text>
            <Text style={styles.error}>{loginError}</Text>

            <TouchableOpacity style={styles.loginBtn}
                onPress={login}>
                <Text style={styles.loginText}>Prijavite se</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    image: {
        margin: 30,
        width: 350,
        height: 80,
    },
    inputView: {
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        width: "90%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "90%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#aeaeae",
        letterSpacing: 1,
    },
    error: {
        fontSize: 12,
        color: '#b71c1c',
        fontWeight: 'bold',
        paddingTop: 5
    },
});

export default LoginScreen;