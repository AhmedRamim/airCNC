import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string';

const CategoryBox = ({label,icon:Icon}) => {
    const navigate = useNavigate()
    const [params,setParams] = useSearchParams()
    const handleQuery = () => {
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
        }
        const updateQuery = {
            ...currentQuery,category:label
        }
        const url = qs.stringifyUrl(
            {
                url:'/',
                query:updateQuery
            },
            {skipNull:true}
        )
        navigate(url)
    }

    return (
        <div onClick={handleQuery} className='flex cursor-pointer flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 text-neutral-500 border-transparent'>
            <Icon size={26}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;