import { Navbar } from "./Navbar";

export const Page = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
