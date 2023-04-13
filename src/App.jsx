import ProjectsPage from "./pages/ProjectsPage";
import TaskPage from "./pages/TaskPage";
import TasksDashboardWeb from "./pages/TasksDashboardWeb";
import TasksDashboardGame from "./pages/TasksDashboardGame";
import TasksDashboardMarket from "./pages/TasksDashboardMarket";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPageWeb1 from "./pages/TaskPageWeb1";
import TaskPageWeb2 from "./pages/TaskPageWeb2";
import TaskPageWeb3 from "./pages/TaskPageWeb3";
import TaskPageWeb4 from "./pages/TaskPageWeb4";
import TaskPageGame1 from "./pages/TaskPageGame1";
import TaskPageGame2 from "./pages/TaskPageGame2";
import TaskPageGame3 from "./pages/TaskPageGame3";
import TaskPageMarket1 from "./pages/TaskPageMarket1";
import TaskPageMarket2 from "./pages/TaskPageMarket2";
import UserProfile from "./pages/UserProfilePage";
import "./App.css";
import TaskPageGame4 from "./pages/TaskPageGame4";

function App() {
  return (
    <div className="">

      <Router>
        <Routes>
          <Route path="/" element={<ProjectsPage/>}/>

          <Route path="/userprofile" element={<UserProfile/>}/>

          <Route path="/taskdashboard1" element={<TasksDashboardWeb/>}/>
          <Route path="/taskdashboard2" element={<TasksDashboardGame/>}/>
          <Route path="/taskdashboard3" element={<TasksDashboardMarket/>}/>

          <Route path="/taskdashboard/taskpage" element={<TaskPage/>}/>
          <Route path="/taskdashboard/taskpage/web1" element={<TaskPageWeb1/>}/>
          <Route path="/taskdashboard/taskpage/web2" element={<TaskPageWeb2/>}/>
          <Route path="/taskdashboard/taskpage/web3" element={<TaskPageWeb3/>}/>
          <Route path="/taskdashboard/taskpage/web4" element={<TaskPageWeb4/>}/>

          <Route path="/taskdashboard/taskpage/game1" element={<TaskPageGame1/>}/>
          <Route path="/taskdashboard/taskpage/game2" element={<TaskPageGame2/>}/>
          <Route path="/taskdashboard/taskpage/game3" element={<TaskPageGame3/>}/>
          <Route path="/taskdashboard/taskpage/game4" element={<TaskPageGame4/>}/>

          <Route path="/taskdashboard/taskpage/market1" element={<TaskPageMarket1/>}/>
          <Route path="/taskdashboard/taskpage/market2" element={<TaskPageMarket2/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
