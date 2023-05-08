import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/genres/anime')
      .then(response => response.json())
      .then(data => setData(data.data));
  }, []);

  return (
    <div>
      {data.map(obj => (
        <label key={obj.mal_id}>{obj.name}</label>
      ))}
    </div>
  );
}