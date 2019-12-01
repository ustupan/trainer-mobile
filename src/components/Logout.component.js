import React from 'react';
import deviceStorage from "../api/deviceStorage";

import Button from "react-native-button";

class LogoutComponent extends React.Component {

    constructor(props) {
        super(props);
        this.clear = deviceStorage.clear.bind(this);
        this.clear().then(() => {
            this.props.navigation.navigate('Welcome')
        })
    }

    render() {
        return (
            <Button
                title={"Press me"}

            />
        )}
}
export default LogoutComponent;
