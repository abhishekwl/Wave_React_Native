import React from 'react';
import { StatusBar, StyleSheet, Image, Alert } from 'react-native';
import { Container, Content, StyleProvider, Text, Item, Input, Icon, Button, Spinner } from 'native-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
//LOCAL
import config from '../../config';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

const requestUrl = config.BASE_SERVER_URL+'/users';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        progress: false
    };

    componentWillMount() {
        if(firebase.apps.length===0) firebase.initializeApp({
            apiKey: "AIzaSyDVMTIU2C-vV0HQq0_tGLP1XC1BWDV-aDQ",
            authDomain: "wave-now-co.firebaseapp.com",
            databaseURL: "https://wave-now-co.firebaseio.com",
            projectId: "wave-now-co",
            storageBucket: "wave-now-co.appspot.com",
            messagingSenderId: "1045980237193"
        });
    }

    render() {
        const {
            contentStyle,
            imageStyle,
            titleTextStyle,
            subtitleTextStyle,
            inputStyle,
            itemStyle
        } = styles;

        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container>
                    <Content contentContainerStyle={contentStyle}>
                        <StatusBar backgroundColor='white' barStyle='dark-content' />

                        <Image
                            source={ require('../../assets/images/smartphone_wave.png') }
                            style={imageStyle}
                        />

                        <Text style={titleTextStyle}>{ 'Going to places with Wave' }</Text>

                        <Text style={subtitleTextStyle}>{ 'We make it simple for you to go to places and to perform your daily tasks seamlessly.' }</Text>
                    
                        <Item style={itemStyle}>
                            <Icon active name='email-outline' style={{color: config.COLOR_TEXT_DARK}} />
                            <Input
                                style={inputStyle}
                                placeholder='Email Address'
                                keyboardType='email-address'
                                onChangeText={ text => this.setState({ email: text }) }
                                />
                        </Item>
                        <Item style={itemStyle}>
                            <Icon active name='key-variant' style={{color: config.COLOR_TEXT_DARK}} />
                            <Input
                                style={inputStyle}
                                placeholder='Password'
                                secureTextEntry
                                onChangeText={ text => this.setState({ password: text }) }
                                />
                        </Item>

                        <Text style={subtitleTextStyle}>{ 'Sign in with your student email.' }</Text>

                        <Button block style={{marginTop: 16}} onPress={ this.signIn.bind(this) } disabled={this.state.progress}>
                            {
                                this.state.progress?<Spinner color='white'/> :null
                            }
                            <Text>{ this.state.progress?'Signing In..':'Sign In' }</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }

    signIn() {
        this.setState({ progress: true });
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, password).then(userRecord =>{
            const userId = userRecord.user.uid;
            this.fetchUserObjectFromServer(userId);
        }).catch(err => this.notifyMessage(err.toString()));
    }

    notifyMessage(message) {
        this.setState({ progress: false });
        Alert.alert(config.APP_NAME, message);
    }

    fetchUserObjectFromServer(userId) {
        axios.get(requestUrl+'/'+userId).then(response => {
            const responseBody = response.data;
            const user = {
                id: responseBody._id,
                name: responseBody.name,
                authority_id: responseBody.authority_id,
                authority_name: responseBody.authority_name,
                email: responseBody.email,
                phone: responseBody.phone,
                photo: (responseBody.photo===null||responseBody.photo===undefined||responseBody.photo==='')?null:responseBody.photo
            };
            this.setState({ progress: false });
            this.props.navigation.navigate('Main', {user});
        }).catch(err => this.notifyMessage(err.toString()));
    }
};

const styles = StyleSheet.create({
    contentStyle: {
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 306,
        width: 322
    },
    titleTextStyle: {
        color: config.COLOR_TEXT_LIGHT,
        fontSize: 18,
        marginTop: 24,
        textAlign: 'center'
    },
    subtitleTextStyle:{
        color: config.COLOR_TEXT_LIGHT,
        fontSize: 14,
        fontFamily: 'helvetica_light',
        marginTop: 8,
        textAlign: 'center'
    },
    inputStyle: {
        color: config.COLOR_TEXT_DARK,
        fontSize: 16
    },
    itemStyle: {
        marginTop: 16
    }
});

export default SignIn;