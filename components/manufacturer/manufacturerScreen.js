import React from 'react';
import { Text, View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Content, Form} from 'native-base';

import ManuListComponent from './manuListComponent'
import TypePickerComponent from './typePickerComponent'
import StatPickerComponent from './statPickerComponent'

import { observer } from "mobx-react";
import { observable } from "mobx";


@observer
export default class ManufacturerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSelected: "0",
            statSelected: "speed",
            searchParam: undefined,
            discs: undefined,
            defaultDiscs: require('../../data/innova-discs.json'),
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
            /* this.setState({
                discs: sortDiscsStat(value, this.state.discs)
            }) */
        }
    }
    componentWillMount() {
        console.log("Pulling manu discs");
    
        if(this.state.manu === "Innova") {
            this.setState({
                discs: this.state.defaultDiscs
            })
        }
    }
    render() {
        let myNavigator = this.props.navigation;
        const typeSelected = this.state.typeSelected
        const statSelected = this.state.statSelected
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
                        currentDiscs={this.state.discs}
                        statSelected={this.state.statSelected}
                    />
                </Content>
            </Container>
        )
    }
}
function sortDiscsStat(stat, discs) {
    switch(stat) {
        case "speed":
            //let newDiscs = discs.sort( (a.speed, b.speed) => { return b - a })
            break;
        case "glide":
            //let newDiscs = discs.sort( (a.glide, b.glide) => { return b - a })
            break;
        case "turn":
            //
            break;
        case "fade":
            //
            break;    
        default:
            //
            return newDiscs
    }
}