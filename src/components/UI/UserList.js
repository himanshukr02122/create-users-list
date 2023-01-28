import React from 'react'
import styled from 'styled-components';

const UserList = ({users, removeItem}) => {
  return (
    <UserLists>
        {
            users.length > 0 ?
            users.map((user) => {
                return (
                    <div className='userListItem' key={user.id} onClick={()=> removeItem(user.id)} >{user.username} ({user.age})</div>
                )
            })
            : 
            <p>No user found</p>
        }
    </UserLists>
  )
}

export default UserList;
const UserLists = styled.div`
    padding: 2rem;
    width: 40%;
    max-width: 32rem;
    min-width: 24rem;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 1rem;
    margin-top: 3rem;
    cursor: pointer;
    @media screen and (max-width: 575px) {
        min-width: 16rem;
        padding: 1rem
    }
    & .userListItem {
        border: 0.05rem solid gray;
        margin-bottom: 1rem;
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    & p {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        font-family: Verdana;

    }
`;
