import { useCallback, useState } from "react";
import styled from "styled-components";
import AddUser from "./components/AddUser/AddUser";
import Error from "./components/Error/Error";
import UserList from "./components/UI/UserList";

function App() {

  const users = [
    {username: 'himanshu', age: 22, id: "user1"},
    {username: 'santhosh', age: 21, id: "user2"},
    {username: 'manjunath', age: 25, id: "user3"},
    {username: 'ayush', age: 28, id: "user4"},
  ]
  const [usersDetails, setUsersDetails] = useState(users);
  const [obtainedErrorMessage, setObtainedErrorMessage] = useState('');
  const [danger, setDanger] = useState(false);

  const newUserDetailsHandler= (newUserDetails) => {
    setUsersDetails((prevUsersDetails)=> {
      return [newUserDetails, ...prevUsersDetails];
    })
  }
  // const newListItems = (id) => {
  // }
  const newListItems = useCallback((id) => {
    setUsersDetails(usersDetails.filter((item)=> item.id !== id))
  }, [usersDetails])

  const fetchingErrorMessage = obtainedMessage => {
    setObtainedErrorMessage(obtainedMessage);
  }
  return (
    <Application>
      <AddUser getUserDetails={newUserDetailsHandler} giveMeErrorMessage={fetchingErrorMessage} validation={setDanger} />
      <UserList users={usersDetails} removeItem={newListItems} />
      {danger && 
      <div>
        <Error errorMessage={obtainedErrorMessage} validation={setDanger} />
        <div className="backdrop" onClick={()=> setDanger(false)}></div>
      </div>}
    </Application>
  );
}

export default App;

const Application = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  box-sizing:  border-box;
  & .backdrop {
      position: absolute;
      z-index: 1;
      content: '';
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
  }
`;
