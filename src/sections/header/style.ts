import styled from "styled-components";

export const HeaderStyle = styled.header<{isOpen: boolean}>`
    background: #1f242d;
    color: #fff;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100%;
    height: ${(isOpen) => (isOpen.isOpen ? '100%' : '10%')};
    position: fixed;
    z-index: 900;
`

export const DivMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 770px){
        display: none;
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 2rem;
    border: 1px solid #6C63FF;
`

export const Text = styled.p`
    font-weight: 800;
    transition: color 0.3s;

    &:hover {
        color: #6C63FF;
        cursor: pointer;
    }
`

export const MenuNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;

    @media(max-width: 770px){
        display: none;
    }
`

export const MenuHamburger = styled.div`
    display: none;

    @media(max-width: 770px){
        display: block;
    }
`