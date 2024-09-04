import { SecaoPrincipal, Titulo, TextDecoration, DivPrincipal, Image, Text } from "./style"
import FotoBreno from "../../assets/foto_breno.jpeg"

function SectionAbout () {
    return (
        <SecaoPrincipal id="SectionAbout">
            <Titulo>Sobre <TextDecoration>Mim</TextDecoration></Titulo>

            <DivPrincipal>
                <Image src={FotoBreno}/>
                <Text>Graduando em Ciências e Tecnologia com ênfase em Tecnologia da Computação pela Universidade Federal do Rio Grande do Norte (UFRN). Possui o Técnico em Manutenção e suporte em Informática pela Escola Agrícola de Jundiaí (UFRN), [2019]. Possui interesse nas áreas relacionadas a engenharia de computação e elétrica, Desenvolvimento Web e Inteligência artificial com aplicação na física.</Text>
            </DivPrincipal>
        </SecaoPrincipal>
    )
}

export default SectionAbout