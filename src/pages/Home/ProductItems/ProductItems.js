import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProductItems = ({ category }) => {
    const { categoryImg, categoryName, info } = category;
    return (
        <div className="max-w-sm rounded-md shadow-md dark:bg-teal-700 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={category.categoryImg} >
                    <img src={categoryImg} alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-wide">{categoryName}</h2>
                    <p className="text-sm text-gray-100">{info}</p>
                </div>
                <div className=''>
                    <Link to={`/category/${categoryName}`} className="flex items-center justify-center w-full p-3 font-semibold rounded-md outline outline-1 hover:bg-amber-600 transition ease-in duration-200 hover:text-gray-800 text-gray-100">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItems;