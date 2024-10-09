/** @format */

import { useEffect, useState } from "react";

import io from "socket.io-client";
const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send-Message", { message: message });
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessageReceived(data.message);
    });
  });

  return (
    <div className="App">
      <input placeholder="message ..." onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>send message</button>
      <br />
      <h1>Message:{messageReceived}</h1>
    </div>
  );
}

export default App;
