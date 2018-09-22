import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { Container, Content } from 'native-base'
import ManufacturerCard from './manufacturerCard'

//Import manufacturer data
import { manufacturers } from '../../data/manufacturers.json'

import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'PocketDisc'
    };
    @observable tax = 1.07;
    @observable price = 10;

    @computed
    get total() {
        const total = this.price * this.tax;
        return parseFloat(total).toFixed(2);
    }

    doublePrice = () => {
        this.price = this.price * 2;
    };
    render() {
        let myNavigator = this.props.navigation;
        return (
            <Container>
                <Button title="DoublePrice" onPress={this.doublePrice}></Button>
                <Text>{this.total}</Text>
                <Content contentContainerStyle={styles.container}>
                    {manufacturers.map((manufacturer, i) => 
                        <ManufacturerCard 
                            manu={manufacturer} 
                            key={i}
                            myNavigator={myNavigator}
                        />)
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})