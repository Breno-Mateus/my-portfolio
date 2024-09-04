import { SecaoPrincipal, DevImage, DivText, TextoPrimario, TextoSecundario, TextoEstilo } from "./style"
import Dev from "../../assets/ilustracao.svg"
import Button from "../button"

const SectionMain = () => {
    return (
        <SecaoPrincipal id="SectionMain">
            <DivText>
                <TextoPrimario> Olá, me chamo </TextoPrimario> 
                <TextoPrimario> Breno </TextoPrimario>
                <TextoSecundario> Eu sou um </TextoSecundario>
                <TextoEstilo>desenvolvedor front-end</TextoEstilo>
                <br/>
                <Button text="Download CV"/>
            </DivText>
            <DevImage src={Dev}/>
        </SecaoPrincipal>
    )
}

export default SectionMain