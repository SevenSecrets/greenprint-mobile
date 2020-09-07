import React from 'react';
import { StyleSheet, View } from 'react-native';
import FooterText from './text/FooterText';
import SmallHeaderText from './text/SmallHeaderText';

const Footer = (props) => {
    return(
        <View style={styles.footer}>
            <SmallHeaderText>Calculations</SmallHeaderText>
            <FooterText>This app calculates the carbon data based around the distance travelled and the mode of travel used. If driving, the calculation is based on an average car, if using public transit, an average train is assumed. Walking and cycling will always produce no carbon so no calculation happens. The Carbon produced is pulled from the Trip to Carbon API (for rail and driving journeys) and from Brighter Planet API (for flights).</FooterText>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        alignItems: "center",
        backgroundColor: "rgb(91,115,85)",
    }
});

export default Footer;