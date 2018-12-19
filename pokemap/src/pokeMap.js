import React from 'react';
import {View,Text, Image} from 'react-native';
import {Header, Left, Button, Icon, Body,Title,Right,Fab} from 'native-base';
import {MapView} from 'expo';
import Meteor, {createContainer} from 'react-native-meteor';

var mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#AFFFA0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#EAFFE5"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f9f8c7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#59A499"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#F0FF8D"
            },
            {
                "weight": 2.2
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fdfabf"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#1A87D6"
            }
        ]
    }
];
class PokeMap extends React.Component{

    state = {
        location: {
            latitude: 41.2696,
            longitude: -8.0826,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    };
    recordEvent = (x) => {
        this.setState({location: x});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header>
                    <Left>

                    </Left>
                    <Body>
                        <Title>PokéMap</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-power"/>
                        </Button>
                    </Right>
                </Header>
                <MapView
                    style={{flex:1}}
                    initialRegion={this.state.location}
                    provider={MapView.PROVIDER_GOOGLE}
                    customMapStyle={mapStyle}
                    onRegionChangeComplete={(x) => this.recordEvent(x)}
                    >
                    </MapView>
                    <Fab direction="left" position="bottomRight"
                    style={{backgroundColor: 'green'}}>
                        <Icon name="ios-add"/>
                    </Fab>
                    <Fab direction="right" position="bottomLeft"
                    style={{backgroundColor: 'red'}}>
                        <Icon name="ios-remove"/>
                    </Fab>
            </View>
        )
    }
}

export default PokeMap;