import React from 'react';
import { Text } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Content, Form, List, ListItem, Body, Right } from 'native-base';

import ManuListComponent from './manuListComponent'

import TypePickerComponent from './typePickerComponent'
import StatPickerComponent from './statPickerComponent'

export default class ManufacturerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSelected: "0",
            statSelected: "speed",
            searchParam: undefined,
            discs: undefined,
            manu: this.props.navigation.getParam('manuName', 'ManuName?')
        };
        this.onTypeValueChange = this.onTypeValueChange.bind(this)
        this.onStatValueChange = this.onStatValueChange.bind(this)
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('manuName', 'Manu Name?'),
        };
      }
    
      onTypeValueChange(value) {
        if (value === 0) {

        } else {
            this.setState({
                typeSelected: value
            });
            console.log("type changed on manuScreen")
        }
    }
    onStatValueChange(value) {
        if (value === 0) {

        } else {
            this.setState({
                statSelected: value
            });
            console.log("stat changed to "+`${value}`+" on manuScreen")
        }
    }
    render() {
        let myNavigator = this.props.navigation;
        const typeSelected = this.state.typeSelected
        const statSelected = this.state.statSelected
        let discs;
        if(this.state.manu === "Innova") {
            discs = require('../../data/innova-discs.json')
        }
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
                <Form style={{flex: 0, flexDirection: 'row'}}>
                    <TypePickerComponent
                        selectedValue={typeSelected}
                        onSelectionChange={this.onTypeValueChange}
                    />
                    <StatPickerComponent
                        selectedValue={statSelected}
                        onSelectionChange={this.onStatValueChange}
                    />
                </Form>
                <Content>
                    {/* Add discs w/ <Separator bordered>
                        <Text>Drivers</Text>
                    </Separator> */}
                    <ManuListComponent 
                        currentDiscs={discs}
                    />
                </Content>
            </Container>
        )
    }
}
