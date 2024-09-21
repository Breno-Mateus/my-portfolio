import styled from "styled-components";
import { MdMenu } from "react-icons/md";

export const HeaderStyle = styled.header`
    background: #1f242d;
    color: #fff;

    display: flex;
    justify-content: space-around;
    align-items: center;

    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: .5s;
    z-index: 900;

    @media(max-width: 770px){
        justify-content: space-around;
        gap: 12rem;
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 2rem;
    border: 1px solid #6C63FF;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media(max-width: 860px){
        height: 1.5rem;
    }
`

export const Text = styled.p`
    font-weight: 800;
    transition: color 0.3s;

    &:hover {
        color: #6C63FF;
        cursor: pointer;
    }

    @media(max-width: 860px){
        font-size: .5rem;
    }
`

export const Navbar = styled(MdMenu)`
    font-size: 2rem;
    display: none;

    @media(max-width: 770px){
        display: block;
    }
`

export const MenuNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 9rem;

    @media(max-width: 770px){
        display: none;
    }
`