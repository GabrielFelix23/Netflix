import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`

export const ContainerLogin = styled.div`
    width: 65vh;
    height: 80vh;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    padding-top: 5vh;

    h1{
        margin-bottom: 30px;
        margin-left: 65px;
    }

    form{  
        display: flex;
        align-items: center;
        flex-direction: column;

        input{
            width: 100%;
            max-width: 300px;
            height: 50px;
            border: none;
            border-radius: 3px;
            background: #333333;
            color: #fff;
            margin-bottom: 20px;
            padding: 10px
        }
        input[type = email]{
            background: #1D1B15
        }
        button{
            border: none;
            width: 100%;
            max-width: 300px;
            height: 50px;
            background: #E50914;
            color: #fff;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 10px
        }
    }
`

export const ContainerHelp = styled.div`
    margin-left: 69px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    color: #BDBDBD;
    font-size: 13px;
`

export const ContainerCheck = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    input[type = checkbox]{
        margin-right: 5px
    }
`