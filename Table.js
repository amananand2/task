import logo from './logo.svg';
import './Table.css';
import {useState} from "react";
import {connect} from 'react-redux';
import {formSubmitStart} from "./action";

const Table=({formSubmitStart,count})=> {

    const [isEditable,setEditable]= useState(false);
    const [isIndex,setIndex]= useState(0);
    const[formFields,setFormFields] = useState({firstname:"",lastname:"",dob:"" })

    const onChange=(e)=>{
        setFormFields({...formFields,[e.target.name]:e.target.value})
 }

  const data=[
    {
      status:"active",
      firstname:"aman",
      lastname:"anand",
      dob:"02/12/1996"
    },
    {
      status:"not",
      firstname:"prem",
      lastname:"kumar",
      dob:"02/12/1997"
    }
  ]

  console.log(count,"count");
  return (
    <div className="App">
     <h1>User Table</h1>
    
<table>
  <tr>
  <th>Status</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>DOB</th>
    <th>Action</th>
  </tr>
    {data.map((value,index)=>{
      return(
        <>
  <tr>
        <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled={isEditable ? "false":"true"}/></td> 
    <td>{!isEditable && value.firstname}
    {isEditable && index==isIndex && <input type="text" id="name" name="firstname" onChange={(e)=>onChange(e)} />}
    </td>
    <td>{ !isEditable && value.lastname}
    {isEditable && index==isIndex && <input type="text" id="name" name="lastname" onChange={(e)=>onChange(e)} />}
    </td>
      
    <td>{!isEditable && value.dob}
    {isEditable && index==isIndex && <input type="text" id="name" name="dob" onChange={(e)=>onChange(e)} />}
    </td>
    <td>
      <button onClick={()=>{
        setIndex(index)
        setEditable(!isEditable);
        if(isEditable){
        // formSubmitStart(formFields)
        data[isIndex]=formFields
        }
      }}>{isEditable && index==isIndex ? "Save" :"Edit"}</button></td>
  </tr>
        </>
      )
    })}
 
  {/* <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr> */}
</table>



    </div>
  );
}
const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = (dispatch) => ({
  formSubmitStart : (values) => dispatch(formSubmitStart(values))
});


export default connect(mapStateToProps,mapDispatchToProps)(Table);
