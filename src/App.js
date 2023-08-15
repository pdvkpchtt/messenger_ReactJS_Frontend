import { useState } from "react";
import Layout from "./shared/Layout";
import TextHead from "./shared/Text/TextHead";
import CustomButton from "./shared/ui/CustomButton";
import CustomInput from "./shared/ui/CustomInput";

function App() {
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  return (
    <Layout>
      <div className="flex flex-col my-auto items-center gap-[16px] bg-[#222222] rounded-[35px] w-full [@media(hover)]:max-w-[500px] p-[16px] border-y-[20px] border-[#604ae6]">
        <CustomInput
          value={loginState}
          onChange={(value) => setLoginState(value)}
          head="Enter username:"
          placeholder="Username"
          maxLength={10}
        />
        <CustomInput
          value={passwordState}
          onChange={(value) => setPasswordState(value)}
          head="Enter password:"
          placeholder="Password"
          password
          maxLength={10}
        />
        <CustomButton text="Create account" />
        <TextHead text="Already have an account?" />
        <CustomButton text="LogIn" onPress={() => console.log("ass")} />
      </div>
    </Layout>
  );
}

export default App;
