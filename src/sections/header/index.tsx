import { HeaderStyle, Logo, Text, Navbar, MenuNav } from "./style"
import Img from "../../assets/foto_breno.jpeg"
import Button from "../../components/button"
import { Link } from "react-scroll";
import { IHeaderProps } from "./type";

const Header = ({setMenuIsVisible} : IHeaderProps) => {
    return (
        <HeaderStyle>
            <Logo src={Img} alt="Foto Breno" />

            <MenuNav>
                <Link to="SectionStyle" smooth={true} duration={500}> <Text>Home</Text> </Link>
                <Link to="SectionAbout" smooth={true} duration={500}> <Text>Sobre</Text> </Link>
                <Link to="SectionSkills" smooth={true} duration={500}> <Text>Habilidades</Text> </Link>
                <Link to="SectionProjects" smooth={true} duration={500}> <Text>Projetos</Text> </Link>
                <Button href="https://www.linkedin.com/in/breno-mateus-8b9a99211/" text="Contato"/>
            </MenuNav>
            
            <Navbar onClick={() => setMenuIsVisible(true)}/>
        </HeaderStyle>
    )
}

export default Header