import { SecaoPrincipal, Titulo, TextDecoration, DivPrincipal, Image, Text } from "./style"
import FotoBreno from "../../assets/foto_breno.jpeg"

function SectionAbout () {
    return (
        <SecaoPrincipal id="SectionAbout">
            <Titulo>Sobre <TextDecoration>Mim</TextDecoration></Titulo>

            <DivPrincipal>
                <Image src={FotoBreno}/>
                <Text>Sou um profissional dedicado, com experiência em desenvolvimento web e conhecimento em tecnologias como React.js, JavaScript, TypeScript e Node.js. Já atuei em funções técnicas que me permitiram desenvolver habilidades em supervisão, comunicação e resolução de problemas. Estou sempre buscando aprender e aprimorar minhas competências para contribuir de forma eficaz em novos desafios e projetos.</Text>
            </DivPrincipal>
        </SecaoPrincipal>
    )
}

export default SectionAbout