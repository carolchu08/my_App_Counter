import React, { Component } from 'react';
import CounterGroupSumContainer from '../Container/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../Container/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../Container/CounterGroupContainer';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }
    
    
    render() {
        return (
            
            <div>
             <CounterSizeGeneratorContainer/>
             <CounterGroupSumContainer/>
             <CounterGroupContainer/>


            </div>
        );
    }
}

export default MultiCounter;