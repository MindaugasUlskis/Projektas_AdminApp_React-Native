import React from "react";
import { NavigationContainer } from "@react-navigation/native";




import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginScreen } from "./Screens/LoginScreen";
import { CommandScreen } from "./Screens/CommandScreen";
import  {OrderManagementScreen} from "./Screens/OrderManagementScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="CommandScreen" component={CommandScreen}/>
        <Stack.Screen name="OrderManagementScreen" component={OrderManagementScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App