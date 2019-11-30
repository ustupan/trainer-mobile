import axios from "axios";
import {getItem} from "./deviceStorage";
import responseHandle from "./responseHandler";

const baseUrl = 'http://f4ddd2e2.ngrok.io';



const trainerService = {

    async getTrainerAthletes(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
             const response = await axios.get(`${baseUrl}/trainer/athleteList`, {
                 headers: { Authorization: `Bearer ${jwt}` }
             });
            if (response !== null) {
                this.setState({
                    athleteList: response,
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

