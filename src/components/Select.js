import React from 'react';

const Select = ({crypto}) => {
    const {FullName, Name } = crypto.CoinInfo;
    return (

        <option value={Name}>{FullName}</option>

      );
}
 
export default Select;