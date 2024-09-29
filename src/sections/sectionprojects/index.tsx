import { SectionStyle, Title, ProjectSection } from "./style"
import ProjectsBox from "../../components/projectsbox"

//imagens dos projetos
import ProjectJazz from "../../assets/Projects_Image/projeto_jazz.png"
import ProjectSpotify from "../../assets/Projects_Image/spotify_projeto.png"
import ProjectCalculator from "../../assets/Projects_Image/projeto_calculadora_imc.png"
import ProjectParalaxe from "../../assets/Projects_Image/projeto_parallax.png"
import ProjectDisk from "../../assets/Projects_Image/projeto_disk.png"
import ProjectCoffe from "../../assets/Projects_Image/projeto_coffe_page.png"
import ProjectPodcast from "../../assets/Projects_Image/projeto_podcast.png"

const SectionProjects = () => {
    return(
        <SectionStyle id="SectionProjects">
            <Title>Projetos</Title>

            <ProjectSection>
                <ProjectsBox ProjectName={ProjectDisk} TitleProject="Disk Denúncia" Description="Plataforma de denúncia feita através de formulário." tecnologias="React.JS, Typescript, React-Hook-Form, Styled-componentes e Hamburger-React." LinkWeb="https://disk-denuncia.vercel.app/" LinkGithub="https://github.com/Breno-Mateus/disk-denuncia"/>
            
                <ProjectsBox ProjectName={ProjectPodcast} TitleProject="Podcast Manager" Description="O Podcast Manager é uma aplicação inspirada no estilo da Netflix, que permite centralizar diferentes episódios de podcasts separados por categoria." tecnologias="Node.js, Typescript, Tsup, Tsx e @types/node." LinkWeb="https://github.com/Breno-Mateus/node-ts-webapi-without-frameworks-podcast-menager/" LinkGithub="https://github.com/Breno-Mateus/node-ts-webapi-without-frameworks-podcast-menager"/>

                <ProjectsBox ProjectName={ProjectCoffe} TitleProject="Coffe Page" Description="Desenvolvi um website para uma cafeteria, focando em uma experiência de usuário moderna." tecnologias="React.JS, Typescript e Styled-componentes." LinkWeb="https://coffe-page-inky.vercel.app/" LinkGithub="https://github.com/Breno-Mateus/Coffe_Page"/>
            
                <ProjectsBox ProjectName={ProjectJazz} TitleProject="Lading Page Jazz" Description="Lading page de uma escola de jazz utilizando HTML, CSS e também o conceito de mobile first." tecnologias="HTML, CSS e Figma." LinkWeb="https://breno-mateus.github.io/Tom-s-Jazz-School/" LinkGithub="https://github.com/Breno-Mateus/Tom-s-Jazz-School"/>

                <ProjectsBox ProjectName={ProjectSpotify} TitleProject="Spotify" Description="Réplica da página do Spotify utilizando HTML, CSS e JavaScript." tecnologias="HTML, CSS e JavaScript." LinkWeb="https://spotify-project-pi.vercel.app/" LinkGithub="https://github.com/Breno-Mateus/Spotify_Project"/>

                <ProjectsBox ProjectName={ProjectCalculator} TitleProject="Calculadora IMC" Description="Calculadora responsiva de IMC utilizando HTML, CSS e JavaScript." tecnologias="HTML, CSS e JavaScript." LinkWeb="https://breno-mateus.github.io/Calculadora-IMC/" LinkGithub="https://github.com/Breno-Mateus/Calculadora-IMC"/>

                <ProjectsBox ProjectName={ProjectParalaxe} TitleProject="Paralaxe Page" Description="Página web utilizando HTML, CSS e JavaScript para criar o efeito de paralaxe." tecnologias="HTML, CSS e JavaScript." LinkWeb="https://breno-mateus.github.io/Parallax-efeito/" LinkGithub="https://github.com/Breno-Mateus/Parallax-efeito"/>
            </ProjectSection>
        </SectionStyle>
    )
}

export default SectionProjects