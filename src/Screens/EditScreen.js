import React,{useContext} from 'react';
import {Image,StyleSheet, View,StatusBar} from 'react-native';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm'

const EditScreen=({navigation})=>{

const id=navigation.getParam('id');
const {state,editBlogPost}=useContext(Context);
const blogPost=state.find(post=>post.id===id);



return(
    <View>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image
            source={require("../../assets/Header.png")}
            style={{ marginTop: -210, marginLeft: -50 }}
        ></Image>
        <Image
            source={require("../../assets/Footer.png")}
            style={{ position: "absolute", bottom: -325, right: -225 }}
        ></Image>
    
        <BlogPostForm 
            initalValues={{title:blogPost.title,content:blogPost.content}}
            onSubmit={(title,content)=>editBlogPost(id,title,content,()=>navigation.navigate('Index'))}
            callBack={navigation}
        />
    </View>
    );

}
EditScreen.navigationOptions=()=>{
    return{
        header:()=>false
    }
}



const styles=StyleSheet.create({});
export default EditScreen