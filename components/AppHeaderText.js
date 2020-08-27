import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';
import { create } from 'react-test-renderer';

const AppHeaderText = (props) => {
    return (
        <AppText>
            <Text style={styles.header}>
                {props.children}
            </Text>
        </AppText>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: "4%",
        fontSize: 40,
        fontWeight: "bold",
        color: "rgb(217,182,137)",
    }
})


export default AppHeaderText;