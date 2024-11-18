import React, { Component } from 'react';
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {

   
    render() {
        const {count,inc}=this.props
        return (
            <div>
                <button onClick={inc}>Click {count}</button>

            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter);
