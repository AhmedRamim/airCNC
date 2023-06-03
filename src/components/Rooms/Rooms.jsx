import React, { useEffect, useState } from 'react';
import RoomsCard from './RoomsCard';
import Loader from '../Shared/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filteredData = data.filter(room => room.category === category)

                    setRooms(filteredData)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <>
            <div className='pt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    rooms.map((room, i) => <RoomsCard key={i} room={room}></RoomsCard>)
                }

            </div>
            {
                rooms.length===0 ? <Heading title={'No Rooms Available in this Category'} subtitle={'Please Select Another Category'}  center={true}></Heading> : ''
            }
        </>
    );
};

export default Rooms;