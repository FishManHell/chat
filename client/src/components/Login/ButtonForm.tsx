import React, {FC} from 'react';

const ButtonForm: FC<any> = ({formik}) => {
    const check = !formik.values.userName
        || !formik.values.password
        || (formik.values.password !== formik.values.repeatPassword)
    return (
        <div className={`${check ? 'block_button_form_disabled' : 'block_button_form'}`}>
            <button type={'submit'} disabled={check}>Login</button>
        </div>
    );
};

export default ButtonForm;