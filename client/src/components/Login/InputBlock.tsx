import React, {FC} from 'react';
import {ErrorMessage, Field} from "formik";
import {InputLogin} from "../../typing/Interfaces";

const InputBlock: FC<InputLogin> = ({type, name, placeholder, classCss}) => {
    return (
        <div className={'input_block'}>
            <div className={'input_wrapper'}>
                <Field type={type} name={name} className={classCss} placeholder={placeholder}/>
            </div>
            <ErrorMessage name={name} component={'span'} className={'error_block'}/>
        </div>
    );
};

export default InputBlock;