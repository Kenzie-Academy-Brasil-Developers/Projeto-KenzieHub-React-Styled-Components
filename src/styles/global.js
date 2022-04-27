import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --pink-primary: #ff577f;
        --pink-focus: #ff427f;
        --pink-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;
        --full-black: rgb(0,0,0); 
        --black-drop: rgba(0,0,0,0.4);
        --success-toastify: #3fe864;
        --negative-toastify: #e83f5b;
    }

    body {
        background-color: var(--grey-4);
        color: var(--grey-0);
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

`;
