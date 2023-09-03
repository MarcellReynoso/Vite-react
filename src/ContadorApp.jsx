import { useState } from "react";

export const ContadorApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Contador:</h1>
            <p>{counter}</p>
            <button onClick={handleClick}>
                Soy un botón
            </button>
        </>
    )
}
