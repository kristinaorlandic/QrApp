import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

    const api_conn = () => {

        axios.post('https://demo.tiramisuerp.com/qr_code/get_invoice.php',
            {
                'qr_url': 'https://efitest.tax.gov.me/ic/#/verify?iic=6eabaa9d6b8c17610ff0c98fc1474553&tin=12345678&crtd=2021-07-29T11:27:07%2002:00&ord=19&bu=qg684ez801&cr=nm616du119&sw=cy617ua780&prc=230.72',
                'id': 1,
                'indicator': 1
            }, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer c01e33b9-21de-474c-b656-9674594d8896',
                'Content-Type': 'application/json',
            }
        }).then(
            (response) => {
                if (response.status === 200) {
                    console.log("ok");
                } else {
                    console.log(response)
                }

            }, (err) => {
                console.log('Could not establish connection');
            }
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                /* onPress={() => { navigation.navigate('ScanQr'); }}*/
                onPress={api_conn}
            >
                <Image
                    style={styles.image}
                    source={require("../assets/qr-code.png")} />
                <Text style={styles.text}>Skenirajte QR kod</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Image
                    style={styles.image}
                    source={require("../assets/file.png")} />
                <Text style={styles.text}>DMS</Text>
            </TouchableOpacity >

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: 80,
        height: 80,
    },
    button: {
        paddingTop: 50,
        margin: 10,
        marginTop: 30,
        width: 150,
        height: 220,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,

    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 30
    }
});

export default HomeScreen;