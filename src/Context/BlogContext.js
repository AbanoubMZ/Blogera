import createDataContext from './createDataContext';
import { call } from 'react-native-reanimated';


const blogReducer =(state,action)=>{
    switch(action.type){
        case 'add_blogpost':
            return [...state,{id:Math.floor(Math.random()*99999),
                title: action.payload.title,
                content:action.payload.content,
                date:new Date().toString()
            }];
        case 'edit_blogpost':
        return state.map(post=>{
            return post.id===action.payload.id ? action.payload:post;
            }
        );
        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id !== action.payload);
        default:
            return state;
    }
} 


const addBlogPost=(dispatch)=>{

    return (title,content,callback)=>{
        dispatch({type:'add_blogpost',payload:{title,content}});
        if(callback){
            callback();
        }
    };

    
};
const editBlogPost=(dispatch)=>{
    return(id,title,content,callback)=>{
        const date= new Date().toString();
        dispatch({type:'edit_blogpost',payload:{id,title,content,date}})
        if(callback){
            callback();
        }
        
    }
};

const deleteBlogPost=(dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_blogpost',payload:id});
    };
};

export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost},[]);

