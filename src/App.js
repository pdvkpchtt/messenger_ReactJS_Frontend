import NavHandler from "./components/NavHandler";
import Layout from "./shared/Layout";

import UserContext from "./components/AccountContext";
import socket from "./socket/socket";

function App() {
  socket.connect();

  return (
    <UserContext>
      <Layout>
        <NavHandler />
      </Layout>
    </UserContext>
  );
}

export default App;
