import { Flex,Box,UnorderedList,ListItem,Text, Input } from "@chakra-ui/react"



export default function Footer(){

    return(
<Flex paddingTop="150px" justify="space-evenly" bg="black">
    <Box>
    <Text color="yellow">CUSTOMER SERVICE</Text>
        <br/>
<UnorderedList color="white">
  <ListItem>Contact Us</ListItem>
  <ListItem>Track Order</ListItem>
  <ListItem>Return Order</ListItem>
  <ListItem>Cancel Order</ListItem>
</UnorderedList>
</Box>
    <Box>
    <Text color="yellow">COMPANY</Text>
        <br/>
<UnorderedList color="white">
  <ListItem>About Us</ListItem>
  <ListItem>We're Hiring</ListItem>
  <ListItem>Term & Conditions</ListItem>
  <ListItem>Privacy Policy</ListItem>
  <ListItem>Blog</ListItem>
</UnorderedList>
    </Box>
    <Box>
    <Text color="yellow">CONNECT WITH US</Text>
        <br/>
<UnorderedList color="white">
  <ListItem>4.7M People Like this on Facebook</ListItem>
  <ListItem>1M Followers on Instagam</ListItem>
</UnorderedList>
    </Box>
    <Box>
    <Text color="yellow">KEEP UP TO DATE</Text>
        <br/>
<UnorderedList color="white">
 <Input placeholder="Enter Email Id"/>
</UnorderedList>
    </Box>
</Flex>

    )
}