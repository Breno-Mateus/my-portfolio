import { Logo, HeaderStyle, CloseIcon, MenuNav, Text, DivIcons} from "./style.ts"
import { Link } from "react-scroll"
import Button from "../../components/button/index.tsx"
import Img from "../../assets/foto_breno.jpeg"
import { IHeaderMobileProps } from "./type.ts"


const HeaderMobile = ({menuIsVisible, setMenuIsVisible} : IHeaderMobileProps) => {
    return(
        <HeaderStyle isVisible={menuIsVisible}>
            <DivIcons>
                <Logo src={Img} alt="Foto Breno"/>
                <CloseIcon onClick={() => setMenuIsVisible(false)}/>
            </DivIcons>
    
            <MenuNav>
                <Link to="SectionStyle" smooth={true} duration={500}> <Text>Home</Text> </Link>
                <Link to="SectionAbout" smooth={true} duration={500}> <Text>Sobre</Text> </Link>
                <Link to="SectionSkills" smooth={true} duration={500}> <Text>Habilidades</Text> </Link>
                <Link to="SectionProjects" smooth={true} duration={500}> <Text>Projetos</Text> </Link>
                <Button href="https://www.linkedin.com/in/breno-mateus-8b9a99211/" text="Contato"/>
            </MenuNav>
        </HeaderStyle>
    )
}

export default HeaderMobile