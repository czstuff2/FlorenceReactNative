import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base'

export default class MainScreen extends React.Component {
    render() {
      return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <Text>Get you some</Text>
                <Button title="Go to Details" onPress={() => this.props.navigation.navigate("Details")} />
            </Content>
        </Container>
      )
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})