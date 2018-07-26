import React from 'react';
import {Footer , FooterTab , Button , Title , Text ,View} from 'native-base';


const footer = ()=>{

    return(
        <View>

            <Footer>
                <FooterTab>
                    <Button full style={{backgroundColor:'#5bc1df'}} ><Text style={{color:'#fff'}}></Text></Button>

                </FooterTab>
            </Footer>
        </View>

    );
}

export default  footer;