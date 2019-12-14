import axios from '../../../axios'
import responseHandle from "../responseHandler";

const athleteService = {

    // async getMyInvitations(jwt) {
    //     try {
    //         const header = `Authorization: Bearer ${jwt}`;
    //         const response = await axios.get()
    //     }
    // }

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
    }
};

export default athleteService;
