import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './components/AppText';
import AppHeaderText from './components/AppHeaderText';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeaderText>Project GreenPrint</AppHeaderText>
        <AppText>Hello there!</AppText>
        <AppText>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling). You can also calculate the carbon footprint for air travel.</AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#465940',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;