import { createStackNavigator, createAppContainer } from 'react-navigation';
//LOCAL
import Splash from './src/pages/Splash';
import SignIn from './src/pages/SignIn';
import Main from './src/pages/Main';

const stackNavigator = createStackNavigator({
  Splash: { screen: Splash },
  SignIn: { screen: SignIn },
  Main: { screen: Main }
}, { headerMode: 'none', initialRouteName: 'Splash' });

export default createAppContainer(stackNavigator);