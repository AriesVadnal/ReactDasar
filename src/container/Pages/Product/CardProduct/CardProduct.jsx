import React, {Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component {


    render(){
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/A1101103.jpg" alt=""/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 410.000</p>
                <Counter/>
            </div>
        )
    }
}

export default CardProduct;