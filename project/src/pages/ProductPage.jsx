import { useParams } from "react-router-dom";
import { Heading,Box,Image,Text, Button,useToast,Spinner} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductPage(){
   
    const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [err, setErr] = useState(false);
  const {id} = useParams()
  const [alert,setAlert ] = useState(true)
  const toast = useToast()

 const addCard = ()=>{
  setAlert((prev)=> alert?prev = false: prev)
    toast({
      title: `${alert? "Item added":"Item already added" }`,
      status: `${alert?"success":"error"}`,
      duration: 9000,
      position:  "top",
      isClosable: true,
    })
 }

  async function fetchData(product_id) {
    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: `https://project-2-oeyt.onrender.com/product/${product_id}`,
      });

      setProduct(res?.data);
      setLoading(false);
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(id);
  }, [id]);

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
    return <Heading>something went wrong</Heading>;
  }
// const {title} = product
    return(
    
        <Box m="auto" w={300}>
       <Image src={product.image}/>
       <Text>{product.title}</Text>
       <Text as="b">{product.price}</Text>
       <Text>{product.catagories}</Text>
       <Button onClick={addCard}>
      Add to Cart
    </Button>
        </Box>
       

    )
}