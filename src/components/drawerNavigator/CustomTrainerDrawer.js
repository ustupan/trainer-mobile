import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Container, Content, Icon, Header, Body, Footer } from 'native-base'
import { DrawerItems } from 'react-navigation';
import LogoutComponent from "../Logout.component";

export const CustomTrainerDrawer = (props) => {

    return (
        <Container>
            <Header style={styles.drawerHeader}>
                <Body>
                    <Image
                        style={styles.drawerImage}
                        source={require('../../../assets/drawer-icons/logo.png')} />
                </Body>
            </Header>
            <Content>
                <DrawerItems {...props} />
            </Content>
            <Footer>
                <LogoutComponent {...props}/>
            </Footer>
        </Container>
    )
};

const styles = StyleSheet.create({

    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }

});