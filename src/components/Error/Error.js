import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Error = ({errorMessage, validation}) => {
    const [obtainedErrorMessage, setObtainedErrorMessage ]= useState(errorMessage);
    useEffect(()=> {
        setObtainedErrorMessage(errorMessage);
    }, [errorMessage])
  return (
    <ErrorStyles>
        <header>Invalid input</header>
        <div className='error-message'>{obtainedErrorMessage}</div>
        <div className='button-wrapper'>
            <button type='button' onClick={()=> validation(false)}>Okay</button>
        </div>
    </ErrorStyles>
  )
}

export default Error;

const ErrorStyles = styled.div`
    position: absolute;
    border-radius: 1rem;
    z-index: 2;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    max-width: 40rem;
    min-width: 30rem;
    background: #fff;
    @media screen and (max-width: 575px) {
        min-width: 16rem;
    }
    & header {
        background: #250f47;
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        font-family: Verdana;
        padding: 1rem 3rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        @media screen and (max-width: 575px) {
            font-size: 1.2rem;
            font-weight: 500;
            padding: 1rem 2rem;
        }
    }
    &   .error-message {
            background: #fff;
            color: #000;
            font-size: 1.4rem;
            font-weight: 600;
            font-family: Verdana;
            padding: 2rem 3rem 1rem;
            min-height: 10rem;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            @media screen and (max-width: 575px) {
                font-size: 1rem;
                font-weight: 500;
                padding: 1rem 2rem;
                min-height: 5rem;
            }
        }
    &   .button-wrapper {
        display: flex;
        justify-content: right;
        & button {
            font-size: 1rem;
            font-weight: 700;
            padding: 0.6rem 2rem;
            margin-bottom: 2rem;
            margin-right: 1rem;
        }
    }
`;
