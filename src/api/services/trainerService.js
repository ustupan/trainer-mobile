import axios from '../../../axios'
import responseHandle from "../responseHandler";
import {Alert} from 'react-native';


const trainerService = {

    async getTrainerAthletes(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
             const response = await axios.get(`/trainer/athleteList`, {
                 headers: { Authorization: `Bearer ${jwt}` }
             });
            if (response !== null) {
                this.setState({
                    athleteList: response.data,
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

    async createCalendar(jwt,calendarDto) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            await axios.post(`/calendar/createCalendar`, calendarDto,
                {headers: { Authorization: `Bearer ${jwt}` }});
            Alert.alert('Pomyślnie stworzono plan treningowy!');
        }
        catch (error) {
            responseHandle(error);
        }
    },

    async addTrainingDay(jwt,trainingDayDto) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            await axios.post(`/calendar/addTrainingDay`, trainingDayDto,
                {headers: { Authorization: `Bearer ${jwt}` }});
            Alert.alert('Pomyślnie dodano dzień treningowy!');
        }
        catch (error) {
            responseHandle(error);
        }
    },

    async editTrainingDay(jwt,trainingDayDto) {
        console.log(trainingDayDto);
        try {
            const header = `Authorization: Bearer ${jwt}`;
            await axios.put(`/calendar/editTrainingDay`, trainingDayDto,
                {headers: { Authorization: `Bearer ${jwt}` }});
            Alert.alert('Pomyślnie edytowano dzień treningowy!');
        }
        catch (error) {
            responseHandle(error);
        }
    },


    async getCalendarByAthleteId(jwt, athleteId) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.post(`/calendar/getCalendarByAthleteId`,{
                    "id":athleteId
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
    }

};

export default trainerService;

