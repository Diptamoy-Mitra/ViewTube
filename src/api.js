import axios from 'axios';


const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:"AIzaSyDZ2iDEF98ITu1pOTf1blLXE37FO6LIzsE",
    }
})

export default request;
