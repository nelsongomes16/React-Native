import React from 'react';
import {ScrollView,Text,Image, View, ImageBackground} from 'react-native';
import {ListItem, List} from 'native-base';

var myBackground2 = require('../assets/raids_loading.png');

class SearchBody extends React.Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return <View />
        }
        return(
            <ImageBackground 
            source={myBackground2}
            style={{width: '100%', height: '100%'}}>
            <ScrollView style={{flex:1}}>
                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image source={{uri: pokemon.sprites.front_default}}
                    style={styles.img} />
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold', color: 'red'}}>Size</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Weigth - {pokemon.weight} Kg</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Height - {pokemon.height/10} m</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold', color:'red'}}>Abilities</Text>
                    </ListItem>
                    <List
                        dataArray={pokemon.abilities}
                        renderRow={(item)=>
                                <ListItem>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>
                        }
                        >
                        </List>
                </View>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles ={
    header:{
        fontSize:30,
        color: 'red',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img:{
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        flex:1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}


export default SearchBody;