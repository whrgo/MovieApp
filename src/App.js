import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0); // initional value : 0
    const onClick = () => setValue(prev => prev + 1);

    /* STATE FUNCTION OF F('Search ') */
    const [keyword, setKeyword] = useState(""); // initional value : ' '
    const onChange = event => setKeyword(event.target.value);

    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
