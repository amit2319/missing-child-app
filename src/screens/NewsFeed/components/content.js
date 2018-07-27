import React, { Component } from "react";
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class NewFeed extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressItem}>
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: this.props.image}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Text style={{fontSize:30}}>{this.props.age}</Text>
                            <Body>
                            <Text>{this.props.name}</Text>
                            <Text note>{this.props.place_of_missing}</Text>
                            </Body>
                        </Left>
                    </CardItem>

                </Card>
            </TouchableOpacity>
        )
    }
}