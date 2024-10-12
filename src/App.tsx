import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import WebApp from '@twa-dev/sdk'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Инициализация WebApp SDK
      const { WebApp } = window.Telegram;
      WebApp.ready();

      // Получение данных пользователя
      const user = WebApp.initDataUnsafe.user;
      setUserData(user);

      // Настройка внешнего вида WebApp
      WebApp.MainButton.text = "Click Me!";
      WebApp.MainButton.show();
    }
  }, []);
  return (
    <>
      <Button>Click me</Button>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>

      </div>
      <div>
        <h1>Telegram Mini App</h1>
        {userData ? (
          <div>
            <p>Username: {userData.username}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default App
