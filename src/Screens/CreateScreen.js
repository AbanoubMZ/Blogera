import React,{useContext} from 'react';
import {View,StyleSheet,StatusBar,Image} from 'react-native';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm'

const CreateScreen=({navigation})=>{
    const {addBlogPost}=useContext(Context);

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
        
            <BlogPostForm onSubmit={(title,content)=>{
                addBlogPost(title,content,()=>navigation.navigate('Index'))}}
                callBack={navigation}
            />
        </View>
    );

}
CreateScreen.navigationOptions=()=>{
    return {
        header:()=>false
    }
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