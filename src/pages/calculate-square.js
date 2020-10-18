import React, { useState } from 'react';
import InputField from '../components/InputField';
import calulateSquare from '../constants/calculateSquareApi';

const CalculateSquareRoot = ({ }) => {
    const [squareRoot, setSquareRoot] = useState(0);
    const [result, setApiResult] = useState({});
    const [loading, setLoading] = useState(true);
    const handleChange = inputValue => {setSquareRoot(inputValue)}
    const calculateSquareRoot = async ()=>{
        
        if(squareRoot) {
            setLoading(false);
            let reponse;
            try{
                const getCalculateSquareResponse = await calulateSquare(squareRoot);
                reponse = {result: getCalculateSquareResponse.result};
            }
            catch(err){
                reponse = {result: err.message};
            }
            setLoading(true);
            setState(reponse);
            return
        }
        alert('Input field can not be empty or 0');
       
    }

    const setState = response => setApiResult(response);
    

    return (
        <>
        <InputField handleChange={handleChange} />
        <button onClick={calculateSquareRoot}>Calculate Square Root</button>
        <br/>
        <b>{!loading ? 'Loading.....' : ''}</b>
        <br/>
        <b>Result: <p>{result?.result ? result?.result : ''}</p></b>
        </>
    )
 
    
};

export default CalculateSquareRoot;