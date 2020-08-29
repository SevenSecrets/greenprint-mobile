import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import AppText from './AppText';

const GroundForm = (props) => {

    return(
        <Formik
            initialValues={{ from: '', to: '' }}
            onSubmit={async values => {props.fetchApiData(values)}}
        >
            {({handleChange, handleSubmit, values}) => (
                <View style={styles.container}>
                    <AppText style={{alignSelf: "Left" }} >From:</AppText>
                    <TextInput 
                        onChangeText={handleChange('from')}
                        value={values.from}
                        style={styles.textInput}
                        placeholder="From"
                    />
                    <AppText style={{alignSelf: "Left" }}>To:</AppText>
                    <TextInput
                        onChangeText={handleChange('to')}
                        value={values.to}
                        style={styles.textInput}
                        placeholder="To"
                    />
                    <Button onPress={handleSubmit} title="Submit"  color="rgb(217,172,132)" accessibilityLabel="Submit"/>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 4,
        backgroundColor: "rgb(242,242,242)",
        margin: "2%",
    },
    container: {
        width: "90%",
        margin: "3%",
    }
});

export default GroundForm;