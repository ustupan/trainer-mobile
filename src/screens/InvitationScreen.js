import React from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import deviceStorage from "../api/deviceStorage";
import trainerService from "../api/services/trainerService";
import invitationService from "../api/services/invitationService";
import SplashScreen from "./SplashScreen";

const maleAvatar = 'https://bootdey.com/img/Content/avatar/avatar7.png';
const femaleAvatar = 'https://bootdey.com/img/Content/avatar/avatar3.png';


const data = [
    {id: "1", username: "Andrzej", email: "asdkasdkas@o2.pl", image: maleAvatar},
    {id: "2", username: "Andrz1", email: "asdkalldl@o2.pl", image: maleAvatar},
    {id: "3", username: "Andr123zej", email: "all@o2.pl", image: maleAvatar},
    {id: "4", username: "Andfasfrzej", email: "aalldlsadkas@o2.pl", image: maleAvatar},
    {id: "5", username: "And1213rzej", email: "asdsdkl@o2.pl", image: femaleAvatar},
    {id: "6", username: "Andfasfrzej", email: "aalldlsadkas@o2.pl", image: maleAvatar},
    {id: "7", username: "And1213rzej", email: "asdsdkl@o2.pl", image: femaleAvatar},
];

export default class InvitationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchUsername: "",
            invitationList: [],
            jwt: "",
        };

        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
            this.getMyInvitations = invitationService.getMyInvitations.bind(this);
            this.getMyInvitations(this.state.jwt);

        });
        this.sendInvitation = invitationService.sendInvitation.bind(this);
        this.manageInvitation = invitationService.manageInvitation.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
            title: 'Zaproszenia do znajomych',
            headerLeft: (
                <Ionicons
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size = {30}
                />
            ),
        };
    };

    // dataToListMapper(){
    //     return this.props.data.map((el) => {
    //         return {
    //             id: el.id.toString(),
    //             username: el.userName,
    //             email: el.email,
    //             image: el.gender === 'man' ? maleAvatar : femaleAvatar
    //         }
    //     });
    // }

    tagClickEventListener = (item, accepted) => {
        this.manageInvitation(this.state.jwt, item.id, item.username, accepted);
        if(accepted) Alert.alert('Zaakceptowano zaproszenie!');
        if(!accepted) Alert.alert('Odrzucono zaproszenie!');
        this.getMyInvitations(this.state.jwt);
    };


    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={ () => this.tagClickEventListener()}>
                <View style={styles.row}>
                    <Image source={{ uri: item.image }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.username}</Text>
                            <TouchableOpacity style={styles.acceptTxt} onPress={ () => this.tagClickEventListener(item,true)}>
                                <Text style={{color:"#ff5a66"}}>Potwierdź</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteTxt} onPress={ () => this.tagClickEventListener(item,false)}>
                                <Text style={{color:"#ffffff"}}>Usuń</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    };

    render() {
        if(this.state.loading) return (
            <SplashScreen/>
        );
        return(
            <View style={{ flex: 1 }} >
                <View style={styles.card}>
                    <Text style={{fontSize:22, fontWeight:'bold',  color:"#ff5a66", marginTop: 10}}>Wyślij zaproszenie</Text>
                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputs}
                                       placeholderTextColor="#ffffff"
                                       ref={'txtSearch'}
                                       placeholder="Nazwa użytkownika"
                                       underlineColorAndroid='transparent'
                                       onChangeText={(username) => this.setState({searchUsername: username})}/>

                        </View>
                        <View style={styles.invitationContainer}>
                            <TouchableOpacity style={{}} onPress={ () => this.sendInvitation(this.state.jwt, this.state.searchUsername)}>
                                <Ionicons
                                    style={[styles.icon, styles.inputIcon]}
                                    name="md-send"
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <FlatList
                    extraData={this.state.invitationList}
                    data={this.state.invitationList.map((invitation) => {
                        return {
                        id: invitation.id,
                        username:invitation.senderUsername,
                        image: maleAvatar
                    }
                    })}
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
        borderColor: '#ff5a66',
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
    acceptTxt:{
        fontWeight: '500',
        color: '#ff5a66',
        fontSize: 12,
        marginLeft: 5,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor:"#ff5a66",
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    deleteTxt:{
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 12,
        marginLeft: 5,
        marginRight: 10,
        backgroundColor: "#ff5a66",
        borderRadius: 10,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        shadowColor: 'rgba(145,145,145,0.13)',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginTop:20,
        marginBottom:10,
        backgroundColor:"white",
        alignItems: 'center'

    },
    card1:{
        marginTop:20,
        marginBottom:10,
        backgroundColor:"white",
        alignItems: 'center'

    },
    msgTxt: {
        fontWeight: '400',
        color: '#ff5a66',
        fontSize: 13,
        marginLeft: 15,
    },
    inputs:{
        color:"#ffffff",
        height:45,
        marginLeft:16,
        flex:1,
    },
    inputIcon:{
        marginLeft:15,
        color:"#ffffff",
        justifyContent: 'center'
    },

    formContent:{
        flexDirection: 'row',
        marginTop:10,
    },
    inputContainer: {

        borderColor: '#ff5a66',
        backgroundColor: '#ff5a66',
        borderWidth: 2,
        borderRadius: 5,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
        marginTop: 0,
        marginBottom: 20
    },
    invitationContainer: {

        borderColor: '#ff5a66',
        backgroundColor: '#ff5a66',
        borderWidth: 2,
        borderRadius: 5,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        margin:10,
        marginTop: 0,
        marginBottom: 20,
        width: 50,
    },

    icon:{
        width:30,
        height:30,
    },
    iconBtnSearch:{
        alignSelf:'center'
    },
});

