interface TelegramWebAppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface TelegramWebApp {
  initDataUnsafe: {
    user?: TelegramWebAppUser;
  };
  MainButton: {
    text: string;
    show(): void;
    onClick(callback: () => void): void;
  };
  ready(): void;
  sendData(data: string): void;
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
