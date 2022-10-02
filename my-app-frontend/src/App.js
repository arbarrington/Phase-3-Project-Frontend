import './App.css';
import CreateNew from './components/CreateNew';
import FinalDecision from './components/FInalDecision';


// this is all just a "mockup" or skeleton of our page
// im not sure how to make our pages only include minimal components.. i think that will happen in routing?


function App() {
  return (
    <div className="App">
      <Header />
      <CreateNew />
      <DecisionList />
      <NavBar />
      <FinalDecision />

    </div>
  );
}

export default App;
