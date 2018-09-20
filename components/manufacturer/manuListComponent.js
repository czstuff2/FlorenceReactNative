import React from 'react';
import { Text } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Content, Form, List, ListItem, Body, Right } from 'native-base';

export default class ManuList extends React.Component {
    render() {
        let discs = this.props.currentDiscs
        return (
            <List dataArray={discs}
                renderRow={(disc) =>
                    <ListItem>
                        <Body>
                            <Text>{disc.discName}</Text>
                        </Body>
                        <Right>
                            <Text>{disc.speed}</Text>
                        </Right>
                    </ListItem>
                }>
            </List>
        )
    }
}