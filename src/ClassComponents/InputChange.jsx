import React, { Component } from 'react';

class InputChange extends Component {

    constructor(props){
        super(props)
        this.state={
            message:''
        }
    }
    handleChange=(e)=>{
        this.setState({message:e.target.value})
    }
    render() {
        return (
            <div>
                <input type="text" name="" id=""  value={this.state.message} onChange={this.handleChange}/>
                {
                    this.state.message
                }
            </div>
        );
    }
}

export default InputChange;
