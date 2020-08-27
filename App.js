import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from './components/AppText';
import LargeHeaderText from './components/LargeHeaderText';
import SmallHeaderText from './components/SmallHeaderText';

const App = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.about}>
        <LargeHeaderText>Project GreenPrint</LargeHeaderText>
        <AppText>Hello there!</AppText>
        <AppText>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling). You can also calculate the carbon footprint for air travel.</AppText>
      </View>
      <View style={styles.calculator}>
        <SmallHeaderText>Carbon Calculator</SmallHeaderText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calculator: {
    borderRadius: "4px",
    backgroundColor: 'rgb(110,143,103)',
    width: "40%",
    alignSelf: "center",
    alignItems: "center",
    margin: "auto",
  },
  container: {
    backgroundColor: '#465940',
  },
  about: {
    flex: 1,
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%",
  }
});

export default App;