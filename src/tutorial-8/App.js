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
        </>
    );
}

export default App;