import React from 'react';
import {View,Text, Image} from 'react-native';
import {Header, Left, Button, Icon, Body,Title,Right,Fab} from 'native-base';
import {MapView} from 'expo';
import Meteor, {createContainer} from 'react-native-meteor';

class PokeMap extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <Header>
                    <Left>

                    </Left>
                    <Body>
                        <Title>PokeMap</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-power"/>
                        </Button>
                    </Right>
                </Header>
                <MapView
                    style={{flex:1}}
                    initialRegion={{
                        latitude: 41.2696,
                        longitude: -8.0826,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>

                    </MapView>
            </View>
        )
    }
}

export default PokeMap;