import React from 'react';
import Heading from '../../components/Heading/Heading';

const Header = () => {

    return (
        <div>
             <Heading title={'Kecamatan Ubud, Bali'} subtitle={'Pools'} ></Heading>
             <div className="w-full md:h-[60vh] mt-6 overflow-hidden rounded-xl">
                <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/miso/Hosting-826726918494647682/original/d1586407-7873-4c15-91e2-61ab713d2aca.jpeg" alt="" />
             </div>
        </div>
    );
};

export default Header;