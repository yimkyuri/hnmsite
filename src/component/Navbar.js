import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = [
        "여성",
        "Devided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M HOME",
        "Sale",
        "지속가능성"
    ]
  return (
    <div>
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} /> <div>로그인</div>
            </div>
        </div>
        <div>
            <div className='logo'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png' alt='' /></div>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} /> <input type='text' />
            </div>
        </div>      
    </div>
  )
}

export default Navbar
