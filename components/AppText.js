import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class AppText extends Component {
    render() {
      return (
        <Text style={styles.text}>
            {this.props.children}
        </Text>
      );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        width: '60%',
        margin: '1%',
        fontFamily: 'Roboto',
        color: 'rgb(242,242,242)'
    }
});

export default AppText;