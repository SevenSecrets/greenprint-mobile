import React, { useCallback } from 'react';
import { StyleSheet, View, Button, Linking, Alert } from 'react-native';

const GoogleMapsLink = (props) => {

    const handlePress = useCallback(async () => {

        const isSupported = await Linking.canOpenURL(props.url);

        if (isSupported) {
            await Linking.openURL(props.url)
        } else {
            Alert.alert('Cannot open this url');
        }
    }, [props.url]);

    return(
        <Button title="Open in GoogleMaps" onPress={handlePress} />
    )
}

const styles = StyleSheet.create({
    
});

export default GoogleMapsLink;