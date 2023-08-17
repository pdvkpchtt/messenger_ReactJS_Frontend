import NavHandler from "./components/NavHandler";
import Layout from "./shared/Layout";

import UserContext from "./components/AccountContext";

function App() {
  return (
    <UserContext>
      <Layout>
        <NavHandler />
      </Layout>
    </UserContext>
  );
}

export default App;
