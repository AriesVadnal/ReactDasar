import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import './DetailPost.css';


class DetailPost extends Component {

  state = {
    post : {
      title : '',
      body : ''
    }
  }

  componentDidMount(){
    let id = this.props.match.params.postID;
    Axios.get(`http://localhost:3004/posts/${id}`)
    .then(res => {
       let data = res.data;
       this.setState({
         post : {
          title : data.title,
          body: data.body
         }
       })
    })
  }

  render(){
    return(
      <Fragment>
        <div className="p-detail-post">
        <p className="detail-title">{this.state.post.title}</p>
        <p className="detail-body">{this.state.post.body}</p>
        </div>
      </Fragment>
    )
  }
}

export default DetailPost;