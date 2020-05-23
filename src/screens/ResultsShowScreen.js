import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../API/yelp'




const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')

    console.log(result)

    //helper function
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{result.name}</Text>
            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <View style={styles.info}>
                <Text>{result.location.address1}</Text>
                <Text>{result.location.city}, {result.location.state}</Text>
                <Text>Rating: {result.rating} Stars</Text>
                <Text>Phone: {result.display_phone}</Text>
                <Text>Total Reviews: {result.review_count}</Text>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 5
    },
    container: {
        marginBottom: 10,
        margin: 10
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
    },
    info: {
        margin: 5
    }
});

export default ResultsShowScreen;