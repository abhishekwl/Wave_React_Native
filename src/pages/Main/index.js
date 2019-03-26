import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab, StyleProvider } from "native-base";
//LOCAL
import Home from '../Home';
import Services from '../Services';
import Friends from '../Friends';
import Settings from '../Settings';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

const mainScreenNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Services: { screen: Services },
        Friends: { screen: Friends },
        Settings: { screen: Settings }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            console.log(props);

            return (
                <StyleProvider style={getTheme(commonColor)}>
                    <Footer style={{elevation: 8}}>
                        <FooterTab>
                            <Button
                                vertical
                                active={props.navigation.state.index===0}
                                onPress={() => props.navigation.navigate('Home')}>
                                <Icon name="home" />
                                <Text>{'Home'}</Text>
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index===1}
                                onPress={() => props.navigation.navigate('Services')}>
                                <Icon name="room-service" />
                                <Text>{'Services'}</Text>
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index===2}
                                onPress={() => props.navigation.navigate('Friends')}>
                                <Icon name="account-group" />
                                <Text>{'Friends'}</Text>
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index===3}
                                onPress={() => props.navigation.navigate('Settings')}>
                                <Icon name="settings" />
                                <Text>{'Settings'}</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </StyleProvider>
            );
        }
    }
);

export default mainScreenNavigator;