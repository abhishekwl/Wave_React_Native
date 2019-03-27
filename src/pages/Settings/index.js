import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyleProvider, Container, Content, Text, Thumbnail } from 'native-base';
import LottieView from 'lottie-react-native';
//LOCAL
import config from '../../config';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

class Settings extends React.Component {
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

                        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={titleTextStyle}>{'Settings'}</Text>
                                <Text style={subtitleTextStyle}>{ 'Go ahead, tweak it :P' }</Text>
                            </View>
                            <LottieView
                                source={require('../../assets/lottie/settings.json')}
                                style={{height: 96,width: 96}}
                                autoPlay
                                loop
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
        fontFamily: 'Roboto_Thin',
        color: config.COLOR_TEXT_LIGHT,
        fontSize: 32
    },
    subtitleTextStyle: {
        fontFamily: 'helvetica_bold',
        color: config.COLOR_TEXT_DARK,
        fontSize: 16
    },
    thumbnailStyle: {
        height: 128,
        width: 128
    }
});

export default Settings;