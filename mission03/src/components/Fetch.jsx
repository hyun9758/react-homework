import {useState, useEffect} from "react";

const API= 'https://jfam.pockethost.io/api/collections/program_thumbnail/records'


export default function Fetch(){

    const [data, setData] = useState(null);
  
    const requestData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setData(data.items))
        .then(() => console.log(data))
        .catch((error) => console.error(error));
    };
  
    useEffect(()=>{
      requestData();
      },[]
    );
  
    return(
      <div>
  
      </div>
    );
}