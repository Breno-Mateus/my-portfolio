import { HeaderStyle, DivMenu, DivButton, Logo, Text, MenuNav, MenuHamburger } from "./style"
import Img from "../../assets/foto_breno.jpeg"
import Button from "../../components/button"
import { Link } from "react-scroll";
import { useState } from "react";
import Hamburger from "hamburger-react";

import HeaderMobile from "../header-mobile";

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    const handleMenuItemClick = () => {
        setTimeout(() => {setOpen(false)}, 200)
    }

    return (
        <HeaderStyle isOpen={isOpen}>
            <DivMenu>
                <Logo src={Img} alt="Foto Breno" />

                <MenuNav>
                    <Link to="SectionStyle" smooth={true} duration={500} > <Text>Home</Text> </Link>
                    <Link to="SectionAbout" smooth={true} duration={500}> <Text>Sobre</Text> </Link>
                    <Link to="SectionSkills" smooth={true} duration={500}> <Text>Habilidades</Text> </Link>
                    <Link to="SectionProjects" smooth={true} duration={500}> <Text>Projetos</Text> </Link>
                </MenuNav>

                <DivButton><Button href="https://www.linkedin.com/in/breno-mateus-8b9a99211/" text="Contato"/></DivButton>

                <MenuHamburger> <Hamburger toggled={isOpen} toggle={setOpen} /> </MenuHamburger>
            </DivMenu>

            {isOpen && (
                <HeaderMobile onClick={handleMenuItemClick}/>
            )}       
        </HeaderStyle>
    )
}

export default Header