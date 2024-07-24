"use client"
import React from 'react'
import { styled } from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import menu from "@/app/utils/menu"
import Link from "next/link";

function Sidebar() {
  const { theme } = useGlobalState();

  return( 
  <SidebarStyled theme={theme}>
     <div className="profile">
      <div className="profile-overlay"></div>
        <div className="image">
        <img width={60} height={60} src="/profile.jpeg" alt="profile"/>
        </div>
        <h1>
          <span>Shamama</span>
          <span>Tarif</span>
        </h1>
    </div>

      <ul className="nav-items">
        {menu.map((item) => {
          return (
          <li>
            {item.icon}
            <Link href={item.link}>
            {item.title}</Link>
          </li>    
          );
        })}
      </ul>  
      <button>

      </button>
  </SidebarStyled>
);
}

const SidebarStyled = styled.nav`
  position: relative;
  height: 90vh;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.borderColor2};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.colorGrey3};

 
  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    justify-content: center;
    flex-direction: column;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;

    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};

    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};

      opacity: 0.2;
    }

    h1{
      font-size: 1.2rem;
      display: flex:
      flex-direction: column;

      line-height: 1.4rem;
    }

    .image,
      h1{
        position: relative;
        z-index: 1;
      }

      .image{
        flex-shrink: 0;
        display: inherit-block;
        overflow: hidden:
        transition: all 0.5 ease;
        border-radius: 100%

        width: 70px;
        height: 70px;

        img{
          border-radius: 100%;
          transition: all 0.5s ease; 
        }
      }

      > h1{
        margin-left: 0.8rem;
        font-size: clamp(1.2rem, 4vw, 1.4rem);
        line-weight: 100%;
      }

      &:hover{
        .profile-overlay{
          opacity: 1;
          border: 2px solid ${(props)  => props.theme.borderColor2};
        }
        img{
            transform: scale(1.1);
        }
      }     
  }

  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: center;
      padding: 0.5rem 1rem;
      cursor: pointer;
      position: relative;
      z-index: 1;

      &:hover::after {
        width: 100%;
      }

      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background-color: ${(props) => props.theme.activeNavLinkHover};
        z-index: -1;
        transition: width 0.3s ease;
      }

      &::before {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        width: 0;
        height: 100%;
        background-color: ${(props) => props.theme.colorGreenDark};
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        transition: width 0.3s ease;
      }

      .icon {
        margin-right: 1rem;
      }

      a {
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        z-index: 2;
        color: ${(props) => props.theme.colorGrey3}; /* Default link color */
      }

      i {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colorIcons};
      }

      &:hover::before {
        width: 0.3rem;
      }
    }
  }
  
  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    i, a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }
`; 
export default Sidebar