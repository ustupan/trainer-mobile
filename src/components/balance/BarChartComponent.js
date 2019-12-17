import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import BarChart from "react-native-chart-kit/src/bar-chart";
import LineChart from "react-native-chart-kit/src/line-chart";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `#ff5a66`,

};

export default class BarChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsData: [],
            chartData: this.props.data,
            discipline: this.props.discipline,
            unit: this.props.unit,
        };
        this.props.setLoadingFalse();
    }

    render() {
        console.log(this.props.data);
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.buttonText1}>{this.state.discipline}</Text>
                    <BarChart
                        data={{
                            labels: this.props.data.map((el)=> el.resultDate),
                            datasets: [
                                {
                                    data: this.props.data.map((el) => el.value),
                                    color: () => `#ff5a66`, // optional
                                    strokeWidth: 3, // optional
                                }
                            ]
                        }}
                        yAxisSuffix={this.state.unit.toString()}
                        fromZero={false}
                        verticalLabelRotation={90}
                        width={screenWidth}
                        height={550}
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
        marginTop: 20
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
    buttonText1: {
        color: '#ff5a66',
        fontSize: 18,
        fontWeight: '600'
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