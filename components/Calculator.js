import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SmallHeaderText from './SmallHeaderText';
import GroundForm from './GroundForm';
import JourneyOptions from './JourneyOptions';

const Calculator = (props) => {

    const [results, setResults] = useState(false);

    const fetchApiData = (values) => {
        return fetch("https://project-greenprint-backend.herokuapp.com/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                from: values.from,
                to: values.to
            })
        })
        .then((res) => res.json())
        .then((json) => {
            setResults(json);
        })
        .catch((err) => console.log(err))
    }

    function journeyOptionsList() {
        if (results.error) {
            return(
                <BadRequestError
                    error={results.error}
                    description={results.description}
                />
            )
        }
        console.log(results);
        return(
            <JourneyOptions results={results} />
        );
    }

    return(
        <View style={styles.calculator}>
            <SmallHeaderText>Carbon Calculator</SmallHeaderText>
            <GroundForm fetchApiData={fetchApiData} />
            {results ? (journeyOptionsList()) : <></> }
        </View>
    );
}

const styles = StyleSheet.create({
    calculator: {
        borderRadius: 4,
        backgroundColor: 'rgb(110,143,103)',
        width: "75%",
        alignSelf: "center",
        alignItems: "center",
        margin: "auto",
      },
});

export default Calculator;