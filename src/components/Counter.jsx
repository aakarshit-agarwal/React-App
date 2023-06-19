import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <>
                <h3>Counter value is: {this.state.counter}</h3>
                <button onClick={this.incrementCounter}>
                    Increment Counter
                </button>
                <button
                    onClick={() => {
                        this.decrementCounter();
                    }}
                >
                    Decrement Counter
                </button>
            </>
        );
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    decrementCounter() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
}

export default Counter;
