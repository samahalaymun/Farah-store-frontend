import React from 'react'

function ShopByCat({ categories }) {
  return (
    <div>
      <ul className='ps-0'>
        {
            categories.map((cat)=>(<li key={cat}>{cat}</li>))
        }
      </ul>
    </div>
  );
}

export default ShopByCat
