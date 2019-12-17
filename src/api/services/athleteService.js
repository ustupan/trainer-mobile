import axios from '../../../axios'
import responseHandle from "../responseHandler";
import {Alert} from 'react-native';

const athleteService = {

    async getCalendarById(jwt, calendarId) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.post(`/calendar/getCalendarById`,{
                    "id":calendarId
                },
                {headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                });

            if (response !== null) {
                this.setState({
                    calendar: response.data,
                    loading: false
                });
            } else {
                this.setState({
                    calendar: {},
                    loading: false
                });
            }
        }
        catch (error) {
            this.setState({
                loading: false
            });
            responseHandle(error);
        }
    },

    async getAthleteTrainers(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.get(`/athlete/trainersList`, {
                headers: { Authorization: `Bearer ${jwt}` }
            });
            if (response !== null) {
                this.setState({
                    trainersList: response.data,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        }
        catch (error) {
            responseHandle(error);
        }
    },
    async getMyCalendars(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.get(`/athlete/calendarsList`, {
                headers: { Authorization: `Bearer ${jwt}` }
            });
            if (response !== null) {
                this.setState({
                    calendarList: response.data,
                    loading: false
                });
            } else {
                this.setState({
                    calendarList: [],
                    loading: false
                });
            }
        }
        catch (error) {
            responseHandle(error);
        }
    },
    async getMyResults(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.get(`/athlete/resultsList`, {
                headers: { Authorization: `Bearer ${jwt}` }
            });
            if (response !== null) {
                this.setState({
                    resultList: response.data,
                    displayList: response.data,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        }
        catch (error) {
            responseHandle(error);
        }
    },
    async addResult(jwt,resultDto) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            await axios.post(`/balance/addResult`, resultDto,
                {headers: { Authorization: `Bearer ${jwt}` }});
            Alert.alert('Pomyślnie dodano rezultat!');
        }
        catch (error) {
            responseHandle(error);
        }
    },
};

export default athleteService;
