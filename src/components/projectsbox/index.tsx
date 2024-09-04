import { Card, Image, Text, DivLinks, IconsImage, LinkProject } from "./style"
import { IProjectsBox } from "./types"
import WebImage from "../../assets/icons_Image/internet.png"
import GitHubImage from "../../assets/icons_Image/github.png"

const ProjectsBox = ({ProjectName, Description, LinkWeb, LinkGithub} : IProjectsBox) => {
    return(
        <Card>
            <Image src={ProjectName}/>
            <Text>{Description}</Text>

            <DivLinks>
                <LinkProject href={LinkWeb} > <IconsImage src={WebImage} /> </LinkProject>
                <LinkProject href={LinkGithub} > <IconsImage src={GitHubImage} /> </LinkProject>
            </DivLinks>
        </Card>
    )
}

export default ProjectsBox