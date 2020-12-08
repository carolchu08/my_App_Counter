import {connect} from 'react-redux';
import {resetNum, updateSize } from '../actions';
import CounterSizeGenerator from '../components/CounterSizeGenerator';
const mapDispatchToProps = (dispatch)=>({
    updateSize:(size)=>{
        dispatch(updateSize(size))
    },
    resetNum:()=>{
        dispatch(resetNum())
    }

})
const CounterSizeGeneratorContainer = connect(null,mapDispatchToProps)(CounterSizeGenerator);
export default CounterSizeGeneratorContainer;