import MovePage from "./pages/MovePage";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import AddMoveForm from "./pages/AddMove";
// import AddListForm from "./pages/AddList";
import ListPage from "./pages/ListPage";
import AllListsPage from "./pages/AllListsPage";
import TestPage from "./pages/TestPage";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Report from "./pages/ReportPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moves" element={<Browse />} />
        <Route path="/lists" element={<AllListsPage />} />
        <Route path="/move/:id" element={<MovePage />} />
        <Route path="/list/:id" element={<ListPage />} />
        <Route path="/testing" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/moves/add" element={<AddMoveForm />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
  // return <Browse />;
  // return <MovePage />;
  // return <Cart />;
  // return <AddListForm />;
  // return <ListPage />;
  // return <AllListsPage />;
  // return <TestPage />;
};

export default App;
