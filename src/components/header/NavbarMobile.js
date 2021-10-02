import React from 'react'
import '../../styles/navbarMobile.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';

function NavbarMobile() {
    return (
        <div className="block lg:hidden relative">
            <input type="checkbox" id="toggleNav"/>
            <label for="toggleNav" className="menu-btn"></label>
            
            <div className="line first"></div>
            <div className="line second"></div>
            <div className="line third"></div>

            <label for="toggleNav" className="hidden overlay bg-black opacity-50 fixed z-2 top-0 bottom-0 right-0 left-0"></label>
            <div className="navbar-mobile-list fixed z-2 top-0 bottom-0 right-0 left-1/2 md:left-2/3 bg-white shadow-lg flex flex-col space-y-5 items-end px-2 pt-16">
                {/* Not sign in */}
                <div class="cursor-pointer mx-auto py-2 text-center w-full border-black border btn">
                    <span>Đăng nhập</span>
                </div>

                {/* Sign in */}
                {/* <div className="flex w-full space-x-2 justify-between items-center cursor-pointer border-b border-gray-400 pb-3">
                    <div class="flex items-center space-x-2">
                        <Avatar sx={{ width: 32, height: 32 }}/>
                        <span >Đức Vinh</span>
                    </div>
                    <ArrowDropDownIcon />
                </div> */}
                
                <div class="text-yellow-400 cursor-pointer flex items-center space-x-1">
                    <EmojiEventsIcon />
                    <span>Nâng cấp</span>
                </div>

                <div class="cursor-pointer">Mẹo vặt & Hướng dẫn</div> 
            </div>
        </div>
    )
}

export default NavbarMobile