import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrement}>+1</button>
        </div>
    );
}

function Number() {
    return (
        <div>
            <Counter />
        </div>
    );
}

const myElement = <Number />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);