import React, {Component, Fragment, createContext} from 'react';
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';

import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css';
import GlobalProvider from '../../context/context';
import Hock from '../Pages/Hock/Hock';


class Home extends Component {
    render(){
        return (  
            <BrowserRouter>
            <Fragment>
                  <div className="navigation">
                      <Link to="/">Blog Post</Link>
                      <Link to="/product">Product</Link>
                      <Link to="/lifecycle">LifeCycle</Link>
                      <Link to="/youtube-comp">YoutubeCompPage</Link>
                      <Link to="/hock">Hock</Link>
                  </div>
                  <Route path="/" exact component={BlogPost} />
                  <Route path="/product" component={Product} />
                  <Route path="/lifecycle" component={LifeCycleComp} />
                  <Route path="/detail-post/:postID" component={DetailPost} />
                  <Route path="/youtube-comp" component={YoutubeCompPage} />
                  <Route path="/hock" component={Hock}/>
              </Fragment>
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(Home);