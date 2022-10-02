import './App.css';
import CreateNew from './components/CreateNew';
import FinalDecision from './components/FInalDecision';
import ListOptions from './components/ListOptions';
import Header from './components/Header';
import DecisionList from './components/DecisionList';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';


// this is all just a "mockup" or skeleton of our page
// *im not sure how to make our pages only include minimal components.. i think that will happen in routing?
// * actually im pretty sure we jus move the components around to wherever we need them...
// Header may exisit in navbar or vis versa
// in all componenets youll see export default {component_name}.. i beleive this syntax will work

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* no idea if these routes are correct */}
        <Route path="/" element={<Header />}></Route>
        <Route path="/new" element={<CreateNew />}></Route>
        <Route path="/dec-list" element={<DecisionList />}></Route>

        <NavBar />
        <FinalDecision />
        <ListOptions />
      </Routes>
    </BrowserRouter>
    );
}

export default App;