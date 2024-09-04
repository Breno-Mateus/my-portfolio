import { Box, Picture, Text } from "./style"
import { ISkillsBoxProps } from "./types"

const  SkillsBox = ({image, text} : ISkillsBoxProps) => {
    return (
        <Box>
            <Picture src={image}/>
            <Text>{text}</Text>
        </Box>
    )
}

export default SkillsBox