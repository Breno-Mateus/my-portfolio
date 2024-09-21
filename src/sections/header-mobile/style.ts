import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";


export const HeaderStyle = styled.header<{isVisible: boolean}>`
    background: #1f242d;
    color: #fff;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s;
    z-index: 1000;

    display: none;
    pointer-events: none;

    ${({isVisible}) => isVisible && css`
        display: block;
        pointer-events: auto;
    `}
`

export const DivIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4rem;
    gap: 15rem;
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 2rem;
    border: 1px solid #6C63FF;
    margin-top: 2rem;
    margin-left: 3rem;
`

export const CloseIcon = styled(IoClose)`
    margin-top: 2rem;
    margin-right: 3rem;
    font-size: 2rem;
`

export const MenuNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
`

export const Text = styled.p`
    font-weight: 800;
    transition: color 0.3s;
    padding: 1rem;

    &:hover {
        color: #6C63FF;
        cursor: pointer;
    }
`