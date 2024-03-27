import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    const menuList = [
        "메뉴1",
        "메뉴2",
        "메뉴3",
        "메뉴4",
        "메뉴5",
        "메뉴6",
        "메뉴7"
    ]
  return (
    <div>
        <div>
            <FontAwesomeIcon icon={faUser} /> <p>로그인</p>
        </div>
        <div>
            로고
        </div>
        <div>
            <ul>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
        </div>      
    </div>
  )
}

export default Navbar
