import React, { useEffect, useState} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";



function Veri() {
 const[categoryId,setCategoryId] = useState(1);
 const[kategori, setCategory] = useState([
 ]);
 useEffect(() =>{
   fetch("https://api.shareup.qa/api/v1/users")
   .then(responses =>responses.json())
   .then(data => setCategory(data));
 },[])

  return (
    <div>   <ListGroup>
    {kategori.map((kategori) => (
      <ListGroupItem onClick={()=> setCategoryId(kategori.id)} key={kategori.id}>
        {kategori.firstName}
        {kategori.lastName}
        {kategori.hometown}
        {kategori.currenttown}
      </ListGroupItem>
    ))}
  </ListGroup></div>
   
  )
}

export default Veri