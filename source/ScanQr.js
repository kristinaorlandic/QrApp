import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';



const ScanQr = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        alert(`${data}`);

        fetch('https://demo.tiramisuerp.com/qr_code/get_invoice.php', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer c01e33b9-21de-474c-b656-9674594d8896',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'qr_url': data,
                'id': 1
            })
        }).then(response => response.json())
            .then(response => { console.log(response) })


    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Skenirajte ponovo'} onPress={() => setScanned(false)} />}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default ScanQr;