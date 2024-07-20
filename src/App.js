import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import AddJobs from "./Pages/AddJobs";
import AddCompany from "./Pages/AddCompany";
import Companies from "./Pages/Companies";
import JobDetails from "./Pages/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="addjob" element={<AddJobs />} />
        <Route path="addCompany" element={<AddCompany />} />
        <Route path="companies" element={<Companies />} />
        <Route path=":id" element={<JobDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
