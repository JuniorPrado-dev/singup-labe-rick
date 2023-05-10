import axios from 'axios';
import { useForm } from '../hooks/useForm'
import './style.css'
import { useState } from 'react';
import Modal from '../componets/modal';
export default function SingUp() {
    const [form, onChange] = useForm({ name: '', email: ''})
    
    const [enviado,setEnviado]=useState(false)
    const [mensagem,setMensagem]=useState('')
    console.log(form);
    
    const enviar = (e) => {
        e.preventDefault();
        axios.post('https://labe-rick.onrender.com/user/singup',form,).then(
            (res)=>{
                console.log(res.data.message);
                setMensagem(res.data.message);
                setEnviado(true);
            }
        ).catch(
            (erro)=>{
            console.log(erro.response.data);
            setMensagem(erro.response.data);
            setEnviado(true);
        }
        )
        
    }

    return (
        <>
        <Modal mensagem={mensagem} enviado={enviado} setEnviado={setEnviado} />
        <> 
            <div className="login-box">
                <p id='title'>Faça parte do Labe Rick</p>
                <form>
                    <div className="user-box">
                        <input type="text" name="name" value={form.name} onChange={onChange} required="" />
                        <label>Nome</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="email" value={form.email} onChange={onChange} required="" />
                        <label>E-mail</label>
                    </div>
                    <center>
                        <button onClick={enviar}>
                            Enviar
                            <span></span>
                        </button>
                    </center>
                </form>
            </div>
        </>
        </>
    )
}