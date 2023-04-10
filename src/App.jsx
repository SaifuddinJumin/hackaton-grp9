import ProjectsPage from "./pages/ProjectsPage";
import TaskPage from "./pages/TaskPage";
import TasksDashboard from "./pages/TasksDashboard";
import TasksDashboardMarketing from "./pages/TasksDashboardMarketing";
import TasksDashboardFinance from "./pages/TasksDashboardFinance";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">

      <Router>
        <Routes>
          <Route path="/" element={<ProjectsPage/>}/>

          <Route path="/taskdashboard1" element={<TasksDashboard/>}/>
          <Route path="/taskdashboard2" element={<TasksDashboardMarketing/>}/>
          <Route path="/taskdashboard3" element={<TasksDashboardFinance/>}/>

          <Route path="/taskdashboard/taskpage" element={<TaskPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
