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
        this.state = {
            data : []
        }

    }

    componentWillMount(){
        fetch("https://faceapi.bharatchain.org/missing-children-list/", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json()) // Transform the data into json
            .then( (data) => {
                this.setState({data : data.children});
                //do something awesome that makes the world a better place
            });
    }

    _keyExtractor = (item, index) => index;

    _onPressItem = (item) => {
        const {navigate} = this.props.navigation;
        navigate('Profile',{item : item})
    };


    _renderItem = ({item}) => (
        <Content
            onPressItem={()=>this._onPressItem(item)}
            image={item.image_url}
            name={item.child_name}
            age={item.age}
            place_of_missing = {item.place_of_missing}
        />
    );

    render() {
        return (
            <Container style={styles.container}>
                <FlatList
                    data={this.state.data}
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
