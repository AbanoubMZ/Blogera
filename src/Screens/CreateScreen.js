import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm'

const CreateScreen=({navigation})=>{
    const {addBlogPost}=useContext(Context);

    return(
        <BlogPostForm onSubmit={(title,content)=>{
            addBlogPost(title,content,()=>navigation.navigate('Index'))
            }
        }/>

    );

}
const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'#000',
        marginBottom:15,
        padding:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    },
    button:{
        backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        width:250,
        height:120
    },
    text:{
        fontSize:15,
        color:'#FFF',
        justifyContent:"center",
        alignContent:"center"

    }    

});
export default CreateScreen