import axios from 'axios'
import CommonHeaders from './commonHeaders'
import store from '@/store/index'

const API_URL = process.env.VUE_APP_BACKEND_URL

class ReservationsService {

    async getAvailableCars(locationID, dateFrom, dateTo) {
        const url = API_URL + `Cars/GetAvailable/${locationID}/${dateFrom}/${dateTo}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.user.token}`;
        const response = await axios.get(url, { headers: CommonHeaders.getCommonHeaderWithType })
        return response;
    }
}

export default new ReservationsService()