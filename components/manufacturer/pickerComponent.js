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
                    placeholder="Sort by type"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: undefined }}
                    selectedValue={this.state.typeSelected}
                    onValueChange={this.onTypeValueChange.bind(this)}
                >
                    <Picker.Item label="Driver" value="driver" />
                    <Picker.Item label="Fairway" value="fairway" />
                    <Picker.Item label="Midrange" value="midrange" />
                    <Picker.Item label="Putter" value="putter" />
                </Picker>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    placeholder="Sort by stat"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: undefined }}
                    selectedValue={this.state.statSelected}
                    onValueChange={this.onStatValueChange.bind(this)}
                >
                    <Picker.Item label="Speed" value="speed" />
                    <Picker.Item label="Glide" value="glide" />
                    <Picker.Item label="Turn" value="turn" />
                    <Picker.Item label="Fade" value="fade" />
                </Picker>
            </Form>
        );
    }
}