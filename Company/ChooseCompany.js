import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar, Picker } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChooseCompany = ({ navigation }) => {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [companyError, setCompanyError] = useState('');

    const finish = () => {
        if (selectedCompany != "") {
            alert(selectedCompany);
            setCompanyError('');
        } else {
            setCompanyError('Morate izabrati preduzeće!');
        }
    }

    /*  AsyncStorage.getItem("companies").then(data => {
          if (data) {
              const companiesDataJson = JSON.parse(data);
              alert(companiesDataJson.naziv)
  
          };
  
          AsyncStorage.getItem("token").then(data => {
              if (data) {
                  let token = JSON.parse(data)
              }
          }).catch(err => console.log(err))
      };*/
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
            </View>
            <Text style={styles.error}>{companyError}</Text>

            <TouchableOpacity style={styles.loginBtn}
                onPress={finish}>
                <Text style={styles.loginText}>Nastavite</Text>
            </TouchableOpacity>
        </View >
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
        width: "90%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
    },

    CompanyInput: {
        backgroundColor: "#e0e0e0",
        height: 50,
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
    loginBtn: {
        width: "90%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#aeaeae",
    },
    error: {
        fontSize: 12,
        color: '#b71c1c',
        fontWeight: 'bold',
        paddingTop: 5
    },
});

export default ChooseCompany;