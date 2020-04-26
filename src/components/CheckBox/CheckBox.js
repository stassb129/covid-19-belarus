import React from 'react';
import css from './CheckBox.module.scss';

const CheckBox = (props) => {
    return (
        <div className="wrapper">
            <input type="checkbox" id="checkbox" className={css.checkbox}/>
            <label  onClick={props.chartChange} htmlFor="checkbox"></label>
        </div>
    )
}

export default CheckBox;
