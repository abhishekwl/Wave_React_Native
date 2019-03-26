import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
//LOCAL
import config from '../../config';

const requestUrl = config.BASE_SERVER_URL+'/users';

class Splash extends React.PureComponent {
    componentWillMount() {
        firebase.initializeApp({
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
            containerStyle,
            imageStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <StatusBar backgroundColor={config.COLOR_PRIMARY} barStyle='light-content' />

                <Animatable.View animation='bounceIn' duration={1500}>
                    <Image
                        source={ require('../../assets/images/logowhite.png') }
                        style={imageStyle}
                    />
                </Animatable.View>
            </View>
        );
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) this.fetchUserObjectFromServer(firebase.auth().currentUser.uid);
            else setTimeout(()=>this.props.navigation.navigate('SignIn'), 1800);
        });
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
            this.props.navigation.navigate('Main', {user});
        }).catch(err => this.notifyMessage(err.toString()));
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: config.COLOR_PRIMARY
    },
    imageStyle: {
        height: 128,
        width: 300
    }
});

export default Splash;