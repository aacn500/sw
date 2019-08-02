import React from 'react';

const Alternatives = ({ data }) => {
  if (!data || !data.length)
    return <p>There wasn't any data found for this, sorry!</p>

  return (
    <ul>
      {data.map(word => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  )
}

export default Alternatives;
