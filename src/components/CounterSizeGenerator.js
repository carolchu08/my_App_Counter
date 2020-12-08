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
        this.props.onChange(event);
    };
    render() {
        return (
            <div>
                <section style={
                {
                 border: '2px solid white',
                 padding: '15px'
                }
            }>
                <label>Generate  
                <input type="number" value={this.state.size} onChange={this.onChange} />
                counter</label>
                </section>
            </div>
        );
    }
}

export default CounterSizeGenerator;