import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppText = (props) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        maxWidth: '90%',
        margin: '1%',
        fontFamily: 'Roboto',
        color: 'rgb(242,242,242)'
    }
});

export default AppText;