import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import LineChart from "react-native-chart-kit/src/line-chart";
const screenWidth = Dimensions.get("window").width;



const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

export default class LineChartComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            resultsData: [],
            chartData: [],
        };

    }


    render() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ]
        };

        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={screenWidth}
                        height={620}
                        chartConfig={chartConfig}
                    />
                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.props.setSettingsTrue()}}>
                        <Text style={styles.buttonText}>Powrót do ustawień</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: 20
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:8,
        backgroundColor:'transparent'
    },
    button: {
        backgroundColor: "#ff5a66",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    body: {
        flex: 1,
        alignItems: 'center',
    }
});