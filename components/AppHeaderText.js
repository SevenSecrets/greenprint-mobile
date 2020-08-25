import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';
import { create } from 'react-test-renderer';

class AppHeaderText extends Component {
    render() {
      return (
        <AppText>
            <Text style={styles.header}>
                {this.props.children}
            </Text>
        </AppText>
      );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: "bold",
    }
})


export default AppHeaderText;