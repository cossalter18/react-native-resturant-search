import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../API/yelp';
import useResults from '../Hooks/useResults'
import ResultsList from '../Components/ResultsList'



const SearchScreen = () => {

    const [term, setTerm] = useState('');
    // going to pass down search term and the call back to change it to the search bar component
    //any time we want to update items on the screen we use state
    const [searchApi, results, errorMessage] = useResults();

   //helper function
   const filterResultsByPrice = (price) => {
       //price === '$' || '$$' || '$$$'
       // for every result inside our result array we will ask if result.price is equal to the price we passed in. 
       //this will give us customized results for each resultlist component
       return results.filter(result => {
           return result.price === price;
       })
   }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={ () => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
};


const styles = StyleSheet.create({})

export default SearchScreen;