
import './App.css';
import MainPage from './Pages/MainPage/Main';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

import {  createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/" element={(
      <MainPage/>
      )}
      />

      <Route path="/services" element={(
        <Services/>
    
      )} />
       <Route path="/about" element={(
        <About/>
    
      )} />
       <Route path="/contact" element={(
        <Contact/>
    
      )} />

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
  return <RouterProvider router={router}/>;
}

export default App;
