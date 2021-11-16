import * as React from 'react';
import {useState} from "react";

const App = () => {

    const [users, setUsers] = useState([]);

     const getUsers = async () => {
        let response = await fetch('https://6193cd7d221e680017450c22.mockapi.io/users');
        if (response.status === 200) {
            let data = await response.json();
            setUsers(data);
        } else {
            alert(`Статус сервера ${response.status}`)
        }
    };

     const createUsers = () => {
         const emailElem = document.querySelector('#email')
         const usernameElem = document.querySelector('#username')
         const data = {
             email: emailElem.value,
             name: usernameElem.value
         }
         fetch('https://6193cd7d221e680017450c22.mockapi.io/users', {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
             }
         })
     }

    return (
        <>
            <ul>
                {users.map((obj) => (
                    <li key={obj.id}>
                        {obj.name}
                    </li>
                ))}
            </ul>
            <button onClick={getUsers}>Получить список пользователей</button>

            <hr/>
            <br/>
            <div>
                <h4>Создать пользователя:</h4>
                <input id="email" type="text" placeholder="Email" />
                <input id="username" type="text" placeholder="Имя" />
                <button onClick={createUsers}>Добавить</button>
            </div>
        </>
    );
}

export default App;