import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../API/yelp';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    // going to pass down search term and the call back to change it to the search bar component
    //any time we want to update items on the screen we use state
    const [results, setResults] = useState([]);

    //helper function
    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'minneapolis'
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    )
};


const styles = StyleSheet.create({})

export default SearchScreen;