import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar fluid>
      <Link to={"/"}>
        <h2 className="dark:text-white font-extrabold">Jobs</h2>
      </Link>
      <ul className="dark:text-white font-bold flex gap-5">
        <Link to={"/addcompany"}>
          <li>Add Company</li>
        </Link>
        <Link to={"/addjob"}>
          <li>Add Jobs</li>
        </Link>
        <Link to={"/companies"}>
          <li>Companies</li>
        </Link>
      </ul>
      <div className="flex">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </div>
    </Navbar>
  );
}
