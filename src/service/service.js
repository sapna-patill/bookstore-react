import Axios from "axios"
// import {postAxios,getAxios} from ''
export default class Service {
    constructor() {
        this.Url = "http://localhost:3000/";
    }
    getAllBooks() {
        return Axios({
            method: 'GET',
            url: this.Url + 'getBookDetails'
        })
            .then(result => {
                console.log("after api call 13-----------",result);
                return result;
            });
    }
    searchBookByTitle(serchData) {
        return Axios({
            method: 'GET',
            url: this.Url + 'searchBookByTitle?title=' + serchData
        })
            .then(result => {
                return result;
            });
    }
    customerDetails(details) {
        return Axios({
            method: 'POST',
            url: this.Url + 'customerDetails',
            data: details
        })
            .then(result => {
                return result;
            });
    }
    sortBook(data) {
        return Axios({
            method: 'GET',
            url: this.Url + 'sortBookByAttribute?attribute=' + data
        })
            .then(result => {
                return result;
            });
    }
}  