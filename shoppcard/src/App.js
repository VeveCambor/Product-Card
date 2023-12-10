import React from 'react';

// import UserProfileCard from './UserProfileCard';
import ProductCard from './ProductCard';

function App() {
  return (
    <>
      <ProductCard
        product={{
          id: 'pc123',
          imageSrc: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjI4NzI5fGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbXxoMWYvaGE0LzE2OTQyNDIzNzM2MzUwLnBuZ3wyODViOTZhNjc1OWMyMzgxNzAyZjk4ZTU2MGFkMGJiMTY1MDU4ZmI5ODYwODJhN2M3MDgyMDAyZDY0ODQ4YjU5',
          imageAlt: 'Lenovo 2 in 1 computer',
          pageTitle: 'LENOVO shop',
          title: 'ThinkPad X1 Yoga Gen 8',
          price: '53 490 CZK',
          inStock: true,
        }}
      />
    </>
  );
}

export default App;