import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FooterText = (props) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 9,
        textAlign: 'center',
        maxWidth: "95%",
        margin: '1%',
        marginBottom: "2%",
        fontFamily: 'Roboto',
        color: 'rgb(217,172,132)'
    }
});

export default FooterText;