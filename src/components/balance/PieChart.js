import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsData: [],
            chartData: [],
            chartConfig: {
                backgroundGradientFrom: "#1E2923",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#08130D",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5
            }
        };
        this.props.setLoadingFalse();
    }

    render() {
        return (
            <View>

            </View>
        )
    }

}