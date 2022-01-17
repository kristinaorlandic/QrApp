import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView, FlatList } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';

const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.view}>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/logo.png")} />
                <TextInput
                    style={styles.input}
                    placeholder="Korisničko ime"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Šifra"
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('Početna'); }}
                >
                    <Text style={styles.text}>Prijavi se</Text>
                </TouchableOpacity >
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        width: '300',
    },
    image: {
        marginTop: 30,
        width: 400,
        height: 80,
        marginBottom: 50
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.2,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
    },
    button: {
        borderWidth: 0.2,
        marginTop: 30,
        paddingTop: 10,
        backgroundColor: "lightgray",
        height: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        marginHorizontal: 20

    },
    list: {
        marginTop: 30,
    }
});

export default LoginScreen;