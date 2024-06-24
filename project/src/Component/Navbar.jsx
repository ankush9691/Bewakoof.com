import {Link as ReactRouterLink} from "react-router-dom"
import { Link as ChakraLink,Flex, Button,Image, Input,Box,Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../../Context/Authcontext"
// import Login from "../pages/Login"
const Links = [
    {
        to:"/login",
        lable:"Login",
    },
   
   

]

export default function Navbar(){
    const {logout} = useContext(AuthContext)
    return ( 
 <Flex 
 justify="space-between">
<Flex w="45%"
align="Center"
p={4}
justify="space-evenly"
paddingLeft={100}
// border="1px solid black"
> 
    <Box >
        <ReactRouterLink to="/">
          <Image w={250} src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Logo" height="50px" />
        </ReactRouterLink>
      </Box>
        <Text size="l">MEN</Text>
        <Text size="l">WOMEN</Text>
        <Text size="l">MOBILE COVER</Text>
</Flex>
<Flex 
w="45%"
align="Center"
p={4}
justify="space-evenly"
paddingRight={100}
// border="1px solid black"
>
    <Input placeholder="Search Product Here" w="350px"/>
   {Links?.map((Link)=>(
  <ChakraLink as={ReactRouterLink} 
  to={Link.to} key={Link.to}>
    {Link.lable}</ChakraLink>
   ))}
    <Button onClick={logout}>LOGOUT</Button>
</Flex>
</Flex>
    )
}