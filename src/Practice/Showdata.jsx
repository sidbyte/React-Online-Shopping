import axios from 'axios';
import {useState} from "react";

const Showdata = () => {

   
    const [dataa,setDataa] = useState("");

    
    const handleData=()=>{
        
    axios.get("https://reactproductdatabase-default-rtdb.firebaseio.com/userDataRecords.json")
    .then((response)=>{
        const data = Object.values(response.data);
        setDataa(data)
        // console.log(dataa)   
    })
    .catch((errors)=>{console.log(errors)})

    }

   
    
  return (<>
  
  
        <button onClick={handleData}>click me</button>
        
        <div>
        {dataa ? <> {dataa.map((response,index)=>{
            return (
                <table className="ui celled table" key={index}>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td>{response.name}</td>
                    <td>{response.id}</td>
                    <td>{response.price}</td>
                    <td>{response.rating}</td>
                    <td><img src={response.image} alt="i" /></td>
                    
                     
                     
                    </tr>
                </tbody>
            </table>

            )
        })}</>: null}
        </div>
       <div>
        {/* <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=''/> */}
        {/* <img style={{height: "200px", width: "200px",}} src={require('./1.jpg').default} alt=''/> */}
        </div>
       
  </>);
};

export default Showdata;
