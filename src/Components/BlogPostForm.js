import React,{useState} from 'react';
import {Text,TextInput,StyleSheet,View,Button} from 'react-native';

const BlogPostForm=({onSubmit,initalValues})=>{
    const [Title,setTitle]=useState(initalValues.title);
    const [Content,setContent]=useState(initalValues.content);
    
    return(
        <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput value={Title} onChangeText={(text)=>setTitle(text)} style={styles.input}/>
        
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput value={Content} onChangeText={(text)=>setContent(text)} style={styles.input}/>

        <Button title='Save Post' 
            onPress={()=>onSubmit(Title,Content)}

       />
    </View>
    );

}

BlogPostForm.defaultProps={
    initalValues:{
        title:'',
        content:''
    }
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5

    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5,

    }
});

export default BlogPostForm