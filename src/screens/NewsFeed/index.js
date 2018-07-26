import React, { Component } from 'react';
import {FlatList} from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header'
import UserProfile from "../PersonDetail";

const styles = {
    container: {
        backgroundColor: '#fff',
    },
};

export default class NewsFeed extends Component {

    constructor(props) {
        super(props);

    }

    _keyExtractor = (item, index) => index;

    _onPressItem = (item) => {
        const {navigate} = this.props.navigation;
        navigate('Profile',{item : item})
    };


    _renderItem = ({item}) => (
        <Content
            onPressItem={this._onPressItem}
            // image={item.image}
            // name={item.name}
            // age={item.age}
        />
    );

    render() {
        return (
            <Container style={styles.container}>
                <FlatList
                    data={[{title: 'Title Text', key: 'item1'},{title: 'Title Text', key: 'item2'},{title: 'Title Text', key: 'item3'}]}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </Container>
        );
    }
}

NewsFeed.propTypes = {
    navigation: PropTypes.object.isRequired,
};
