import React from 'react'
import {Container, ContainerLogin} from './style'

function Login(){
    return(
        <Container>
            <ContainerLogin>
                <h1>Entrar</h1>
                <form>
                    <input type="email" placeholder="Email ou número de telefone"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                </form>
            </ContainerLogin>
        </Container>
    )
}

export default Login