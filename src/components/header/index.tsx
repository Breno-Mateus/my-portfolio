import { Cabecalho, Logo, Text } from "./style"
import Img from "../../assets/foto_breno.jpeg"
import Button from "../button"
import { Link } from "react-scroll";

const Header = () => {
    return (
        <Cabecalho>
            <Logo src={Img} alt="Foto Breno" />
            <Link to="SectionMain" smooth={true} duration={500}> <Text>Home</Text> </Link>
            <Link to="SectionAbout" smooth={true} duration={500}> <Text>Sobre</Text> </Link>
            <Link to="SectionSkills" smooth={true} duration={500}> <Text>Habilidades</Text> </Link>
            <Link to="SectionProjects" smooth={true} duration={500}> <Text>Projetos</Text> </Link>
            <Button href="malito:brenomateus36@gmail.com?subject=Contato pelo Portfólio&body=Olá, gostaria de falar sobre..." text="Contato"/>
        </Cabecalho>
    )
}

export default Header