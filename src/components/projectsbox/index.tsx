import { Card, Image, Title, Text, BoxText, DivTec, LinkProject, BoxImg, TextDecoration } from "./style"
import { projectsBoxProps } from "../../types/props-projects-box"

import { StackIcons } from 'github-automated-repos';


const ProjectsBox = ({data} : projectsBoxProps) => {
    return(
        <Card key={data.id}>
            <BoxImg>
                <Image src={data.banner}/>
            </BoxImg>

            <BoxText>
                <LinkProject href={data.html_url}> <Title>{data.name}</Title> </LinkProject>
                <Text>{data.description}</Text>
                <LinkProject href={data.homepage}> <TextDecoration>Deploy</TextDecoration> </LinkProject>
            </BoxText>

            <DivTec>
                {data.topics.map((icon) => {
                        return (
                        <div key={icon}>
                            <StackIcons key={icon} className="stack_Icon" itemTopics={icon} />
                        </div>
                        )
                    })}
            </DivTec>
        </Card>
    )
}

export default ProjectsBox