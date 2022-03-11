import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {arrayInputs, checkYup, initialState} from "../../utils/YupFormikUtils";
import * as Yup from "yup";
import InputBlock from "../Login/InputBlock";
import ButtonForm from "../Login/ButtonForm";
import {TypingFormikFunc} from "../../typing/Interfaces";

const ChatForm: FC<TypingFormikFunc> = ({handleCheckPassName}) => {
    return (
        <Formik
            initialValues={{...initialState}}
            validationSchema={Yup.object({...checkYup})}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false)
                handleCheckPassName(values)
                console.log(values)
            }}
        >
            {formik => (
                <Form>
                    {arrayInputs.map(input => <InputBlock key={input.name} {...input}/>)}
                    <ButtonForm formik={formik}/>
                </Form>
            )}
        </Formik>
    );
};

export default ChatForm;