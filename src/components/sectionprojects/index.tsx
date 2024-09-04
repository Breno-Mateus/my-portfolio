import { SecaoPrincipal, Titulo, SecaoProjects } from "./style"
import ProjectsBox from "../projectsbox"

//imagens dos projetos
import ProjectJazz from "../../assets/Projects_Image/projeto_jazz.png"
import ProjectStopwatch from "../../assets/Projects_Image/projeto_cronometro.png"
import ProjectCalculator from "../../assets/Projects_Image/projeto_calculadora_imc.png"
import ProjectParalaxe from "../../assets/Projects_Image/projeto_parallax.png"
import ProjectGame from "../../assets/Projects_Image/projeto_jogo_da_velha.png"


const SectionProjects = () => {
    return(
        <SecaoPrincipal id="SectionProjects">
            <Titulo>Projetos</Titulo>

            <SecaoProjects>
                <ProjectsBox ProjectName={ProjectJazz} Description="Lading page de uma escola de jazz utilizando HTML, CSS e também o conceito de mobile first." LinkWeb="https://breno-mateus.github.io/Tom-s-Jazz-School/" LinkGithub="https://github.com/Breno-Mateus/Tom-s-Jazz-School"/>

                <ProjectsBox ProjectName={ProjectStopwatch} Description="Cronômetro simples utilizando HTM, CSS e JavaScript." LinkWeb="https://breno-mateus.github.io/Cronometro/" LinkGithub="https://github.com/Breno-Mateus/Cronometro"/>

                <ProjectsBox ProjectName={ProjectCalculator} Description="Calculadora responsiva de IMC utilizando HTML, CSS e JavaScript." LinkWeb="https://breno-mateus.github.io/Calculadora-IMC/" LinkGithub="https://github.com/Breno-Mateus/Calculadora-IMC"/>

                <ProjectsBox ProjectName={ProjectParalaxe} Description="Página web utilizando HTML, CSS e JavaScript para criar o efeito de paralaxe." LinkWeb="https://breno-mateus.github.io/Parallax-efeito/" LinkGithub="https://github.com/Breno-Mateus/Parallax-efeito"/>

                <ProjectsBox ProjectName={ProjectGame} Description="Jogo da velha utilizando html e javascript." LinkWeb="https://breno-mateus.github.io/jogo-da-velha/" LinkGithub="https://github.com/Breno-Mateus/jogo-da-velha"/>
            </SecaoProjects>
        </SecaoPrincipal>
    )
}

export default SectionProjects