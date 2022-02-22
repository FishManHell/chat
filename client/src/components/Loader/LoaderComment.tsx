import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const LoaderComment: React.FC = () => {
    return (
        <div className={'wrapper_loader'}>
            <ClipLoader color={'green'} size={300}/>
        </div>
    );
};

export default LoaderComment;

// Это компонент с ленивой загрузкой для авторизации которую взял из библиотеки react-spinners
