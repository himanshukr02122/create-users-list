import React from 'react'
import styled from 'styled-components';

const UserList = ({users, removeItem}) => {
  return (
    <UserLists>
        <ul>
            {
                users.length > 0 ?
                users.map((user) => {
                    return (
                        <li className='userListItem' key={user.id} onClick={()=> removeItem(user.id)} >{user.username} ({user.age} years old)</li>
                    )
                })
                : 
                <li className='userListNoItem'>No user found</li>
            }
        </ul>
    </UserLists>
  )
}

export default React.memo(UserList);

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
    & ul {
            list-style-type: none;
            padding-left: 0;
            & .userListItem {
            border: 0.05rem solid gray;
            margin-bottom: 1rem;
            padding: 0.8rem 2rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

        & .userListNoItem {
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
            font-family: Verdana;

        }
    }
`;
