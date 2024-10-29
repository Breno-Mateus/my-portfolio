import { SectionStyle, Title, TextDecoration, SkillSection } from "./style"
import SkillsBox from "../../components/skillsbox"

//images skills
import Html from "../../assets/Skills_Image/html-5.png"
import Css from "../../assets/Skills_Image/css-3.png"
import JavaScript from "../../assets/Skills_Image/js.png"
import ImageReact from "../../assets/Skills_Image/react.png"
import Git from "../../assets/Skills_Image/git.png"
import Typescript from "../../assets/Skills_Image/Typescript.png"
import Style from "../../assets/Skills_Image/stylecomponents.svg"
import Node from "../../assets/Skills_Image/nodejs.png"
import linux from "../../assets/Skills_Image/linux.png"
import tailwind from "../../assets/Skills_Image/Tailwind CSS.png"

const SectionSkills = () => {
    return (
        <SectionStyle id="SectionSkills">
            <Title>Mihas <TextDecoration>Habilidades</TextDecoration></Title>

            <SkillSection>
                <SkillsBox image={Html} text="HTML"/>
                <SkillsBox image={Css} text="CSS"/>
                <SkillsBox image={JavaScript} text="JavaScript"/>
                <SkillsBox image={Node} text="Nodejs"/>
                <SkillsBox image={ImageReact} text="React"/>
                <SkillsBox image={Git} text="Git"/>
                <SkillsBox image={Typescript} text="TypeScript"/>
                <SkillsBox image={Style} text="Styled-Components"/>
                <SkillsBox image={tailwind} text="Tailwind CSS"/>
                <SkillsBox image={linux} text="Linux"/>
            </SkillSection>
        </SectionStyle>
    )
}

export default SectionSkills