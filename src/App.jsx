import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import {ActivityFeed, ArchiveList,ActivityDetail} from "./pages";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<ActivityFeed/>} />
          <Route path="/archives" element={<ArchiveList/>} />
          <Route path="/:id" element={<ActivityDetail/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
