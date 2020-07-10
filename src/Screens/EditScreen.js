import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm'

const EditScreen=({navigation})=>{

const id=navigation.getParam('id');
const {state,editBlogPost}=useContext(Context);
const blogPost=state.find(post=>post.id===id);



return(
    <BlogPostForm 
        initalValues={{title:blogPost.title,content:blogPost.content}}
        onSubmit={(title,content)=>editBlogPost(id,title,content,()=>navigation.navigate('Index'))}
    />

    );

}
const styles=StyleSheet.create({});
export default EditScreen