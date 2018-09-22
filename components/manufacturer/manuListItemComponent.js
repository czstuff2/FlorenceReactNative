import React from 'react';
import { Text } from 'react-native'
import { ListItem, Body, Right } from 'native-base';


export default class ManuListItem extends React.Component {
    render() {
        const disc = this.props.currentDisc
        const stat = this.props.statSelected
        let statText;
        if (stat === 'speed') {
            //console.log("speed")
            statText = <Text>{disc.speed}</Text>
        } else if (stat === 'glide') {
            //console.log("glide")
            statText = <Text>{disc.glide}</Text>
        } else if (stat === 'turn') {
            //console.log("turn")
            statText = <Text>{disc.turn}</Text>
        } else {
            //console.log("fade")
            statText = <Text>{disc.fade}</Text>
        }
        return (
            <ListItem>
                <Body>
                    <Text>{disc.discName}</Text>
                </Body>
                <Right>
                    {statText}
                </Right>
            </ListItem>
        )
    }
}