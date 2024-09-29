import styled from "styled-components";

export const MenuNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    width: 100%;
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