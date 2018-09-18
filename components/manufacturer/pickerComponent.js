import React from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class PickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSelected: undefined,
            statSelected: undefined
        };
    }
    onTypeValueChange(value: string) {
        this.setState({
            typeSelected: value
        });
    }
    onStatValueChange(value: string) {
        this.setState({
            statSelected: value
        });
    }
    render() {
        return (
            <Form>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    placeholder="Type"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: undefined }}
                    selectedValue={this.state.typeSelected}
                    onValueChange={this.onTypeValueChange.bind(this)}
                >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    placeholder="Type"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: undefined }}
                    selectedValue={this.state.statSelected}
                    onValueChange={this.onStatValueChange.bind(this)}
                >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
            </Form>
        );
    }
}