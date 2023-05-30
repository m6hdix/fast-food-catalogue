import React from 'react';
import ImgHeader from '../assets/header.jpg';
const header = () => {
    return (
        <div className='w-full  h-48  relative bg-cover bg-center	' style={{backgroundImage:`url(${ImgHeader})`}}>
            <h1  className='text-3xl   md:text-5xl uppercase absolute text-white left-1/4 top-1/3'>Fast Food Catalogue</h1>
        </div>
    );
};

export default header;