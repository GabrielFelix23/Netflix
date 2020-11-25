import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 120vh;
`
export const ContainerText = styled.div`
    width: 100%;
    max-width: 640px;
    text-align: center;

    h1{
        font-size: 50px;
    }
    p{
        width: 100%;
        font-size: 25px;
        margin-bottom: 25px
    }
`

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    p{
        width: 100%;
        font-size: 20px;
        margin-bottom: 20px
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;
        margin-bottom: 20px;

        input{
            width: 100%;
            height: 10vh;
            padding: 10px;
            font-size: 17px;
        }
        
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 10vh;

            border: none;
            background: #E50914;
            color: #fff;
            font-size: 23px;

            svg{
                font-size: 25px
            }
        }
    }
` 