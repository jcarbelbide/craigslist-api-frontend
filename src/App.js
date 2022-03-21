import './App.css';
import APIForm from "./components/APIForm";
import OutputBox from "./components/OutputBox";
import {useState} from "react";

function App() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [jsonItems, setJsonItems] = useState("Choose your query and click 'Request API'")

    const handleRequest = (location, subLocation, board, startingIndex, query) => {
        fetch(`http://localhost:8082/api/${location}/${subLocation}/${board}/${startingIndex}/${formatQuery(query)}`)
            .then(response => response.json())
            .then((result) => {
                setIsLoaded(true)
                setJsonItems(result)
            }, (error) => {
                setIsLoaded(true)
                setError(error)
            })
    }

    const formatQuery = (query) => {
        return query.replace(" ", "+")
    }

    return (
        <div className="App">
            <header className="App-header">
                <APIForm handleRequest={handleRequest}/>
                <OutputBox jsonItems={jsonItems}/>
            </header>
        </div>
    );
}

export default App;
