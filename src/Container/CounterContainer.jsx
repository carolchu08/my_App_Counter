import {connect} from 'react-redux';
import { increaseSum,decreaseSum } from '../actions';
import Counter from '../components/Counter';
const mapDispatchToProps = (dispatch)=>({
    increaseSum:()=>{
        dispatch(increaseSum())
    },
    decreaseSum: ()=>{
        dispatch(decreaseSum())
    }

})
const CounterContainer = connect(null,mapDispatchToProps)(Counter);
export default CounterContainer;