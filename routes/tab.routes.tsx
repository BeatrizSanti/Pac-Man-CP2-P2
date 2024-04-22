import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'

import Home from '../components/Home';

const {Screen,Navigator} = createBottomTabNavigator();

export function TabRotas(){

    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'green'
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:()=> <MaterialIcons
                    name="home" size={30}/>
                }}

            />
            <Screen
                name='Login'
                component={Login}
                options={{
                    headerShown:false,
                    tabBarIcon:()=> <MaterialIcons
                    name="login" size={30}/>
                }}

            />
        </Navigator>
    )
}




