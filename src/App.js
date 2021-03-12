import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DataTab from './components/DataTab';
import { useState } from 'react';
import AddModal from './components/AddModal';

//SAMPLE DATA CREATION

function createData(name, cases, region, access) {
  return { name, cases, region, access };
}

var rows = [
  createData("James Leiper", "16", "HRM", "User"),
  createData("John Underhill", "15", "HRM", "User"),
  createData("Robert Smith", "17", "HRM", "User"),
  createData("Samantha Rogan", "18", "HRM", "User"),
  createData("Bill Rowe", "15", "HRM", "Admin"),
  createData("Jessica Worthington", "Archived", "HRM", ""),
];

///////////////////////

function App() {
  const [searchval, setsearchval] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let addData = (name, cases, region, access) => rows.push({"name":name, "cases":cases, "region":region, "access":access });

  return (
    <div className="App">
      <Header/>
      <div className="App-Body">
        <SearchBar handleShow={handleShow} getVal={val => setsearchval(val)}/>
        <DataTab rows={rows} filter={searchval}/>
      </div>
      <AddModal show={show} addData={addData} handleClose={handleClose}/>
    </div>
  );
}

export default App;
