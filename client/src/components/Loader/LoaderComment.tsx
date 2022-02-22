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

// This is a lazy-loaded authorization component taken from the react-spinners library
