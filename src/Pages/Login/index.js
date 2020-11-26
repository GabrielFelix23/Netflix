import React from 'react'
import {Container, ContainerLogin, ContainerHelp, ContainerCheck} from './style'

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

                <ContainerHelp>
                    <ContainerCheck>
                        <input type="checkbox"/>
                        <spam>Lembre-se de mim</spam>
                    </ContainerCheck>
                    <spam>Precisa de ajuda?</spam>
                </ContainerHelp>
            </ContainerLogin>

        
        </Container>
    )
}

export default Login