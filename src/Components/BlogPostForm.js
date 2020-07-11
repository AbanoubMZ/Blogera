import React,{useState} from 'react';
import {Text,TextInput,StyleSheet,View, TouchableOpacity} from 'react-native';

const BlogPostForm=({onSubmit,initalValues,callBack})=>{
    const [Title,setTitle]=useState(initalValues.title);
    const [Content,setContent]=useState(initalValues.content);
    
    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                value={Title} 
                onChangeText={(text)=>setTitle(text)} 
                style={styles.input}
                placeholder="Enter blog title"

                />
            
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                value={Content} 
                onChangeText={(text)=>setContent(text)} 
                style={styles.contentInput}
                numberOfLines={5}
                multiline={true}
                placeholder="Enter content here"
                />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>onSubmit(Title,Content)}>
                            <Text style={{ color: "#FFF", fontWeight: "500" }}>Save Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>callBack.pop()}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Cancel</Text>
                </TouchableOpacity>

            </View>
           

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
        borderColor:'#FF6766',
        marginBottom:15,
        padding:5,
        margin:5

    },
    contentInput:{
        fontSize:18,
        height:120,
        borderWidth:1,
        borderColor:'#FF6766',
        marginBottom:15,
        padding:5,
        margin:5,
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5,

    },
    button: {
        marginTop:20,
        marginHorizontal: 50,
        backgroundColor: "#FF6766",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
   
});

export default BlogPostForm