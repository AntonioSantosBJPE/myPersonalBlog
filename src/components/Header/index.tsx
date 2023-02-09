import { Link, Outlet } from "react-router-dom";
interface IHeaderProps {}
export const Header = ({}: IHeaderProps) => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
