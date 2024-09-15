import { SecaoPrincipal, Titulo, SecaoProjects } from "./style"
import ProjectsBox from "../projectsbox"

//imagens dos projetos
import ProjectJazz from "../../assets/Projects_Image/projeto_jazz.png"
import ProjectSpotify from "../../assets/Projects_Image/spotify_projeto.png"
import ProjectCalculator from "../../assets/Projects_Image/projeto_calculadora_imc.png"
import ProjectParalaxe from "../../assets/Projects_Image/projeto_parallax.png"
import ProjectGame from "../../assets/Projects_Image/projeto_jogo_da_velha.png"
import ProjectCoffe from "../../assets/Projects_Image/projeto_coffe_page.png"


const SectionProjects = () => {
    return(
        <SecaoPrincipal id="SectionProjects">
            <Titulo>Projetos</Titulo>

            <SecaoProjects>
                <ProjectsBox ProjectName={ProjectCoffe} TitleProject="Coffe Page" Description="Desenvolvi um website para uma cafeteria, focando em uma experiência de usuário moderna."  LinkWeb="https://coffe-page-inky.vercel.app/" LinkGithub="https://github.com/Breno-Mateus/Coffe_Page"/>
            
                <ProjectsBox ProjectName={ProjectJazz} TitleProject="Lading Page Jazz" Description="Lading page de uma escola de jazz utilizando HTML, CSS e também o conceito de mobile first."  LinkWeb="https://breno-mateus.github.io/Tom-s-Jazz-School/" LinkGithub="https://github.com/Breno-Mateus/Tom-s-Jazz-School"/>

                <ProjectsBox ProjectName={ProjectSpotify} TitleProject="Spotify" Description="Réplica da página do Spotify utilizando HTML, CSS e JavaScript." LinkWeb="https://spotify-project-pi.vercel.app/" LinkGithub="https://github.com/Breno-Mateus/Spotify_Project"/>

                <ProjectsBox ProjectName={ProjectCalculator} TitleProject="Calculadora IMC" Description="Calculadora responsiva de IMC utilizando HTML, CSS e JavaScript." LinkWeb="https://breno-mateus.github.io/Calculadora-IMC/" LinkGithub="https://github.com/Breno-Mateus/Calculadora-IMC"/>

                <ProjectsBox ProjectName={ProjectParalaxe} TitleProject="Paralaxe Page" Description="Página web utilizando HTML, CSS e JavaScript para criar o efeito de paralaxe." LinkWeb="https://breno-mateus.github.io/Parallax-efeito/" LinkGithub="https://github.com/Breno-Mateus/Parallax-efeito"/>

                <ProjectsBox ProjectName={ProjectGame} TitleProject="Jogo da velha" Description="Jogo da velha utilizando html e javascript." LinkWeb="https://breno-mateus.github.io/jogo-da-velha/" LinkGithub="https://github.com/Breno-Mateus/jogo-da-velha"/>
            </SecaoProjects>
        </SecaoPrincipal>
    )
}

export default SectionProjects