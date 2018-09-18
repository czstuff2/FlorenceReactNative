import React from 'react';
import { Text } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Content } from 'native-base';

import PickerComponent from './pickerComponent'

export default class ManufacturerScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('manuName', 'Manu Name?'),
        };
      };
    render() {
        let myNavigator = this.props.navigation;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <PickerComponent />
                <Content>

                </Content>
            </Container>
        )
    }
}
