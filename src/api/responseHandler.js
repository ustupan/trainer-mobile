import {Alert} from 'react-native'


export default function responseHandle(error){
    let message = error.response ? error.response.data : error.message;
    if(error.response === undefined){
        Alert.alert('Error: '+message);
    }
    else{
        switch (error.response.status) {
            case 204:
                Alert.alert("Success of detele bookmark","Hooray u delete bookmark");
                return;
            case 401:
                Alert.alert("Incorrect password","Check your password again");
                break;
            case 404:
                Alert.alert("Error: Page not found","We cannot find resource on our database");
                break;
            case 409:
                Alert.alert("Nie powiodło się!");
                break;
            case 403:
                Alert.alert("Nie uzyskano dostępu!","Twoje dane są niepoprawne.");
                break;
            default:
                Alert.alert('Coś poszło nie tak!',message);
        }
    }
}