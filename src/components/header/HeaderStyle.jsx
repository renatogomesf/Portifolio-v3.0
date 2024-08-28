import styled from 'styled-components'

export const HeaderComponent = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100vh;
    max-width: 270px;

    color: white;

    a {
        display: flex;
        flex-direction: column;
        color: white;
        width: min-content;
        font-weight: bold;
        gap: 4px;

        & div {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;

            & p {
                font-size: 0.9rem;
            }

            & li {
                white-space: nowrap;
            }
        }

        .icon {
            color: ${({ theme }) => theme.quaternary};
            font-size: 1.7rem;
            transition: 0.2s;
        }

        .btn_redes {
            background-color: ${({ theme }) => theme.tertiary};
            transition: 0.2s;
            border: 2px solid ${({ theme }) => theme.tertiary};
        }

        &:hover {
            .icon {
                color: ${({ theme }) => theme.light_green};
            }

            hr {
                width: 100%;
            }

            .btn_redes {
                background-color: ${({ theme }) => theme.secondary};
                border: 2px solid ${({ theme }) => theme.light_green};
            }
        }
    }

    hr {
        background-color: ${({ theme }) => theme.light_green};
        border: none;
        width: 0px;
        height: 2px;
        transition: 0.2s;
    }

    & .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        & h1 {
            opacity: 0;
            width: 0px;
            margin-left: 5px;
            font-weight: 800;

            animation: logo 2s forwards;
            animation-delay: 2s;
        }

        & img {
            height: 50px;
        }

        @keyframes logo {
            0% {
                opacity: 0;
                width: 0px;
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 0;
            }
            75% {
                opacity: 0;
                width: 75%;
            }
            100% {
                opacity: 1;
                width: 100%;
            }
        }
    }

    & nav {
        padding: 30px 45px;
        background-color: ${({ theme }) => theme.tertiary};
        border-radius: 10px;

        & ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;
        }
    }

    & .contatos {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-weight: bold;

        & .redes_sociais {
            display: flex;
            flex-direction: column;
            gap: 15px;

            & .btn_redes {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                color: white;
                cursor: pointer;
            }
        }

        & .emails {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }

    @media (max-width: 915px) {
        flex-direction: row;
        height: 100px;
        max-width: 100%;
        z-index: 100;

        & .logo {
            & img {
                height: 40px;
            }
        }

        & nav {
            padding: 15px;
            background-color: ${({ theme }) => theme.secondary};

            & ul {
                flex-direction: row;
            }
        }

        & .contatos {
            display: none;
        }
    }

    @media (max-width: 690px) {
        & nav {
            display: none;
        }
    }
`
