import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import LineChart from "react-native-chart-kit/src/line-chart";
const screenWidth = Dimensions.get("window").width;


const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `#ff5a66`,
    propsForBackgroundLines: {
        strokeDasharray: "",
        color: 'red',
    }
};

export default class LineChartComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            resultsData: [],
            chartData: [],
            barPercentage: 0.5,
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.buttonText1}>Bieg na 100m</Text>
                    <LineChart
                        bezier
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
                        yAxisSuffix={"s"}
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
    buttonText1: {
        color: '#ff5a66',
        fontSize: 18,
        fontWeight: '600'
    },
    body: {
        flex: 1,
        alignItems: 'center',
    }
});