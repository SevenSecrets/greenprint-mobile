import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './text/AppText';
import GoogleMapsLink from './GoogleMapsLink';

const ListItem = (props) => {

    function capitaliseMode(mode) {
        return mode.charAt(0).toUpperCase() + mode.slice(1);
    }

    return(
        <View style={styles.listItem}>
            <AppText>{capitaliseMode(props.item.mode)}</AppText>
            <AppText>Distance:&nbsp;{props.item.distance}&nbsp;miles</AppText>
            <AppText>Time&nbsp;{props.item.travel_time}</AppText>
            <AppText>Carbon:&nbsp;{props.item.carbon}kg</AppText>
            <GoogleMapsLink url={props.item.url}></GoogleMapsLink>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 5,
        backgroundColor: "rgb(217,182,137)",
        maxWidth: "100%",
        margin: 2,
        padding: 2
    }
});

export default ListItem;