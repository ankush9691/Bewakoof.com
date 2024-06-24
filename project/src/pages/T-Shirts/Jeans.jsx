import {Link as ReactRouterLink} from "react-router-dom"
import { Heading,Image,Grid,Box,Text,Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Jeans(){
    const [menjeans,setMenjeans] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    async function fetchdata(){
        setLoading(true)
        try{
            const res = await axios({
                method:"get",
                url:"https://project-2-oeyt.onrender.com/product"
            })
            const menjeans = res?.data?.filter(product => product.catagories === "Men's Jeans")
            setMenjeans(menjeans)
            setLoading(false)
        }catch(err){
            setErr(true)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    if (loading) {
        return (<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />)
      }
    
      if (err) {
        return <Heading>something went wrong....</Heading>;
      }

        return (
          <Box >
            <Heading>Men's Jeans</Heading>
            <Grid templateColumns="repeat(2,1fr)" gap={5}>
              {menjeans.map(product => (
                <Box key={product.id}>
                  <ReactRouterLink to={`/product/${product.id}`}>
                    <Image  src={product.image}/>
                  <Text >{product.title}</Text>
                  <Text as="b">{product.price}</Text>
                  <Text>{product.catagories}</Text>
                  </ReactRouterLink>
                </Box>
              ))}
            </Grid>
           </Box>
        );
      };
      
