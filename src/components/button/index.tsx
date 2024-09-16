import { Botao } from "./style"
import { IButtonProps } from './types'

const Button = ({text, href} : IButtonProps) => {
    return (
        <Botao href={href} target="_blank" rel="noopener noreferrer">{text}</Botao>
    )
}

export default Button