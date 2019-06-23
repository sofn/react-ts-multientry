import {action, observable} from 'mobx';
import axios from "axios";

class AppStore {
    @observable user: any;

    @action fetchUserInfo() {
        axios.get('/user/info')
            .then(response => {
                this.user = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export default AppStore;