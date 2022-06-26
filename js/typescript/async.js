import axios from 'axios';
const getWorkshopsAndSession = async() => {
    console.log(1);
    // the function will "pause" on await line till the promise reolves / rejects
    var response;

    response = await axios.get(`http://workshops-server.herokuapp.com/workshops`);
    console.log(2);
    console.log(response);
    console.log('Number of workshops = ', response.data.length);

    console.log(3);
    response = await axios.get(`http://workshops-server.herokuapp.com/sessions`);
    console.log(4);
    console.log(' ***** ');
    console.log('Number of sessions = ', response.data.length);


    // .catch(error) => {
    //     console.log(error.message);
    // };
}

getWorkshopsAndSession();

console.log('end of script');