import React, {Component} from 'react';
import { Card , CardItem,View , Text , Header} from 'native-base';
import {Image} from 'react-native';



   const content = (props)=>{
        return (
            <View style={styles.container}>

                <Card style={styles.card}>
                    <CardItem button onPress={() => props.navigation.navigate('cameraScreen',{'type':'Aadhaar' , 'side':'Front side of Aadhaar'})}>
                        <Image source={require('../../../../asset/img/aadhar.png')} style={styles.image}/>
                    </CardItem>
                </Card>

                <Card style={styles.card}>
                    <CardItem cardBody button onPress={() =>props.navigation.navigate('cameraScreen',{'type':'Driving License', 'side':'Front side of Driving License'})}>
                        <Image source={require('../../../../asset/img/image.png')} style={styles.image}/>
                    </CardItem>
                </Card>
            </View>
        );
    }


const styles = {
    container: {
        padding:30,
        flex:1,
        justifyContent:'center',
    },
    card:{
        justifyContent:'center',
        marginBottom:20
    },
    image: {
        flex:1,
        width:null,
        height:180
    }
}

export default  content;