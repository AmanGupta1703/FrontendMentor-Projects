import { useState } from "react";
import { Notification } from "./ui";
import { notifications } from "./data";

function App() {
  const [notificationsData, setNotificationsData] = useState(notifications);

  function handleMarkAllAsRead() {
    setNotificationsData((prevNotificationsData) => {
      const updatedData = prevNotificationsData.map((curr) => ({
        ...curr,
        status: "read",
      }));
      return updatedData;
    });
  }

  return (
    <main className="min-h-screen bg-light-sky-blue font-Plus_Jakarta_Sans md:flex md:items-center md:justify-center">
      <div className="wrapper">
        <Notification
          notifications={notificationsData}
          onMarkAllAsRead={handleMarkAllAsRead}
        />
      </div>
    </main>
  );
}

export default App;
