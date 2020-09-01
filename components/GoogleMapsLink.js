import React, { useCallback } from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const GoogleMapsLink = (props) => {

    function reformatUrl(url) {
        let splitURL = decodeURIComponent(url).split("&");
        return "https://www.google.com/maps/dir/?api=1&" + splitURL[1] + "&" + splitURL[2] + "&" + "travel" + splitURL[3];
    }

    const handlePress = () => {
        WebBrowser.openBrowserAsync(reformatUrl(props.url));
    }

    return(
        <Button title="Open in GoogleMaps" onPress={handlePress} />
    )
}

const styles = StyleSheet.create({
    
});

export default GoogleMapsLink;

// https://www.google.com/maps/dir/?api=1&origin=Camden&destination=Deptford&travelmode=transit