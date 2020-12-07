import React, { Component } from 'react';
import CounterGroup from './CounterGroup';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            size:0,
        };
    }
    onChange = (event) => {
        this.setState({size:event.target.value});
    };
    render() {
        return (
            <div>
                <label>Generate  
                <input type="number" value={this.state.size} onChange={this.onChange} />
                counter</label>
                <CounterGroup size={this.state.size} />
            </div>
        );
    }
}

export default CounterSizeGenerator;