import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    let api = `https://v6.exchangerate-api.com/v6/9406d88ce40bc431aa8b337e/latest/${currency}`

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(res => setData(res.conversion_rates))
        // console.log(data);
    }, [currency])
    return data;
}

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://v6.exchangerate-api.com/v6/9406d88ce40bc431aa8b337e/latest/${currency}`)
//         .then(res => res.json())
//         .then(res => setData(res.conversion_rates))
//         console.log(data);
//     }, [currency])
//     // console.log(data);
//     return data
// }

export default useCurrencyInfo;