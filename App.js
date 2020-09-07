import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './components/text/AppText';
import LargeHeaderText from './components/text/LargeHeaderText';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.about}>
        <LargeHeaderText>Project GreenPrint</LargeHeaderText>
        <AppText>Hello there!</AppText>
        <AppText>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling).</AppText>
      </View>
      <View style={styles.calculator}>
        <Calculator />
      </View>
      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#465940',
    justifyContent: "space-between"
  },
  about: {
    alignSelf: "center",
    alignItems: 'center',
    width: "100%",
    margin: "2%",
  },
  calculator: {
  },
  footer: {
    marginTop: "3%",
    alignSelf: "flex-end",
  }
});

export default App;