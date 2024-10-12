import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState<TelegramWebAppUser | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const { WebApp } = window.Telegram;
      WebApp.ready();

      const user = WebApp.initDataUnsafe.user;
      if (user) {
        setUserData(user);
      }

      WebApp.MainButton.text = "Click Me!";
      WebApp.MainButton.show();
      WebApp.MainButton.onClick(() => {
        WebApp.sendData("Button clicked!");
      });
    }
  }, []);

  return (
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
  );
}

export default App;