import { useState } from 'react';
import { CORE_CONCEPTS,EXAMPLES } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
const [selectedContent, setSelectedContent] = useState();
function handleSelect(selectedButton){
  setSelectedContent(selectedButton);
  // console.log(selectedContent);
}
let tabContent=<p>select a topic.</p>;

if(selectedContent)
  {
    tabContent=(
      <div id="tab-content">
          <h3>{EXAMPLES[selectedContent].title}</h3>
          <p>{EXAMPLES[selectedContent].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedContent].code}
            </code>
          </pre>
      </div>
    );
  }
return (
  <div>
    <Header />
    <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* <CoreConcept
          image={CORE_CONCEPTS[0].image}
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
        />
        <CoreConcept
          image={CORE_CONCEPTS[1].image}
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
        />
        <CoreConcept
          image={CORE_CONCEPTS[2].image}
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
        />
        <CoreConcept
          image={CORE_CONCEPTS[3].image}
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description} /> */}
          {/* <CoreConcept {...CORE_CONCEPTS[0] /}> */}
        {/* {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)} */}
        {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept} />)}
      </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedContent==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedContent==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedContent==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedContent==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  </div>
);
}

export default App;