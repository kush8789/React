import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
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
    return(
        <Section title="Examples" id="examples">
        <Tabs ButtonsContainer="menu" button={<>
          <TabButton isSelected={selectedContent==='components'} onClick={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedContent==='jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedContent==='props'} onClick={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedContent==='state'} onClick={()=>handleSelect('state')}>State</TabButton>
          </>}>{tabContent}</Tabs>
      </Section>
    )
}