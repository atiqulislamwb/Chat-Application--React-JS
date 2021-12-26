import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";

const projectID = "b986e973-bc6f-4304-8d50-54648682f45a";
function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID={projectID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
