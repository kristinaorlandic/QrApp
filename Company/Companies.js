import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, FlatList } from 'react-native-web';



const Companies = () => {
    const [companiesArray, setCompaniesArray] = useState([]);

    AsyncStorage.getItem("companies").then(data => {
        if (data) {
            const companiesDataJson = JSON.parse(data);
            companiesDataJson.map(company => {
                setCompaniesArray(oldArray => [...oldArray, company.naziv]);
            });
        }
        alert(companiesArray);
    }).catch(err => console.log(err));

    return (<View >
        <ul>
            {companiesArray.map(item =>
                <li key="{item}">{item}</li>
            )}
        </ul>

    </View >);
};

export default Companies;