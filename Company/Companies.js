import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, FlatList } from 'react-native-web';



const Companies = ({ navigation }) => {
    /*  const [companiesArray, setCompaniesArray] = useState([]);
  
      AsyncStorage.getItem("companies").then(data => {
          if (data) {
              const companiesDataJson = JSON.parse(data);
              companiesDataJson.map(company => {
                  setCompaniesArray(oldArray => [...oldArray, company.naziv]);
              });
          }
          alert(companiesArray);
      }).catch(err => console.log(err));*/


    return (<View >
        {JSON.stringify(navigation.getParam('form', 'naziv'))}
    </View >);
};

export default Companies;