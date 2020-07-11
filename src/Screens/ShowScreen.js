import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Context} from '../Context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    
    const id = navigation.getParam('id')
    const {state}=useContext(Context);
    const blogPost=state.find(post=>post.id===id);
    return(
        <View style={styles.container}>
            <Image
                source={require("../../assets/Footer.png")}
                style={{ position: "absolute", bottom: -325, right: -225 }}
            />
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
            <Text style={styles.date}>{blogPost.date}</Text>
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
        alignItems:'flex-start',
        flex:1
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        marginVertical:20,
        alignSelf:'center'
    },
    content:{
        marginHorizontal:7,
        fontSize:18,
        fontWeight:'100'

    },
    date:{
        fontSize:14,
        color:'gray',
        alignSelf:'flex-end',
        marginTop:25,
        marginHorizontal:5
    }
});

export default ShowScreen