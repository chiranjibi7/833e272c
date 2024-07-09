import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import {ActivityDetail, ActivityFeed, ArchiveList} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Home page route */}
          <Route index element={<ActivityFeed/>} />
          <Route path="/archives" element={<ArchiveList/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
