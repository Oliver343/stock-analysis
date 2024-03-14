import { useState, useEffect } from "react";

export default function Fetch() {
    const [displayQuote, setDisplayQuote] = useState('Loading')
    const key = "" // Add your key here

    useEffect(() => {
        fetchQuote()
    }, [])

    async function fetchQuote() {
        const response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=" + key);
        const quote = await response.json();
        setDisplayQuote(quote["Global Quote"]["01. symbol"])
        console.log(quote);
      }

    return(
        <div>
            <h1>Fetched Quote:</h1>
            <p>{displayQuote}</p>
        </div>
    )
}