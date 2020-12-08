import React, { Component } from 'react';
import '../Style/CounterSizeGeneratorStyle.css';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            size:0,
        };
    }
    onChange = (event) => {
        this.setState({size:event.target.value});
        this.props.updateSize(event.target.value);
        this.props.resetNum();
    };
    render() {
        return (
            <div>
                <section className='sizeGeneratorBox'>
                <label>Generate 
                <input className='sizeGeneratorBoxPadding' type="number" value={this.state.size} onChange={this.onChange} />
                 counter</label>
                </section>
            </div>
        );
    }
}

export default CounterSizeGenerator;