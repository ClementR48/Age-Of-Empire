import React from 'react';
import Header from '../components/Header';

const Acceuil = ({ loadData, items, isLoaded }) => {
  
  return (
    <div className="acceuil">
      <Header />
        {isLoaded && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
      <ul>
        {items.map((item) => 
          <li key={item.name}>{item.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Acceuil;