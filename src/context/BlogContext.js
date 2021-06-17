import BlogContextReducer from './BlogContextReducer'
import JsonServer from '../api/JsonServer'

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'get_blogPosts':
            return action.payload;
        case 'edit_blogPosts':
            return state.map(blogPost=>{
                return blogPost.id==action.payload.id
                ? action.payload
                :blogPost
            })
        case 'add_blogPosts':
            return[
                ...state,
                {
                    id:Math.floor(Math.random()*999),
                    title:action.payload.title,
                    content:action.payload.content,
                }
            ]
        case 'delete_blogPosts':
            return state.filter(blogPost.id!==action.payload)
        default:
            return state;
    }
}

const getBlogPosts=(dispatch)=>{
    return async()=>{
        const respone=await JsonServer.get('/blogposts');
        dispatch({type:'get_blogPosts',payload:respone.data})
    }
}

const addBlogPosts=(dispatch)=>{
    return async(title,content,callback)=>{
        dispatch({
            type:'add_blogPosts',
            payload:{id,title,content}
        })
        if(callback){
            callback();
        }
        await JsonServer.post('/blogposts',title,content);

    }
}

const deleteBlogPosts=(dispatch)=>{
    return(id)=>{
        dispatch({
            type:'delete_blogPosts',
            payload:{id,title,content}
        })
    }
}

const editBlogPost=(dispatch)=>{
    return(id,title,content,callback)=>{
        dispatch({
            type:'edit_blogPosts',
            payload:{id,title,content}
        });
        if(callback){
            callback();
        }
    }
}