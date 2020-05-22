import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar'


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    // going to pass down search term and the call back to change it to the search bar component

    return (
        <View>
            <SearchBar term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={()=> console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
};


const styles = StyleSheet.create({})

export default SearchScreen;