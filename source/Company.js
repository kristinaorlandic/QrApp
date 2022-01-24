import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Picker } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Company = ({ navigation }) => {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [companyError, setCompanyError] = useState('');

    const finish = () => {
        if (selectedCompany != "") {
            setCompanyError('');
            AsyncStorage.setItem("preduzece_id", selectedCompany)
            navigation.navigate('Početna');
        } else {
            setCompanyError('Morate izabrati preduzeće!');
        }
    }

    const [companies, setCompanies] = useState([]);

    /*  AsyncStorage.getItem("companies").then(data => {
          const companiesDataJson = JSON.parse(data);
          companiesDataJson.map(company => {
              setCompaniesArray(oldArray => [...oldArray, company.id, company.naziv]);
          });
          alert(companiesDataJson);
      }).catch(err => console.log(err));
  */
    useEffect(() => {
        AsyncStorage.getItem('companies')
            .then((response) => JSON.parse(response))
            .then((response) => {
                setCompanies(response)
            })
    }, []);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <Picker
                    selectedValue={selectedCompany}
                    style={styles.CompanyInput}
                    onValueChange={(itemValue, itemIndex) => setSelectedCompany(itemValue)}
                >
                    <Picker.Item key="" label="Izaberite preduzeće" value="" />
                    {companies.map(
                        item =>
                            <Picker.Item key={item.id} label={item.naziv} value={item.id} />
                    )}
                </Picker>
            </View>
            <Text style={styles.error}>{companyError}</Text>
            <TouchableOpacity style={styles.loginBtn}
                onPress={finish}>
                <Text style={styles.loginText}>Nastavite</Text>
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

export default Company;