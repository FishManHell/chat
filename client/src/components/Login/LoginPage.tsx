import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import {Request} from '../../typing/Interfaces'
import {Form, Formik, FormikValues} from "formik";
import {arrayInputs, checkYup, initialState} from "../../utils/YupFormikUtils";
import * as Yup from "yup";
import InputBlock from "./InputBlock";
import ButtonForm from "./ButtonForm";

const LoginPage: FC<Request> = ({requestPost}) => {
    const location = useLocation();

    const handleCheckPassName = (values: FormikValues):void => {
        const path = location.pathname
        const user = {username: values.userName, password: values.password}
        requestPost(path, user)
    }

    return (
        <div className={'wrapper_login_page'}>
            <div className={'wrapper_login_page__main_block_form'}>
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
            </div>
        </div>
    );
};

export default LoginPage;

// This is our Login component, and it accepts requestPost from a custom hook usePost which consists of calling the custom hook useInout for input fields,
// hook location to get pathname
// function handleCheckPassName to send and check if the user is up to date on the server.
// Inside the function there is a check in the form of regular expressions that check name and password - whether it fits all the criteria or not
// the component consists of the component name, password and button Login

