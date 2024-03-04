import axios from 'axios';
import React, { useState } from 'react'
import { object, string } from 'yup';
function SingUp() {

  const [user, setUser] = useState({
  
    userName: '',
    email: '',
    password: '',
    image: '',
  })

const [error ,setErrors]=useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  };

  const handelImageChange= (e)=>{
    const { name, files } = e.target;
    setUser({
    ...user,
    [name]:files[0],//هاد بحتوي على الصوره بحالها 
    });
  };
const vilidateData =async ()=>{
  const RegisterSchema=object({
    //بنكتب كل اشكال الداتا الي عنا ++ الشروط الي عليها 
    userName :string().min(5).max(20).required() ,
    email :string().email().required() ,
    password :string().min(8).max(20).required() ,
    image : string().required(),
  });
  try{
      // عمليه المطابقه بتوخد وقت لذلك 
  //بحط 
  //await
 await RegisterSchema.validate(user,{abortEarly:false}); 

 return true;
  }
  catch(errorl){
    setErrors(errorl.errors);
    return false;
    }

}

  const handelSubmit = async (e) => {
    e.preventDefault();
   
    const validat = await vilidateData();


const formData= new FormData();
formData.append('userName',user.userName);
formData.append('email',user.email);
formData.append('password',user.password);
formData.append('image',user.image);
 const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);

  console.log(data); 
};

  return (
    <>
  
      <form onSubmit={handelSubmit}>
        <label>userName</label>
        <input type="text" value={user.userName} name="userName" onChange={handelChange} />
        <p>{error[0]}</p>
        <label >email</label>
        <input type="email" value={user.email} name="email" onChange={handelChange} />
        <p>{error[1]}</p>
        <label> password</label>
        <input type="password" value={user.password} name="password" onChange={handelChange} />
        <p>{error[2]}</p>
        <label>image</label>

        <input type="file" name="image" onChange={handelImageChange} />
        <input type="submit" />
      </form>
    </>
  )
}

export default SingUp
