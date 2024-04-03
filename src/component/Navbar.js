import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = () => {
    const dispatch = useDispatch();
    const authenticate = useSelector((state) => state.auth.authenticate);

    const logout = () => {
        dispatch(authenticateAction.logout())
    }
    useEffect(() => {
        logout();
        // eslint-disable-next-line
    }, [])
    
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
    let [width, setWidth] = useState(0);
    const navigate = useNavigate();
    const search = (event) => {
        if(event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }
  return (
    <div>
        <div className="side-menu" style={{ width: width }}>
            <button className="closebtn" onClick={() => setWidth(0)}>
                &times;
            </button>
            <div className="side-menu-list" id="menu-list">
                {menuList.map((menu, index) => (
                <button key={index}>{menu}</button>
                ))}
            </div>
        </div>
        <div className="nav-header">
            <div className="burger-menu hide">
                <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
            </div>
            {authenticate === true? (
            <div className='login-button' onClick={logout}>
                <FontAwesomeIcon icon={faUser} /> <div>로그아웃</div>
            </div>
            ) : (
            <div className='login-button' onClick={() => navigate('/login')}>
                <FontAwesomeIcon icon={faUser} /> <div>로그인</div>
            </div>
            )}
        </div>
        <div>
            <div className='logo' onClick={() => navigate('/')}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png' alt='' /></div>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} /> 
                <input type='text' onKeyPress={(event) => search(event)} />
            </div>
        </div>      
    </div>
  )
}

export default Navbar
