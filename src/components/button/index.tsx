import { Botao } from "./style"
import { IButtonProps } from './types'

const Button = ({text} : IButtonProps) => {
    return (
        <Botao>{text}</Botao>
    )
}

export default Button