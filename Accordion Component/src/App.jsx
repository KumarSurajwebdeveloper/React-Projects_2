import './App.css'
import Accordion from './Component/Accordion'
import SectionData from './Component/SectionData';

const App = () => {
  const sections = SectionData(); // Call SectionData to get the sections array

  return (
    <div>
      <h1 >Lorem Ipsum</h1>
      <h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h3>
      <h5 >"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
      <Accordion sections={sections} />
    </div >
  );
};

export default App;
