import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate('ScanQr'); }}>
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
    view: {
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        width: 80,
        height: 80,
    },
    button: {
        borderWidth: 0.2,
        paddingTop: 50,
        margin: 10,
        marginTop: 30,
        width: 150,
        height: 220,
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