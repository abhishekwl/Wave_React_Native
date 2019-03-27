import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyleProvider, Container, Content, Text, Thumbnail, Card, CardItem, Left } from 'native-base';
import LottieView from 'lottie-react-native';
//LOCAL
import config from '../../config';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';
import ServiceListItem from '../../components/ServiceListItem';

class Services extends React.Component {
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
                                <Text style={titleTextStyle}>{'Services'}</Text>
                                <Text style={subtitleTextStyle}>{ 'Make your life easier with us' }</Text>
                            </View>
                            <LottieView
                                source={require('../../assets/lottie/service.json')}
                                style={{height: 96,width: 96}}
                                autoPlay
                                loop
                            />
                        </View>

                        <Text style={[titleTextStyle,{marginTop: 8}]}>{'Events'}</Text>

                        <ServiceListItem
                            title={'Goodie Bag Collection'}
                            image={require('../../assets/images/rainbow_parachute.jpg')}
                            onPress={ ()=>{} }
                            imageStyle={{backgroundColor: '#398860'}}
                        />

                        <Text style={[titleTextStyle,{marginTop: 8}]}>{'Services'}</Text>

                        <ServiceListItem
                            title={'Hive and Arc Mobile Access'}
                            image={require('../../assets/images/id_card.png')}
                            onPress={ ()=>{} }
                            imageStyle={{backgroundColor: '#c792f5'}}
                        />


                        <ServiceListItem
                            title={'Lee Wee Nam Mobile Access'}
                            image={require('../../assets/images/books.png')}
                            onPress={ ()=>{} }
                            imageStyle={{backgroundColor: '#f5a623'}}
                        />

                        <ServiceListItem
                            title={'Sleeping Pod Booking'}
                            image={require('../../assets/images/bed.png')}
                            onPress={ ()=>{} }
                            imageStyle={{backgroundColor: '#f5a623'}}
                        />

                        <ServiceListItem
                            title={'Hall Access'}
                            image={require('../../assets/images/house.png')}
                            onPress={ ()=>{} }
                            imageStyle={{backgroundColor: '#5ac8fa'}}
                        />
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

export default Services;