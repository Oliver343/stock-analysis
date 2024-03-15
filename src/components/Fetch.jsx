import { useState, useEffect } from "react";

export default function Fetch() {
    const [displayQuote, setDisplayQuote] = useState('Loading')
    const key = "" // Add your key here

    useEffect(() => {
        fetchQuote()
    }, [])

    async function fetchQuote() {
        try {
            const response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=" + key);
            console.log(response)
            const quote = await response.json();
            if(response.ok) {
                setDisplayQuote(quote["Global Quote"]["01. symbol"])
                console.log(quote);
            } else {
                setDisplayQuote("There was a problem loading the data.")
            }
          } catch (error) {
            // TypeError: Failed to fetch
            console.log('There was an error', error);
            setDisplayQuote("Failed to fetch information. Please try again later.")
          }


      }

    return(
        <div>
            <h1>Fetched Quote:</h1>
            <p>{displayQuote}</p>
        </div>
    )
}