/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import Content from './components/content';


export default class App extends Component {


    render() {
        return (
            <Container style={styles.container}>
                <Content navigation={this.props.navigation}/>
            </Container>

        );
    }

}
let styles = StyleSheet.create({
    container: {}
});

