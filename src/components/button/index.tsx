import { Botao } from "./style"
import { IButtonProps } from './types'

const Button = ({text, href, download} : IButtonProps) => {
    return (
        <Botao href={href} download={download}>{text}</Botao>
    )
}

export default Button