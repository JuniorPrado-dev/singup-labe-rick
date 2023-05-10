import * as S from "./style"

const Modal=({mensagem,enviado,setEnviado})=>{
    if (enviado){
        setTimeout(() => {
            setEnviado(false)
        },5000);
    }
    return <S.Container enviado={enviado}>
        <S.SMenssagem enviado={enviado}>
            {mensagem}
        </S.SMenssagem>
    </S.Container>
}
export default Modal