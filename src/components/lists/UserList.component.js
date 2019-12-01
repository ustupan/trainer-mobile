import React from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const maleAvatar = 'https://bootdey.com/img/Content/avatar/avatar7.png';
const femaleAvatar = 'https://bootdey.com/img/Content/avatar/avatar3.png';

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchUsername: "",
        };
    }

    dataToListMapper(){
        return this.props.data.map((el) => {
            return {
                id: el.id.toString(),
                username: el.userName,
                email: el.email,
                image: el.gender === 'man' ? maleAvatar : femaleAvatar
            }
        });
    }


    tagClickEventListener = () => {
        Alert.alert('a');
    };


    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {this.props.onUserClick(item.id)}}>
                <View style={styles.row}>
                    <Image source={{ uri: item.image }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.username}</Text>
                            <TouchableOpacity style={styles.msgTxt} onPress={ () => this.tagClickEventListener()}>
                                <Text>Usuń</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.msgContainer}>
                            <Text style={styles.msgTxt}>{item.email}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    };

    render() {
        return(
            <View style={{ flex: 1 }} >
                <View style={styles.formContent}>
                    <View style={styles.inputContainer}>
                        <Ionicons
                            style={[styles.icon, styles.inputIcon]}
                            name="md-search"
                            size={30}
                        />
                        <TextInput style={styles.inputs}
                                   ref={'txtSearch'}
                                   placeholder="Search"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(username) => this.setState({searchUsername: username})}/>
                    </View>
                </View>


                <FlatList
                    extraData={this.state}
                    data={this.state.searchUsername === '' ? this.dataToListMapper(): this.dataToListMapper().filter((value) => value.username.toUpperCase().includes(this.state.searchUsername.toUpperCase()))}
                    keyExtractor = {(item) => {
                        return item.id;
                    }}
                    renderItem={this.renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width:170,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    formContent:{
        flexDirection: 'row',
        marginTop:10,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
    },
    icon:{
        width:30,
        height:30,
    },
    iconBtnSearch:{
        alignSelf:'center'
    },
});