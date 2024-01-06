import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Password from './pages/Password';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} 
      options={{
        headerShown:false,
        tabBarIcon:({focused,color, size })=>{
          if(focused){
            return <Ionicons name="home" size={size} color={color} />
          }else{
            return <Ionicons name="home-outline" size={size} color={color} />
          }
         }
      }}/>
      <Tab.Screen name="Passwords" component={Password} 
      options={{
        headerShown:false,
       tabBarIcon:({focused,color, size })=>{
        if(focused){
          return <Ionicons name="key" size={size} color={color} />
        }else{
          return <Ionicons name="key-outline" size={size} color={color} />
        }
       }
      }}/>
    </Tab.Navigator>
  );
}
export default Routes