import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem'

const JourneyOptions = (props) => {

    const renderItem = ({ item }) => {
        return(
            <ListItem item={item} />
        )
    }

    return(
        <View style={{ width: "70%", padding: "2%", alignContent: "center", }}>
            <FlatList data={props.results} renderItem={renderItem} keyExtractor={(item, key) => key.toString()}/>
        </View>
    )
}



export default JourneyOptions;