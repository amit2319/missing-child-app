import React from 'react';
import {Body, Header, Left, Right, Text, View} from 'native-base';


const header = () => {

    return (
        <View>
            <Header>
                <Left/>
                <Body>
                <Text style={{color:'white'}}>Demo App</Text>
                </Body>
                <Right/>
            </Header>

        </View>

    );
}

export default header;