import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext';
import {Feather} from '@expo/vector-icons';
const IndexScreen=({navigation})=>{

    const {state,deleteBlogPost}=useContext(Context);
    
    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost=>blogPost.title}
                renderItem={({item})=>{
                   return(
                       <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.postView}>
                                <Text style={styles.postTitle}>{item.title} - {item.id}</Text>
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
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <Feather name='plus' size={30}/>
        </TouchableOpacity>,
    }
}
const styles=StyleSheet.create({
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