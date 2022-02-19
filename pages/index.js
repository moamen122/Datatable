
import TableMu from '../components/datatable/tableMu';
import { useState, useEffect } from 'react';
export default function Home() {
   const [data, setData] = useState([]);

 
  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => setData(json.results));
     

     
  }, []);
 
  return (
    <div>
      
      
      <div>
      
        <TableMu  data={data}  />
     
      </div>
      
    </div>
  );
}
