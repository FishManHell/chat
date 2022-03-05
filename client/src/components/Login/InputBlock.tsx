import React, {FC} from 'react';
import {ErrorMessage, Field} from "formik";

interface Input {
    type: string
    name: string
    placeholder: string,
    classCss: string
}

const InputBlock: FC<Input> = ({type, name, placeholder, classCss}) => {
    return (
        <div className={'input_block'}>
            <div className={'input_wrapper'}>
                <Field type={type} name={name} className={classCss} placeholder={placeholder}/>
            </div>
            <ErrorMessage name={name} component={'div'} className={'error_block'}/>
        </div>
    );
};

export default InputBlock;