import { Card, Image, Title, Text, BoxText, IconsImage, DivLink, LinkProject, BoxImg } from "./style"
import { IProjectsBox } from "./types"
import WebImage from "../../assets/icons_Image/internet.png"
import GitHubImage from "../../assets/icons_Image/github.png"

const ProjectsBox = ({ProjectName, TitleProject, Description, LinkWeb, LinkGithub, tecnologias} : IProjectsBox) => {
    return(
        <Card>
            <BoxImg>
                <Image src={ProjectName}/>
            </BoxImg>

            <BoxText>
                <Title>{TitleProject}</Title>
                <Text>{Description}</Text>
                <Text>Tecnologias: {tecnologias}</Text>
            </BoxText>

            <DivLink>
                <LinkProject href={LinkWeb} > <IconsImage src={WebImage} /> </LinkProject>
                <LinkProject href={LinkGithub} > <IconsImage src={GitHubImage} /> </LinkProject>
            </DivLink>
        </Card>
    )
}

export default ProjectsBox