import React, {useState} from 'react';
const InputField = ({ handleChange }) => {
    const [squareRoot, setSquareRoot] = useState(0); 
    const handleInputChange = (event) => {
        event.preventDefault();
        const value = parseInt(event.target.value);
        setSquareRoot(value);
        handleChange(value);
    };


    return (
        <div style={{ display: "inline" }}>
          
          <input
            className="form-control"
            type="number"
            onChange={handleInputChange}
            name='square-root'
            value={squareRoot.toString()}
          />
         </div>
      );
};

export default InputField;