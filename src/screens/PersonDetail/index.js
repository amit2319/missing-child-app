
import Profile from './Profile'
import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
    Image,
    ImageBackground,
    Linking,
    ListView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'

import mainColor from './constants'

import Email from './Email'
import Separator from './Separator'
import Tel from './Tel'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: mainColor,
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
})

class Contact extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    componentWillMount(){
        console.log(this.props.navigation.state.params);
    }


    onPressPlace = () => {
        console.log('place')
    }

    onPressTel = number => {
        Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err))
    }

    onPressSms = () => {
        console.log('sms')
    }

    onPressEmail = email => {
        Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
            console.log('Error:', err)
        )
    }

    renderHeader = () => {
        const {
            place_of_missing,
            guardian_name,
            child_name,
            image_url,
            age,
            phone_number,
            // avatar,
            // avatarBackground,
            // name,
            // address: { city, country },
        } = this.props.navigation.state.params.item

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{
                        uri: "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
                    }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{
                                uri: image_url,
                            }}
                        />
                        <Text style={styles.userNameText}>{child_name}</Text>
                        <View style={styles.userAddressRow}>
                            <View>
                                <Icon
                                    name="place"
                                    underlayColor="transparent"
                                    iconStyle={styles.placeIcon}
                                    onPress={this.onPressPlace}
                                />
                            </View>
                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                    {place_of_missing}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    renderTel = () => {
        return (
            <Tel
                key={`tel-${1}`}
                index={1}
                name={this.props.navigation.state.params.name}
                number={this.props.navigation.state.params.item.phone_number.toString()}
                onPressSms={this.onPressSms}
                onPressTel={this.onPressTel}
            />
        )
    }

    // renderEmail = () => (
    //   <ListView
    //     contentContainerStyle={styles.emailContainer}
    //     dataSource={this.state.emailDS}
    //     renderRow={({ email, id, name }, _, k) => {
    //       return (
    //         <Email
    //           key={`email-${id}`}
    //           index={k}
    //           name={name}
    //           email={email}
    //           onPressEmail={this.onPressEmail}
    //         />
    //       )
    //     }}
    //   />
    // )

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
                        {this.renderHeader()}
                        {Separator()}

                        {this.renderTel()}

                        {Separator()}
                        <Text style={{fontSize:20}}>Guardian Name: {this.props.navigation.state.params.item.guardian_name}</Text>
                        {Separator()}
                        <Text style={{fontSize:20}}>Age: {this.props.navigation.state.params.item.age}</Text>
                        {Separator()}

                    </Card>
                </View>
            </ScrollView>
        )
    }
}

export default Contact


