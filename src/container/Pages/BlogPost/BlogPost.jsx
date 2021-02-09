import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import API from '../../../services/services';





class BlogPost extends Component {

    state = {
        post : [],
        FormBlogPost : {
          userId : 1,
          id : 1,
          title : '',
          body : ''
        },
        isUpdate : false,
        comments : []
    } 

    getPostApi = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })

        API.getComments().then(result => {
            this.setState({
                comments : result
            })
        })
    }

    hendleDelete = (data) => {
        API.deleteNewsBlog(data).then(res => {
            this.getPostApi()
        })
    }

    postDataToApi = () => {
        API.postNewsBlog(this.state.FormBlogPost).then(res => {
            this.getPostApi()
              this.setState({
                FormBlogPost : {
                    userId : 1,
                    id : 1,
                    title : '',
                    body : ''
                  },
              })
        })
    }

    putDataToApi = () => {
        API.updateNewsBlog(this.state.FormBlogPost, this.state.FormBlogPost.id).then(res => {
              this.getPostApi()
              this.setState({
                isUpdate : false,
                FormBlogPost : {
                    userId : 1,
                    id : 1,
                    title : '',
                    body : ''
                  },
              })
        })
    }

    hendleUpdate = (data) => {
        this.setState({
            FormBlogPost : data,
            isUpdate : true
        })
    }

    hendleFormChange = (event) => {
        let NewFormBlogPost = {...this.state.FormBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate) {
            NewFormBlogPost['id'] = timestamp;
        }
        NewFormBlogPost[event.target.name] = event.target.value;
        this.setState({
          FormBlogPost : NewFormBlogPost
        },() => {
          console.log(this.state.FormBlogPost)
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataToApi();
        } else {
            this.postDataToApi();
        }
    }

    hendleDetail = (id) => {
        this.props.history.push(`detail-post/${id}`)
    }

    componentDidMount(){
       this.getPostApi();
    }

    render(){
        return(
            <Fragment>
                <p>Blog Post</p>
                <hr/>
                <p className="section-title">BlogPost</p>
                <div className="form-add-post">
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" value={this.state.FormBlogPost.title} placeholder="add title" onChange={this.hendleFormChange}/>
                  <label htmlFor="body">Content</label>
                  <textarea type="text" name="body" value={this.state.FormBlogPost.body} id="body" placeholder="add content" onChange={this.hendleFormChange}/>
                  <button type="submit" className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                }
                {
                    this.state.post.map(post => {
                       return <Post key={post.id} data={post} remove={this.hendleDelete} update={this.hendleUpdate} goDetail={this.hendleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;