import { useEffect, useState } from 'react'
import './App.css'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios';
import { format } from 'date-fns';

interface User {
  recordId: string; // GUID в C# представлений як string в TypeScript
  userId: number; // long в C# представлений як number в TypeScript
  firstName: string; // string в C# представлений як string в TypeScript
  lastName: string; // string в C# представлений як string в TypeScript
  telegramName?: string; // ? означає, що це поле є необов'язковим
  createDate: Date; // DateTime в C# представлений як Date в TypeScript
}

function App() {
  const [listUsers,setListUsers] = useState<User[]|null>(null);
  useEffect(()=>{
    const getAllUsers=async()=>{
      try{
        const result = await axios.get("http://localhost:5265/api");
        setListUsers(result.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getAllUsers();
  },[setListUsers])

  useEffect(()=>{
    console.log(listUsers);
  },[listUsers]);

  function dateString(date: Date) {
    const currentDate: Date = date;
    const formattedDate: string = format(currentDate, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate;
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Id</th>
            <th>Telegram Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date and time</th>
          </tr>
        </thead>
        <tbody>
          {listUsers?.map((item,index)=>{
            return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.userId}</td>
              <td>{item.telegramName}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{dateString(item.createDate)}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </>
  )
}

export default App
