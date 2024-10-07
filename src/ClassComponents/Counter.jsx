import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
        console.log("Contructor initialise")
        this.state = {
            // using props pass no
            count: this.props.no
        }
    }

    inc = () => {
        this.setState((pre) => ({
            count: pre.count + 1
        }))
    }
    dec = () => {

        if (this.state.count > 0) {
            this.setState((pre) => ({
                count: pre.count - 1
            }))
        }

    }
    reset = () => {
        this.setState((prev) => ({
            count: 0
        }))
    }

    render() {
        return (
            <div>

                <button onClick={this.inc}>Increement</button>
                <button onClick={this.dec}>Decreement</button>
                <span>{this.state.count}</span>
                <button onClick={this.reset}>Reset</button>

            </div>
        );
    }
}

export default Counter;
