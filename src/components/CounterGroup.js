import React, { Component } from 'react';
import Counter from "./Counter";

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum:0,
            arrayForRequiredSize : []
        }
        
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.size !== this.props.size) {
            this.setState({
                arrayForRequiredSize : this.initArraySize(this.props.size)
            , sum:0 });
        }
    }
    handleValueUpdate = (value)=>{
        this.setState({
            sum: this.state.sum + value
          }, () => this.props.onChangeValue(this.state.sum));
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
                    <Counter key ={value}  onChangeValue={this.handleValueUpdate}/>
                ))}
                
            </div>
        );
    }
}

export default CounterGroup;