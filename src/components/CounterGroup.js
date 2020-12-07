import React, { Component } from 'react';
import Counter from "./Counter";

class CounterGroup extends Component {
    initArraySize = (number) => {
        const size = number.length > 0 ? parseInt(number):0;
       return Array.from(Array(size).keys())
    };
    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                initArraySize.map((value) => (
                    <Counter />
                )
                )}
                
            </div>
        );
    }
}

export default CounterGroup;