import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Registration from "./components/Auth/Registration";
import Mypage from "./components/Auth/Mypage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/mypage" element={<Mypage />} />

      <Route
        path="/"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />

      <Route
        path="/services"
        element={
          <Layout>
            <Services />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
    </>
  )
);

// function App() {
//   return (
//     <div>
//       <ExpensesScreen/>
//     </div>

//   );
// }

function App() {
  return <RouterProvider router={router} />;
}

export default App;
