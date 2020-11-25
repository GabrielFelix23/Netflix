import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 50px;

    img{
        width: 25vh;
        height: 15vh
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        background: #E50914;
        color: #fff;
        width: 12vh;
        height: 5vh;
        border-radius: 2px
    }
`