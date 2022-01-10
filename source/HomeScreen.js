import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ScanQr');
            }}>
                <Text>Scan QR</Text>
            </TouchableOpacity >
        </View >
    );
};

const style = StyleSheet.create({

});

export default HomeScreen;