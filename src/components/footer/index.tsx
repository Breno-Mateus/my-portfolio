import { DivFooter, Title, TextDecoration, LinkProject, IconsImage, Text, DivIcons } from "./style"
import Github from "../../assets/icons_Image/github.png"
import Linkedin from "../../assets/icons_Image/linkedin_footer.png"

const Footer = () => {
    return(
        <DivFooter>
            <Title>Redes <TextDecoration>Sociais</TextDecoration></Title>

            <DivIcons>
                <LinkProject href="https://github.com/Breno-Mateus"> <IconsImage src={Github}/> </LinkProject>
                <LinkProject href="https://www.linkedin.com/in/breno-mateus-8b9a99211/"> <IconsImage src={Linkedin}/> </LinkProject>
            </DivIcons>

            <Text>Copyright©2024 Breno Mateus | Todos os direitos reservados</Text>
        </DivFooter>
    )
}

export default Footer