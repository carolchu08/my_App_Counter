import React, { Component } from 'react';
class CounterGroupSum extends Component {

    render() {
        return (
            <div>
            <section>
                <span>  Sum of all components' value is {this.props.sum}</span>
            </section>
         
            </div>
        );
    }
}

export default CounterGroupSum;