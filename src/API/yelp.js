import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer EvkS7wOilG8-s69KNNsrft_pKfoHDpm-VCCZn9eti8CEzGIE2UbVpc6qY6Hrcuhkez9XRwjr7uOshrv9SwThL-YZHDeN9HdwetaRFud3JhhTq5eNhoVnFgm62lHHXnYx'
    }

});


