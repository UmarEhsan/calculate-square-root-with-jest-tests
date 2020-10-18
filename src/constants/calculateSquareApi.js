import axios from 'axios';

const calulateSquare = async (input) => {
    try {
        let res = await axios({
            method: 'get',
            url: `https://gxxph4h9l6.execute-api.us-east-1.amazonaws.com/default/front_end_hiring?input=${input}`,
            timeout: 1000 * 5,

        });
        debugger;
        return res.data;
    } catch (error) {
        if (error.code === 'ECONNABORTED'){
           
            throw error;
            return
        }
       
        else{
            throw error;
        }
            
    }

}


export default calulateSquare;

