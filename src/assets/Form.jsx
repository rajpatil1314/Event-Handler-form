

import { useState } from "react"

function  Form()
{

    const [name , setname]=useState("")
    const [email,setemail]  =  useState ("")
    const [password ,setpassword ] = useState ("")
    const [gender,setgender] = useState ("")
    const [set,setmarried] = useState ("")
    const [city , setcity] = useState("")

  

    const handclick = (e) => {
        e.preventDefault();
        let student = {
            name: name,
            email: email,
            password: password,
            gender :gender,
            city : city,
            married : set,
            
        }
        localStorage.setItem('employee',JSON.stringify(student))
        console.log(student);
        setname('');
      
      };
    return(

       <form action="" onSubmit={handclick} style={{backgroundColor : 'black' , color : '#e8d02f' , height  : '600px' , margin : '30px , 0px' , fontSize : '20px'}}>
         <h1 style={{ padding : '20px 0px'}}>MY FORM</h1>


         name : <input style={{ padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}  value={name}/>
        <br></br>
       
       Email : <input style={{ padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}  value={email}/>
        <br/>
       Password: <input style={{marginRight : '30px' , padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
       <br/>
       
       male <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
       female <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 

        <select name="" id="" style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}}  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="mumbai">ahmedabad</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
      </select><br/>
        <br/>
        married : <input type="radio"  style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}}  name="married" onChange={(e)=>setmarried(e.target.value)}  value={"married"}/>
        ismarried : <input type="radio" style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} name="married" onChange={(e)=>setmarried(e.target.value)} value={"unmarried"} />    
             <br/>
        <button type="submit"  style={{padding : '6px 10px' , margin : '10px 0px' , fontSize : '20px'}} onClick={handclick}>Submit</button>
       </form>
   
    )
}
export default Form