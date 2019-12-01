import React from 'react';
import deviceStorage from "../api/deviceStorage";

class LogoutComponent extends React.Component {

    constructor(props) {
        super(props);
        this.clear = deviceStorage.clear.bind(this);
        this.clear().then(() => {
            this.props.navigation.navigate('Welcome')
        })
    }

    render() {
        return null;
    }
}
export default LogoutComponent;
