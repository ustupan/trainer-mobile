import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import PieChart from "react-native-chart-kit/src/pie-chart";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `#ff5a66`,

};

const colors = [
    {color: "rgba(131, 167, 234, 1)"},
    {color: "rgb(226,234,87)"},
    {color: "rgb(234,44,0)"},
    {color: "rgb(234,25,144)"},
    {color: "rgb(92,234,44)"},
    {color: "rgb(0,234,172)"},
    {color: "rgb(234,87,169)"},
    {color: "rgb(96,19,10)"},
    {color: "rgb(96,94,13)"},
    {color: "rgb(95,35,96)"},
];

const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 0,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];


export default class PieChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsData: [],
            chartData: [],
            data: this.props.data
        };
        this.props.setLoadingFalse();
    }

    render() {
        console.log(this.state.data);
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={230}
                        chartConfig={chartConfig}
                        accessor= "population"
                        backgroundColor= "transparent"
                        absolute
                        style={{marginBottom: 200}}
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
        marginTop: 180
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