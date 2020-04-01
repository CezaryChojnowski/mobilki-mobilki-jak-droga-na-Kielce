import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Info from '../screens/Info';

const screens = {
    Home: {
        screen: Home
    },
    Info :{
        screen: Info
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);