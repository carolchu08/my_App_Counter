import React, { Component } from 'react';
import '../Style/CounterStyle.css';

 class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0,
        
        };
    }
     onIncrease = ()=>{
         this.setState(
             prevState=> ({number: prevState.number+1}));
            this.props.increaseSum();
     }

     onDecrease = ()=>{
        this.setState({
            number: this.state.number -1,});
            this.props.decreaseSum();

    }
    render() {
        return (
            <section className='counterBox'>
                <input type="button" value="+" onClick= {this.onIncrease}/>
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick= {this.onDecrease}/>
            </section>
        
        );
    }
}

export default Counter;
