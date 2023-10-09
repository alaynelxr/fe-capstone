import MovePage from "./pages/MovePage";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AddMoveForm from "./pages/AddMove";
import AddListForm from "./pages/AddList";
import ListPage from "./pages/ListPage";
import AllListsPage from "./pages/AllListsPage";
import TestPage from "./pages/TestPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

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
