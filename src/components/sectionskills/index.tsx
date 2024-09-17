import { SecaoPrincipal,Titulo, TextDecoration, SecaoSkills } from "./style"
import SkillsBox from "../skillsbox"

//imagem skills
import Html from "../../assets/Skills_Image/html-5.png"
import Css from "../../assets/Skills_Image/css-3.png"
import JavaScript from "../../assets/Skills_Image/js.png"
import ImageReact from "../../assets/Skills_Image/react.png"
import Git from "../../assets/Skills_Image/git.png"
import Typescript from "../../assets/Skills_Image/Typescript.png"
import Style from "../../assets/Skills_Image/stylecomponents.svg"
import Node from "../../assets/Skills_Image/nodejs.png"
import linux from "../../assets/Skills_Image/linux.png"

const SectionSkills = () => {
    return (
        <SecaoPrincipal id="SectionSkills">
            <Titulo>Mihas <TextDecoration>Habilidades</TextDecoration></Titulo>

            <SecaoSkills>
                <SkillsBox image={Html} text="HTML"/>
                <SkillsBox image={Css} text="CSS"/>
                <SkillsBox image={JavaScript} text="JavaScript"/>
                <SkillsBox image={Node} text="Nodejs"/>
                <SkillsBox image={ImageReact} text="React"/>
                <SkillsBox image={Git} text="Git"/>
                <SkillsBox image={Typescript} text="TypeScript"/>
                <SkillsBox image={Style} text="Styled-Components"/>
                <SkillsBox image={linux} text="Linux"/>
            </SecaoSkills>
        </SecaoPrincipal>
    )
}

export default SectionSkills