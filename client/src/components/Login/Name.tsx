import React from 'react';

const Name: React.FC = () => {
    return (
        <div className={'wrapper_login_page__block_input'}>
            <label className={'wrapper_login_page__label_input'}>Name</label>
            <input
                // value={name.value}
                type="text"
                placeholder={'Enter your name'}
                className={'wrapper_login_page__input_field'}
                // onChange={e => name.onChange(e)}
            />
        </div>
    );
};

// нету пропса еще и параметров value and onChange func

export default Name;