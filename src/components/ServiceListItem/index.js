import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Text, Thumbnail, Body } from 'native-base';
//LOCAL
import config from '../../config';

class ServiceListItem extends React.PureComponent {
    render() {
        return (
            <Card style={{marginBottom: 16,borderRadius: 8,padding: 16}}>
                <CardItem cardBody button onPress={ this.props.onPress.bind(this) }>
                    <Left>
                        <Thumbnail large source={this.props.image} style={this.props.imageStyle} />
                    <Body>
                        <Text style={styles.titleTextStyle}>{this.props.title}</Text>
                    </Body>
                </Left>
                </CardItem>
            </Card>
        );
    }
};

const styles = StyleSheet.create({
    titleTextStyle: {
        fontFamily: 'helvetica_bold',
        color: config.COLOR_TEXT_DARK,
        fontSize: 16
    } 
});

export default ServiceListItem;