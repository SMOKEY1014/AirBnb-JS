import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';
import Login from "../Login"
import Avatar from '@mui/material/Avatar';
import {openModal} from "../../Action/ModalAction"

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;
    const openModalhandler = () => {
        console.log("Loggedin clicked");
        dispatch(openModal("open", <Login/>))
    }
  return (
      <div className='header'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png'
              className='header_image'
              alt='logo'
          />
          <div className='header_center'>
              <input type='text'/>
              <SearchIcon/>
          </div>
          <div className='header_right'>
              <p>Become a host</p>
              <LanguageIcon />
              <div className='dropdown'>
                <ExpandMoreIcon className='dropbtn'/>
                  <div className='dropdown-content'>
                      {userInfo ? (<>
                          <span>Account</span>
                          <span>Log out</span></>) :
                          (<>
                                <span>Sign up</span>
                                <span onClick={openModalhandler}>Log In</span>
                          </>)}
                      <span>Help</span>
                </div>
              </div>
              <Avatar />
            </div>
      </div>

      
  )
}

export default Header