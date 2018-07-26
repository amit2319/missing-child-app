import React, {Component} from 'react';
import { Card , CardItem,View , Text , Header , Button} from 'native-base';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


   const content = (props)=>{
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center' }}>
                <Icon name={'md-checkmark-circle-outline'} size={200} style={{color:'#43A047'}}/>
                <Text style={styles.text}>Your Photo Is Uploaded Successfully</Text>
                </View>
                <Button  info full onPress={()=>props.navigation.navigate('Home')}><Icon name={'ios-arrow-back-outline'} style={{color:'#fff'}} size={20}/>
                    <Text>Go Home</Text>
                </Button>
            </View>
        );
    }


const styles = {
    container: {
        padding:30,
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    text:{
        fontSize:15,
        fontWeight:'100',
    }
}

export default  content;