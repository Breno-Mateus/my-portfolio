import { SectionStyle, Title, TextDecoration, DivMain, Image, Text } from "./style"
import FotoBreno from "../../assets/foto_breno.jpeg"

function SectionAbout () {
    return (
        <SectionStyle id="SectionAbout">
            <Title>Sobre <TextDecoration>Mim</TextDecoration></Title>

            <DivMain>
                <Image src={FotoBreno}/>
                <Text>Sou um profissional dedicado, com experiência em desenvolvimento web e conhecimento em tecnologias como React.js, JavaScript, TypeScript e Node.js. Já atuei em funções técnicas que me permitiram desenvolver habilidades em supervisão, comunicação e resolução de problemas. Estou sempre buscando aprender e aprimorar minhas competências para contribuir de forma eficaz em novos desafios e projetos.</Text>
            </DivMain>
        </SectionStyle>
    )
}

export default SectionAbout