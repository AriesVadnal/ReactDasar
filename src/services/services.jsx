import Post from './Post';
import Get from './Get';
import Put from './Put';
import Delete from './Delete';


// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);
// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);
// POST
const postNewsBlog = (data) => Post('posts', false, data);
// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true)

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;

