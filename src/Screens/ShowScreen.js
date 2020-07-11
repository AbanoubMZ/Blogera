import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    
    const id = navigation.getParam('id')
    const {state}=useContext(Context);
    const blogPost=state.find(post=>post.id===id);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>

    );

}
ShowScreen.navigationOptions=({navigation})=>{
    return{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#FF6766'},
        headerTitleStyle: { color: '#FFF' },
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
        <EvilIcons name='pencil' size={35} style={{color:'#FFF'}}/>
    </TouchableOpacity>
        
       
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        alignItems:'center',
        flex:1
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        marginVertical:20,
    },
    content:{
        marginHorizontal:7,
        fontSize:20,
        fontWeight:'100',

    }
});

export default ShowScreen