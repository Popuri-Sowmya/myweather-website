import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div className='bg-black flex justify-between items-center h-24 mx-auto px-4 text-white'>
                <ul className='flex items-center justify-between w-full'>
                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faCloud} size='2x' className='text-green-400' />
                        <h1 className='text-xl md:text-2xl ml-2 text-green-400 font-serif italic'>myweather</h1>
                    </li>
                    <li>
                        <button className='p-3 md:p-4 text-green-400 hover:bg-green-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black' onClick={handleClick}>
                            Home
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
