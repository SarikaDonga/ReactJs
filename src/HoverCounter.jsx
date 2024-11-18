import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';
class HoverCounter extends Component {

    render() {
        const { count, inc } = this.props
        return (

            <div>
                <button onMouseOver={inc}>Click {count}</button>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);
