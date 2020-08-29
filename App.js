import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from './components/AppText';
import LargeHeaderText from './components/LargeHeaderText';
import Calculator from './components/Calculator';

const App = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.about}>
        <LargeHeaderText>Project GreenPrint</LargeHeaderText>
        <AppText>Hello there!</AppText>
        <AppText>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling).</AppText>
      </View>
      <Calculator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#465940',
  },
  about: {
    alignSelf: "center",
    alignItems: 'center',
    width: "100%",
    margin: "2%",
  }
});

export default App;