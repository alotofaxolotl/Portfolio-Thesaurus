import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';

function App() {
  const [words, setWords] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const searchHandler = (searchTerm) => {
    const URL = `https://api.datamuse.com/words?rel_syn=${searchTerm}`;
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setWords(res);
        setShowMore(false);
      });
  };

  const showMoreHandler = () => {
    setShowMore(true);
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchHandler} />
      <ResultList showMore={showMore} words={words} onShowMore={showMoreHandler}/>
    </div>
  );
}

export default App;
