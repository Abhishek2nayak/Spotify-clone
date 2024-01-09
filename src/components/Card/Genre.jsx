import React from 'react';
const bg_color = ["#8A2BE2","#C71585","	#DC143C","#FFA500","#00FF00","#20B2AA","#BC8F8F","#008080"]
const Genre = () => {

function generateRandomColor() {
 return  bg_color[Math.floor(Math.random() * bg_color.length)];
}
  return (
    <>
    <div class='genre-card' style={{ backgroundColor : generateRandomColor()}}>
      <h1>Heading</h1>
      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    <div class='genre-card' style={{ backgroundColor : generateRandomColor()}}>
      <h1>Heading</h1>
      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    <div class='genre-card' style={{ backgroundColor : generateRandomColor()}}>
      <h1>Heading</h1>
      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    </>
  );
}

export default Genre;
