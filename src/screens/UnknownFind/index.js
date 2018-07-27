
import React, { Component } from 'react';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header'

const styles = {
  container: {
    backgroundColor: '#fff',
  },
};
export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>

        <Content navigation={this.props.navigation} />
      </Container>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.object.isRequired,
};

