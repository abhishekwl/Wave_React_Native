import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { StyleProvider, Container, Content, Text, Thumbnail } from 'native-base';
import LottieView from 'lottie-react-native';
//LOCAL
import config from '../../config';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

class Home extends React.Component {
    render() {
        const {
            contentStyle,
            titleTextStyle,
            subtitleTextStyle,
            thumbnailStyle
        } = styles;
        const user = this.props.navigation.getParam('user', null);

        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Content contentContainerStyle={contentStyle}>
                        <StatusBar backgroundColor='white' barStyle='dark-content' />

                        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={titleTextStyle}>{'Home'}</Text>
                                <Text style={subtitleTextStyle}>{ 'Welcome '+user.name.split(' ')[0]+'!' }</Text>
                            </View>
                            <LottieView
                                source={require('../../assets/lottie/wink.json')}
                                autoPlay
                                loop
                                style={thumbnailStyle}
                            />
                        </View>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
};

const styles = StyleSheet.create({
    contentStyle: {
        justifyContent: 'space-around',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },
    titleTextStyle: {
        fontFamily: 'sans-serif-light',
        color: config.COLOR_TEXT_LIGHT,
        fontSize: 32
    },
    subtitleTextStyle: {
        fontFamily: 'helvetica_bold',
        color: config.COLOR_TEXT_DARK,
        fontSize: 16
    },
    thumbnailStyle: {
        height: 80,
        width: 80
    }
});

export default Home;