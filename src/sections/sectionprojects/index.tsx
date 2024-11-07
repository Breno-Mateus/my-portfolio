import { SectionStyle, Title, ProjectSection } from "./style"
import ProjectsBox from "../../components/projectsbox"
import { useGitHubAutomatedRepos } from 'github-automated-repos';

const SectionProjects = () => {

    const data = useGitHubAutomatedRepos("Breno-Mateus", "keyword")

    return(
        <SectionStyle id="SectionProjects">
            <Title>Projetos</Title>

            <ProjectSection>
                {data.map((item) => {
                    return(
                        <ProjectsBox data={item}/>
                    )
                })}
            </ProjectSection>
        </SectionStyle>
    )
}

export default SectionProjects