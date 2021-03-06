import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';



//screen imports
import Home from './screens/Home';
import ColorPallette from './screens/ColorPallette';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "ColorPallette" component = {ColorPallette}/>
      </Stack.Navigator>
    </NavigationContainer>
   
    
  );
};



export default App;
