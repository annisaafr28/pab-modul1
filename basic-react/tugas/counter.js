class Counter extends React.Component {
    state = { 
        counter: 0,
    };

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleDecrement}>
                    -1
                </button>
                <button onClick={this.handleIncrement}>
                    +1
                </button>
            </div>
        );
    }
    
}

class Number extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
};

const myElement = <Number />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);