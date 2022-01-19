import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
    {
        broj_dokumenta: "001-124",
        datum_dokumenta: "23.12.2021",
        komitent: "Tehno plus doo",
        ukupno: "152"
    },
    {
        broj_dokumenta: "001-417",
        datum_dokumenta: "08.06.2021",
        komitent: "Tehno plus doo",
        ukupno: "147"
    }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>Broj dokumenta: {item.broj_dokumenta}</Text>
        <Text style={[styles.title, textColor]}>Datum dokumenta: {item.datum_dokumenta}</Text>
        <Text style={[styles.title, textColor]}>Komitent: {item.komitent}</Text>
        <Text style={[styles.title, textColor]}>Ukupno: {item.ukupno}</Text>
    </TouchableOpacity>
);

const Documents = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.broj_dokumenta === selectedId ? "#aeaeae" : "#e0e0e0";
        const color = item.broj_dokumenta === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.broj_dokumenta)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.broj_dokumenta}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 15,
    },
});

export default Documents;