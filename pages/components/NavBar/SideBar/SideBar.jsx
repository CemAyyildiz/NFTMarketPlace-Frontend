import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrClose } from "react-icons/gr";
import { 
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
 } from "react-icons/ti"

//INTERNAL IMPORT

import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../Button/Button";


const SideBar = ({setopenSideMenu}) => {
  //----USESTATE
  const  [openDiscover, setOpenDiscover] = useState(false);

  const  [openHelp, setOpenHelp] = useState(false);

  // DISCOVER NAVIGATION MENU
  const discover =[
    {
    name : "Collection",
    link : "collection",
    },
    {
    name : "Search",
    link : "search",
    },
    {
    name : "Author Profile",
    link : "author-profile",
    },
    {
    name : "NFT Details",
    link : "NFT-details",
    },
    {
    name : "Account Setting",
    link : "account-setting",
    },
    {
    name : "Connect Wallet",
    link : "connect-wallet",
    },
    {
    name : "Blog",
    link : "blog",
    }
  ]
  //HELP CENTER MENU
  const HelpCenter=[
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ]

  const openDiscoverMenu = () =>{
    if (!openDiscover){
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    }else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setopenSideMenu(false);
  };
  return (
    <div className={Style.SideBar}>
      <GrClose
      className={Style.SideBar_closeBtn}
      onClick = {() => closeSideBar()}
      />
      <div className={Style.SideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150}/>
        <p>Discover the most outstanding articles on all topices of NFT  
        </p>
        <div className={Style.SideBar_social}>
          <a href='#'>
            <TiSocialFacebook/>
          </a>
          <a href='#'>
            <TiSocialLinkedin/>
          </a>
          <a href='#'>
            <TiSocialTwitter/>
          </a>
          <a href='#'>
            <TiSocialYoutube/>
          </a>
          <a href='#'>
            <TiSocialInstagram/>
          </a>
        </div>
      </div>
      <div className={Style.SideBar_menu}>
        <div>
          <div className={Style.SideBar_menu_box}
          onClick={()=> openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
        {
          openDiscover && (
            <div className={Style.SideBar_discover}>
              {discover.map((el, i) => (
                <p key={i+1}>
                  <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
                </p>))}
            </div>
          )}
        </div>
        <div>
          <div className={Style.SideBar_menu_box}
           onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            openHelpMenu &&(
              <div className={Style.SideBar_discover}>
                {HelpCenter.map((el, i) => (
                  <p key={i+1}> 
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link></p>
                ))}
              </div>
            )
          }
        </div>
      </div>
      <div className={Style.SideBar_button}>
        <Button btnName="Create"/>
        <Button btnName= "Connect Wallet"/>
      </div>
    </div>
  )
}

export default SideBar;