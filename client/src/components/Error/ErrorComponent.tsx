import React, {FC} from 'react';
import {ErrorTyping} from "../../typing/Interfaces";

const ErrorComponent:FC<ErrorTyping> = ({clearError, checkError}) => {
    return (
        <div className={ `${checkError ? 'error_wrapper' : ''}`}>
            <p className={'error_wrapper__error_text'}>You entered the wrong username or password. <br/>Please try again.</p>
            <button className={'error_wrapper__error_button'} onClick={() => clearError()}>Back to Form</button>
        </div>
    );
};

export default ErrorComponent;