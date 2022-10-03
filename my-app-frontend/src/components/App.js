import CreateNew from './CreateNew';
import FinalDecision from './FinalDecision';
import ListOptions from './ListOptions';
import Header from './Header';
import DecisionList from './DecisionList';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// this is all just a "mockup" or skeleton of our page
// *im not sure how to make our pages only include minimal components.. i think that will happen in routing?
// * actually im pretty sure we jus move the components around to wherever we need them...
// Header may exisit in navbar or vis versa
// in all componenets youll see export default {component_name}.. i beleive this syntax will work

function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/new" element={<CreateNew />}></Route>
        <Route path="/dec-list" element={<DecisionList />}></Route>
        <Route path="/final" element={<FinalDecision />}></Route>
        <Route path="/list-opt" element={<ListOptions />}></Route>
      </Routes>

    </BrowserRouter>
    );
}

export default App;