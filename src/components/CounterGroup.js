import React, { Component } from 'react';
import CounterContainer from '../Container/CounterContainer';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayForRequiredSize : []
        }
        
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.size !== this.props.size) {
            this.setState({
                arrayForRequiredSize : this.initArraySize(this.props.size)
            });
        }
    }
    
    initArraySize = (size) => {
    const number = size.length > 0 ? parseInt(size) : 0;
    const keySuffix = Math.random() * 10;
    return Array.from(Array(number).keys()).map(index => `${index}_${keySuffix}`);
}
    render() {
        return (
            <div>
                {this.state.arrayForRequiredSize.map((value) => (
                    <CounterContainer key = {value} />
                ))}
                
            </div>
        );
    }
}

export default CounterGroup;