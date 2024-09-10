import { Card, Image, Title, Text, BoxText, IconsImage, DivLink, LinkProject, BoxImg } from "./style"
import { IProjectsBox } from "./types"
import WebImage from "../../assets/icons_Image/internet.png"
import GitHubImage from "../../assets/icons_Image/github.png"

const ProjectsBox = ({ProjectName, TitleProject, Description, LinkWeb, LinkGithub} : IProjectsBox) => {
    return(
        <Card>
            <BoxImg>
                <Image src={ProjectName}/>
            </BoxImg>

            <BoxText>
                <Title>{TitleProject}</Title>
                <Text>{Description}</Text>

                <DivLink>
                    <LinkProject href={LinkWeb} > <IconsImage src={WebImage} /> </LinkProject>
                    <LinkProject href={LinkGithub} > <IconsImage src={GitHubImage} /> </LinkProject>
                </DivLink>
            </BoxText>
        </Card>
    )
}

export default ProjectsBox