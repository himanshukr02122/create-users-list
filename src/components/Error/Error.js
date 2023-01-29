import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ErrorModal = props => {
    return (
        <ErrorStyles>
            <header><h2>Invalid input</h2></header>
            <div className='error-message'>{props.obtainedErrorMessage}</div>
            <div className='button-wrapper'>
                <button type='button' onClick={()=> props.validation(false)}>Okay</button>
            </div>
        </ErrorStyles>
    )
}

const Error = ({errorMessage, validation}) => {
    const [obtainedErrorMessage, setObtainedErrorMessage ]= useState(errorMessage);
    useEffect(()=> {
        setObtainedErrorMessage(errorMessage);
    }, [errorMessage])
  return (
    <>
        {ReactDOM.createPortal(<ErrorModal obtainedErrorMessage={obtainedErrorMessage} validation={validation} />, document.getElementById('error-modal'))}
    </>
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
    & header h2 {
        margin-top: 0;
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
            padding: 1rem 3rem;
            min-height: 8rem;
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
