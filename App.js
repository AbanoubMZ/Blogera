import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Stylesheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/Context/BlogContext';

import IndexScreen from './src/Screens/IndexScreen';
import ShowScreen from './src/Screens/ShowScreen';
import EditScreen from './src/Screens/EditScreen';
import CreateScreen from './src/Screens/CreateScreen';


const navigator = createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Edit:EditScreen,
  Create:CreateScreen

},
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'BLOGERA',
  
  }
}

)

const App= createAppContainer(navigator);

export default ()=>{
  return(
    <Provider>
        <App/>
    </Provider>
  );
}