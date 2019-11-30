import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    Alert,
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Button from 'react-native-button'

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchUsername: "",
            data: [
                {id:'1',  username: "Mark Doe",    email:"act@o2.pl", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
                {id:'2',  username: "Clark Man",   email:"aaa@o2.pl", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
                {id:'3',  username: "Jaden Boor",  email:"aa@o2.e", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
                {id:'4',  username: "Srick Tree",  email:"ad2p@.e", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
                {id:'5',  username: "Erick Doe",   email:"ac@tive.com", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
                {id:'6',  username: "Francis Doe", email:"activ@a2.ple", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
                {id:'8',  username: "Matilde Doe", email:"akowal@o2.pl", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
                {id:'9',  username: "John Doe",    email:"ac2g@gmail.e", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
                {id:'10', username: "Fermod Doe",  email:"actl@o.pl", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
                {id:'11', username: "Danny Doe",   email:"actaa@.ve", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
            ]
        };
    }

    //userClickEventListiner = this.props.userClickEventListiner(item);
    //removeButtonClickEventListiner = this.props.removeButtonClickEventListiner(item);


    cardClickEventListener = () => {
        Alert.alert('b');
    };

    tagClickEventListener = () => {
        Alert.alert('a');
    };


    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {this.cardClickEventListener()}}>
                <View style={styles.row}>
                    <Image source={{ uri: item.image }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.username}</Text>
                            <TouchableOpacity style={styles.msgTxt} onPress={ () => this.tagClickEventListener()}>
                                <Text>Usuń</Text>
                            </TouchableOpacity>
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
                    data={this.state.searchUsername === '' ? this.state.data: this.state.data.filter((value) => value.username.toUpperCase().includes(this.state.searchUsername.toUpperCase()))}
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