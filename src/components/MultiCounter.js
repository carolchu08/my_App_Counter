import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from "./CounterGroupSum";
import CounterGroup from "./CounterGroup";

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }
    
    handleChange = (event) => {
        this.setState({
            size: event.target.value,
            sum:0
        })
    }
    handleSum = (updatedSum) => {
        this.setState({
            sum: updatedSum,
        });
    }



    
    render() {
        return (
            
            <div>
             <CounterSizeGenerator size={this.state.size} onChange={this.handleChange}/>
             <CounterGroupSum sum={this.state.sum} />
             <CounterGroup size={this.state.size} sum={this.state.sum} onChangeValue={this.handleSum}/>


            </div>
        );
    }
}

export default MultiCounter;