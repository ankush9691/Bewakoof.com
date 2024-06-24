import {Heading,Input,Button, VStack, Container} from "@chakra-ui/react"
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/Authcontext";


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const {login} = useContext(AuthContext)
  
  async function handelClick(){
    try{
      let res = await axios({
        method:"post",
        url:"https://users-9z3x.onrender.com/users",
        data:{
          email:email,
          password:password,
        }
      })
      login(res?.data?.token)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <Container>
    <VStack spacing={5}>
      <Heading as="h1" size="xl" >Login Page</Heading>
      <Input placeholder="Email" type="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <Input placeholder="Password"  value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <Button onClick={handelClick}>LOGIN</Button>
    </VStack>
    </Container>
  );
}