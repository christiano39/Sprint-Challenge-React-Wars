import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 400px;
    margin: 20px auto;
    border: 3px solid black;
    box-shadow: 2px 2px 5px 0px yellow;
    padding: 10px 0;
    border-radius: 10px;

    span {
        font-weight: bold;
    }

    p {
        margin: 5px 0;
    }

    h2 {
        margin: 5px 0;
    }

    button {
        padding: 0 40px;
        margin: 5px 0 0;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`