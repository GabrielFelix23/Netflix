import React from 'react'
import {Link} from 'react-router-dom'

function Error(){
    return(
        <div>
            <h1>Está página não existe!</h1>
            <Link to="/">Voltar para tela home</Link>
        </div>
    )
}

export default Error