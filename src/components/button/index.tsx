import { ButtonStyle } from "./style"
import { IButtonProps } from './types'

const Button = ({text, href} : IButtonProps) => {
    return (
        <ButtonStyle href={href} target="_blank" rel="noopener noreferrer">{text}</ButtonStyle>
    )
}

export default Button