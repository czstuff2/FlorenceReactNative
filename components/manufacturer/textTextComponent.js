import React from 'react';
import { Text } from 'react-native'

export default class TextTestItem extends React.Component {
    render() {
        return (
            <Text>{this.props.statSelected}</Text>
        )
    }
}