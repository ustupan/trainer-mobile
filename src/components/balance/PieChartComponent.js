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
                    <Text style={styles.buttonText1}>{this.props.name}</Text>
                    <PieChart
                        data={this.props.data}
                        width={screenWidth}
                        height={240}
                        chartConfig={chartConfig}
                        accessor= "population"
                        backgroundColor= "transparent"

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
        marginTop: 100
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
        fontSize: 25,
        fontWeight: '800',
        marginBottom: 40
    },
    body: {
        flex: 1,
        alignItems: 'center',
    }
});