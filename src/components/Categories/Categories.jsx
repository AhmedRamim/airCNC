import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div className='pt-4 flex items-center justify-between overflow-x-auto'>
            {categories.map((item,index) => <CategoryBox key={index} label={item.label} icon={item.icon}></CategoryBox>)}
        </div>
    );
};

export default Categories;