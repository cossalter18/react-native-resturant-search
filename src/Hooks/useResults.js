import {useEffect, useState} from 'react';
import yelp from '../API/yelp'


export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    //helper function
    const searchApi = async (searchTerm) => {
        console.log('Hi there');

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'minneapolis'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage("something went wrong")
        }
    }

    //Call searchApi is first rendered
    //THIS IS BAD CODE could lead to a infinite loop
    //searchApi('pasta')

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [ searchApi, results, errorMessage];
};