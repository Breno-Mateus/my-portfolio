import { SectionStyle, DevImage, DivText, TextMain, TextSecondary, TextoEstilo } from "./style"
import Dev from "../../assets/ilustracao.svg"
import Button from "../../components/button"

const SectionMain = () => {
    return (
        <SectionStyle id="SectionStyle">
            <DivText>
                <TextMain> Olá, me chamo </TextMain> 
                <TextMain> Breno </TextMain>
                <TextSecondary> Eu sou um </TextSecondary>
                <TextoEstilo>desenvolvedor front-end</TextoEstilo>
                <br/>
                <Button href="/Currículo.pdf" text="Download CV"/>
            </DivText>

            <DevImage src={Dev}/>
        </SectionStyle>
    )
}

export default SectionMain