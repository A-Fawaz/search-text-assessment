import './App.css';
import Table from './Articles';
import { Articles } from './articleData';
import React, { useState } from 'react';
function App() {
  const [query, setQuery] = useState("");
  const search = (data) =>{
    return data.filter((item) => item.title.toLowerCase().includes(query) || item.date.toLowerCase().includes(query) ||item.description.toLowerCase().includes(query))
  }
  return (
    <div className="app">
      <input type='text'
       placeholder='search...'
        className="search"
        onChange={(e) => setQuery(e.target.value)}
        />
    <Table data={search(Articles)} query={query}/>
    </div>
  );
}

export default App;
