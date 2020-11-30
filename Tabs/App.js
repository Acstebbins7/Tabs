import 'bootstrap/dist/css/bootstrap.min.css';
import TabHeader from './components/TabHeader.js';
import './App.css';
import {useState} from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: false,
      title: "1st Tab",
      content: "Content from Tab 0"
    },
    {
      selected: true,
      title: "2nd Tab",
      content: "Content from Tab 1"
    },
    {
      selected: false,
      title: "3rd Tab",
      content: "Content from Tab 2"
    },
    {
      selected: true,
      title: "4th Tab",
      content: "Content from Tab 3"
    },
    {
      selected: false,
      title: "5th Tab",
      content: "Content from Tab 4"
    }
  ])  
  
  const handleClick = (clickedIndex) => {
    console.log(`you clicked tab # ${clickedIndex}`);
    // Set Tabs
    // Include all the tabs before the index of the clicked one, set to false
    // Include tab we clicked on set to true
    // Include all the tabs after the one we clicked on, set to false
    tabs.map((tab,i) => {
      let t =tab;
      if(clickedIndex === i){
        t.selected = true;
      }
      else{
        t.selected = false;
      }
      
      setTabs([...tabs.slice(0,i),
      t,
      ].concat(tabs.slice(i+1)))
    })
  }


  return (
    <div className="App">
      {/* <TabHeader selected={false} index={1} title="1st Tab"/>
      <TabHeader selected={false} index={2} title="2nd Tab"/>
      <TabHeader selected={true} index={3} title="3rd Tab"/> */}
      {
        tabs.map((tab, i) => {
          return <TabHeader selected={tab.selected} index={i} title={tab.title} handleClick={handleClick}/>
        })
      }

      {
        tabs.map((tab, i) => {
          return tab.selected ? <p>{tab.content}</p> : ""
        })
      }
    </div>
  );
}
export default App;
