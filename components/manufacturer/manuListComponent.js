import React from 'react';
import { Text } from 'react-native'
import { List, ListItem, Body, Right } from 'native-base';

import ListItemComponent from './manuListItemComponent'

export default class ManuList extends React.Component {
    render() {
        return (
            /*<List dataArray={this.props.currentDiscs}
                renderRow={(disc) =>
                    <ListItem>
                        <Body>
                            <Text>{disc.discName}</Text>
                        </Body>
                        <Right>
                            <TextItem 
                                statSelected={this.props.statSelected}>

                            </TextItem>
                        </Right>
                    </ListItem>
                }>
            </List> */
            <List>
                {this.props.currentDiscs.map((disc, i) => {
                    return <ListItemComponent 
                        key={disc.discName}
                        statSelected={this.props.statSelected}
                        currentDisc={disc}
                        />
                })}
            </List>
        )
    }
}