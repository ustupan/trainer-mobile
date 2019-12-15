import axios from '../../../axios'
import responseHandle from "../responseHandler";



const invitationService = {

    async getMyInvitations(jwt) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            const response = await axios.get(`/invitation/getInvitations`, {
                headers: { Authorization: `Bearer ${jwt}` }
            });
            if (response !== null) {
                this.setState({
                    invitationList: response.data.map((invitation) => {
                        return {
                            id: invitation.id.toString(),
                            senderUsername:invitation.senderUsername,
                        }
                    }),
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

    async sendInvitation(jwt, receiverUsername) {
        try {
            const header = `Authorization: Bearer ${jwt}`;
            return await axios.post(`/invitation/addInvitation`, {
                    "receiverUsername":receiverUsername
                },
                {headers: { Authorization: `Bearer ${jwt}` }}
            );
        }
        catch (error) {
            responseHandle(error);
        }
    },
    async manageInvitation(jwt,id, senderUsername, accepted) {
        try {
            return await axios.post(`/invitation/manageInvitation`,
                {
                    "id": parseInt(id,10),
                    "senderUsername":senderUsername,
                    "accepted": accepted
                },
                {headers: { Authorization: `Bearer ${jwt}` }}
            );
        }
        catch (error) {
            responseHandle(error);
        }
    },


};

export default invitationService;

