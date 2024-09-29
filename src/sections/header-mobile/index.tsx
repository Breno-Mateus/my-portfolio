import { MenuNav, Text} from "./style.ts"
import { Link } from "react-scroll"
import Button from "../../components/button/index.tsx"
import { IHeaderMobileProps } from "./type.ts"


const HeaderMobile = ({onClick} : IHeaderMobileProps) => {
    return(
        <MenuNav>
            <Link to="SectionStyle" smooth={true} duration={500} onClick={onClick}> <Text>Home</Text> </Link>
            <Link to="SectionAbout" smooth={true} duration={500} onClick={onClick}> <Text>Sobre</Text> </Link>
            <Link to="SectionSkills" smooth={true} duration={500} onClick={onClick}> <Text>Habilidades</Text> </Link>
            <Link to="SectionProjects" smooth={true} duration={500} onClick={onClick}> <Text>Projetos</Text> </Link>
            <Button href="https://www.linkedin.com/in/breno-mateus-8b9a99211/" text="Contato"/>
        </MenuNav>
    )
}

export default HeaderMobile