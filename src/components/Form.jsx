import { Component } from 'react';

class Form extends Component {
    state = {
        FirstName: '',
        LastName: '',
    };

    handleFirstNameChange = (event) => {
        this.setState({
            FirstName: event.target.value,
        });
        console.log(this.state);
    };

    handleLastNameChange = (event) => {
        this.setState({
            LastName: event.target.value,
        });
        console.log(this.state);
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                Form
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        onChange={this.handleFirstNameChange}
                        type='text'
                        value={this.state.FirstName}
                    />
                    <input
                        onChange={this.handleLastNameChange}
                        type='text'
                        value={this.state.LastName}
                    />
                    <button type='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
