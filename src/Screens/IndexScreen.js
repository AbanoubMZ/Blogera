import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext';
import {Feather} from '@expo/vector-icons';
const IndexScreen=({navigation})=>{

    const {state,deleteBlogPost}=useContext(Context);
    
    return(
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={blogPost=>blogPost.title}
                renderItem={({item})=>{
                   return(
                       <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.postView}>
                                <Text style={styles.postTitle}>{item.title}</Text>
                                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                    <Feather style={styles.actionIcon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                       </TouchableOpacity> 
                        
                    )
                }}
            />
        </View>

    );

}

IndexScreen.navigationOptions=({navigation})=>{
    return{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#FF6766'},
        headerTitleStyle: { color: '#FFF' },
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <Feather name='plus' size={30} style={{color:'#FFF'}}/>
        </TouchableOpacity>,
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFF'
    },
    postView:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderColor:'gray',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
    },
    postTitle:{
        fontSize:18,
    },
    actionIcon:{
        fontSize:24,
        color:'red'
    }

});
export default IndexScreen