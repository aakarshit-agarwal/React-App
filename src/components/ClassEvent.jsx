import { Component } from 'react';

class ClassEvent extends Component {
    render() {
        return (
            <div>
                Class Component
                <button onClick={this.HandleEvent}>Click Me!</button>
            </div>
        );
    }

    HandleEvent() {}
}

export default ClassEvent;
