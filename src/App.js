import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Routes>
        <Route path="/data" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Fragment>
  );
}

export default App;
