"use strict";
import React, {Component} from "react";
import {AppRegistry, Dimensions, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import firebase from "react-native-firebase";
import {RNCamera} from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./header"
import Spinner from "react-native-loading-spinner-overlay";
import {withNavigationFocus} from "react-navigation-is-focused-hoc";
// import keypair from "keypair";


class SelfieVerification extends Component {
    constructor(props) {

        super(props);
        this.state = {
            selfieCaptured: false,
            path: null,
            spinner: false,
            pair: null,
            Aadhar_image_front: null,
            Aadhar_image_back: null,
            Dl_image: null,
        };

    }



    render() {
        return (
            <View style={styles.container}>
                {this.state.path && this.state.selfieCaptured
                    ? this.renderImage()
                    : this.renderCamera()}
                <Spinner
                    visible={this.state.spinner}
                    textContent={"One moment..."}
                    textStyle={{color: "#fff"}}
                />
            </View>
        );
    }



    renderCamera() {
        return (
            this.props.isFocused ?
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                permissionDialogTitle={"Permission to use camera"}
                permissionDialogMessage={
                    "We need your permission to use your camera phone"
                }
                ratio={"16:9"}
            >
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}
                        underlayColor="rgba(255, 255, 255, 0.5)"
                    >
                        <View/>
                    </TouchableHighlight>
                </View>
            </RNCamera> : null
        );
    }


    renderImage() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1}}
                    resizeMode="contain"
                    source={{uri: this.state.path}}
                />
                <Icon
                    style={styles.submit}
                    name="arrow-circle-right"
                    size={50}
                    onPress={this.uploadSelfie.bind(this)}
                />
                <Icon
                    style={styles.cancel}
                    name="undo"
                    size={50}
                    onPress={() => this.setState({path: null})}
                />
            </View>
        );
    }



    uploadSelfie() {
        const image = this.state.path;
        console.log(image);
        let filename;
        try{
            if(this.props.navigation.params.type === 'Lost'){
                filename = "Selfie/Lost";
            }
        }
        catch(err){
            filename = "Selfie/Found";
        }
        const imageRef = firebase
            .storage()
            .ref(filename)
            .child(new Date().toLocaleString());

        let mime = "image/png";
        this.setState({spinner: true});
        const {navigation} = this.props;
        const {state: {params}, navigate} = navigation;
        return imageRef
            .put(image, {contentType: mime})
            .then(() => {
                this.setState({spinner: false});
                navigate('response')
                return imageRef.getDownloadURL();
            })
            .then(url => {
                // URL of the image uploaded on Firebase storage
                /*let data = {
                    method: "POST",
                    body: JSON.stringify({
                        image_url: url,
                        oid: params.person_identifier
                    }),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                };
                return fetch("https://api.bharatchain.org/face-compare", data)
                    .then(response => response.json()) // promise
                    .then(json => {
                        console.log(JSON.parse(json))
                        if (JSON.parse(json).match_status == true) {
                            this.setState({ spinner: false });
                            navigate("Profile", {
                                person_identifier: params.person_identifier,
                                imageuri : this.state.path
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });*/
                if (url) {
                    console.log(url);



                }
            });
    }

    takePicture = async function () {
        this.setState({spinner: true});
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            console.log(data);
            this.setState({path: data.uri, selfieCaptured: true, spinner: false});
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    capture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: "#FFF",
        marginBottom: 15,
    },
    square: {
        width: Dimensions.get('window').width - 10,
        height: 250,
        borderWidth: 2,
        borderColor: "#fff",
    },
    cancel: {
        position: "absolute",
        left: 20,
        bottom: 20,
        backgroundColor: "transparent",
        color: "#FFF",
        fontWeight: "600"
    },
    submit: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "transparent",
        color: "#FFF",
        fontWeight: "600"
    }
});

AppRegistry.registerComponent("SelfieVerification", () => SelfieVerification);
export default withNavigationFocus(SelfieVerification)