import React, { useState } from 'react'
import styled from 'styled-components';

const AddUser = ({getUserDetails, giveMeErrorMessage, validation}) => {
    const [username, setUserName] = useState('');
    const [validUsername, setValidUsername] = useState(true);
    const [valid, setValid] = useState(true);
    const [age, setAge] = useState('');

    const addNewUser = (e) => {
        e.preventDefault();
        if (username==='' && age === '') {
            setValid(false);
            setValidUsername(false);
            validation(true);
            giveMeErrorMessage('Please enter a valid username and age!');
            return
        }
        else if (username==='') {
            setValidUsername(false);
            validation(true);
            giveMeErrorMessage('Please enter a valid username!')
            return
        }
        else if (age === '') {
            setValid(false);
            validation(true);
            giveMeErrorMessage('Please enter a valid age!')
            return
        }
        else if (age > 61 || age < 18) {
            setValid(false);
            validation(true);
            giveMeErrorMessage('Age must be greater than 18 and less than 60!')
            return
        }
        else {
            setValid(true);
            validation(false);
            setValidUsername(true);
        }
        const newUser = {
            username: username,
            age: +age,
            id: Math.random().toString()
        }
        getUserDetails(newUser);
        setUserName('');
        setAge('');
    }
    
    const usernameHandler = (e) => {
        setUserName(e.target.value);
        setValidUsername(true);
    }

    const ageHandler = (e) => {
        if( e.target.value < 61) {
            setAge(e.target.value) 
            setValid(true)
        }
        else {
            setValid(false)
        }
    }
  return (
    <Form onSubmit={addNewUser}>
      <div>
        <label className=''>Username</label>
            <input type="text" value={username} onChange={usernameHandler} className={` ${validUsername ? 'valid' : 'invalid' }`} placeholder='Enter your username' />
        <label className=''>Age(Years)</label>
            <input type="number" value={age} onChange={ageHandler} className={` ${valid ? 'valid' : 'invalid' }`} placeholder='Enter your age' />
      </div>
      <Button type='submit'>Add User</Button>
    </Form>
  )
}

export default AddUser;

const Form = styled.form`
    padding: 2rem;
    width: 40%;
    max-width: 32rem;
    min-width: 24rem;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 1rem;
    @media screen and (max-width: 575px) {
        min-width: 16rem;
        padding: 1rem;
    }
    & label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 1.2rem;
        font-family: Monospace; 
    }

    & input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 500;
        &::placeholder {
            color: lightgray;
            font-size: 0.8rem;
            font-weight: 300;
        }
        &.invalid {
            border: 2px solid red;
            outline: none;
        }
        &.valid {
            border: 2px solid black;
        }
    }
`;

const Button = styled.button`
    padding: 0.8rem 4rem;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 0.5rem;
    background: #250f47;
    color: #fff;
    cursor: pointer;
    &:active {
        opacity: 0.9;
    }
`;