import axios from '../../../axios'
import responseHandle from "../responseHandler";


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
    }
};

export default trainerService;

