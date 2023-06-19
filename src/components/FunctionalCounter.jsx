import { useState } from 'react';

const FunctionalComponents = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <div>Counter Value: {counter}</div>
            <div>
                <button onClick={increment}>Increment Counter</button>
            </div>
        </div>
    );
};

export default FunctionalComponents;
