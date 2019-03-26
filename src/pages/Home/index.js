import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { StyleProvider, Container, Content, Card, CardItem, Text, Body, Thumbnail } from 'native-base';
import LottieView from 'lottie-react-native';
import QRCode from 'react-native-qrcode-svg';
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
            thumbnailStyle,
            subtitleTextStyleCard
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

                        <Card style={{justifyContent: 'center',alignItems:'center'}}>
                            <CardItem header>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Thumbnail
                                        large
                                        source={ user.photo===null?require('../../assets/images/user_placeholder.png'):{uri:user.photo} }
                                    />
                                    <View style={{flex: 1, justifyContent: 'center', marginLeft: 16}}>
                                        <Text style={subtitleTextStyle}>{ user.name }</Text>
                                        <Text style={subtitleTextStyleCard}>{ user.authority_id }</Text>
                                        <Text style={subtitleTextStyleCard}>{ user.email }</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem>
                            <Body style={{justifyContent: 'center',alignItems: 'center'}}>
                                <QRCode
                                    value={user.authority_id}
                                    logo={require('../../assets/images/appicon.png')}
                                    logoSize={30}
                                    size={164}
                                    logoBackgroundColor='transparent'
                                    />
                                <Text style={{marginTop: 16}}>Scan the QR code</Text>
                            </Body>
                            </CardItem>
                        </Card>

                        <Text style={[titleTextStyle,{marginTop: 16}]}>{'Notifications'}</Text>
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
    },
    subtitleTextStyleCard: {
        fontFamily: 'helvetica_light',
        color: config.COLOR_PRIMARY,
        fontSize: 14
    }
});

export default Home;