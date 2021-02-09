import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';
import {GlobalConsumer} from '../../../context/context';


class LifeCycleComp extends Component {

    constructor (props) {
      super(props);
      this.state = {
        count : 1
      }
      console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
       console.log('getDerivedStateFromProps');
       return true;
    }

    componentDidMount () {
      console.log('componentDidMount');
      setTimeout(() => {
        this.setState({
          count : 3
        })
      },3000)
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
      if(nextState.count > 5) {
        return false;
      }
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('componentDidUpdate');
    }

    componentWillUnmount(){
      console.log('componentWillUnmount');
    }

    counterChange = () => {
      this.setState({
        count : this.state.count + 1
      })
    }

    render(){
        console.log('render');
        return(
          <Fragment>
          <p>LifeCycleComp</p>
            <hr/>
            <button className="btn" onClick={this.counterChange}>LifeCycleComp {this.state.count}</button>
            <p>nilai state adalah : {this.props.state.totalOrder}</p>
        </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//   return {
//     order : state.totalOrder
//   }
// }

//export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);