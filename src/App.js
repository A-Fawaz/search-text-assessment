import './App.css';
import Table from './Table';
import { Users } from './users';
import React, { useState } from 'react';
function App() {
  const [query, setQuery] = useState("");
  const search = (data) =>{
    return data.filter((item) => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) ||item.email.toLowerCase().includes(query))
  }
  return (
    <div className="app">
      <input type='text'
       placeholder='search...'
        className="search"
        onChange={(e) => setQuery(e.target.value)}
        />
    <Table data={search(Users)} query={query}/>
    </div>
  );
}

export default App;
