import Logo from "./ui/Logo";

const Layout = ({ children }) => {
  return (
    <div
      className="
        flex flex-col mx-auto h-[100vh]
        max-w-[1012px] [@media(pointer:coarse)]:max-w-[500px]
        py-[16px] [@media(pointer:coarse)]:py-[12px]
        px-[16px] [@media(pointer:coarse)]:px-[12px]
        items-center 
      
      "
      // border-[1px] border-red-500
    >
      <Logo />
      {children}
    </div>
  );
};

export default Layout;
