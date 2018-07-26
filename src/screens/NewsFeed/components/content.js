import React, { Component } from "react";
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class NewFeed extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressItem}>
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://pbs.twimg.com/profile_images/909953369694859265/BOakwKQY_400x400.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Text style={{fontSize:30}}>21</Text>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>

                </Card>
            </TouchableOpacity>
        )
    }
}