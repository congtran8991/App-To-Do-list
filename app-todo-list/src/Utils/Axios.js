import axios from 'axios';
const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export const Axios = (method, url, data = {}) => {
    url = 'http://localhost:3333' + url;
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data,
            headers: {
                Authorization:getCookie('token')
            }
        }).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
    })
}