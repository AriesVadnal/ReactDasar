import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {GlobalConsumer} from '../../../context/context';


class Product extends Component {

    render(){
        return (
            <Fragment>
                            <p>Product</p>
                            <hr/>
                            <div className="header">
                                <div className="logo">
                                    <img src="" alt=""/>
                                </div>
                                <div className="troley">
                                    <img src="" alt=""/>
                                <div className="count">{this.props.state.totalOrder}</div>
                                </div>
                            </div>
                            <CardProduct/>
                            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order : state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);