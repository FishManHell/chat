import React from 'react';

interface UserName {
    name: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}

const Name = ({name}: UserName) => {
    return (
        <div className={'wrapper_login_page__block_input'}>
            <label className={'wrapper_login_page__label_input'}>Name</label>
            <input
                value={name.value}
                type="text"
                placeholder={'Enter your name'}
                className={'wrapper_login_page__input_field'}
                onChange={e => name.onChange(e)}
            />
        </div>
    );
};

export default Name;