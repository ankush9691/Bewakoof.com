import {Link as ReactRouterLink} from "react-router-dom"
import { Heading,Box, Flex,Image, Button } from "@chakra-ui/react"
import { useState } from "react"



    

export default function Home(){
    const [startIndex, setStartIndex] = useState(0);
    const images = [
        {
            id:1,
            image:"https://images.bewakoof.com/uploads/grid/app/Grab-Summer-Trio-Common-1x1-HC-Banner-1717134876.jpg"
        },
        {
            id:2,
            image:"https://images.bewakoof.com/uploads/grid/app/HC---1X1-OOF-common--3--1717402673.jpg"
        },
        {
            id:3,
            image:"https://images.bewakoof.com/uploads/grid/app/HC---1X1-2-ezgif-com-optimize--1--1717780638.gif"
        },
        {
            id:4,
            image:"https://images.bewakoof.com/uploads/grid/app/OOFSALE-1X1-common-endssoon-1717778099.gif"
        },
        {
            id:5,
            image:"https://images.bewakoof.com/uploads/grid/app/X1-Sneakers-Launch-nasa--1--1717775664.jpg"
        },
        {
            id:6,
            image:"https://images.bewakoof.com/uploads/grid/app/HC---1X1---499---common-1717489255.jpg"
        }

    ]
    
    const totalImages = images.length;
  const endIndex = Math.min(startIndex + 2, totalImages - 1);

  const goToPrev = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const goToNext = () => {
    setStartIndex(Math.min(startIndex + 1, totalImages - 4));
  };

    return (
        <Box >
     <Flex>
        
     {images.slice(startIndex, endIndex + 1).map(images => (
      <Box key={images.id}>
        <Image w="500px" h="500px" src={images.image} alt={images.name} />
      </Box>
      ))}
      </Flex>
      <Flex justify="space-around">
      <Button onClick={goToPrev} disabled={startIndex === 0}>Previous</Button>
      <Button onClick={goToNext} disabled={startIndex === totalImages - 3}>Next</Button>
    </Flex>
    <Box>
        <Image src="https://images.bewakoof.com/uploads/grid/app/thin-banner-deskktop-nasa-launch--1--1717775498.jpg"/>
    </Box>
    <Flex>
    <Box >
        <ReactRouterLink to="/overt">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/classictshirt">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/printedtshirt">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/joggers">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/jeans">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
    </Flex>
    <Flex>
    <Box >
        <ReactRouterLink to="/wovertshirt">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/wclassictshirt">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/wcasualjeans">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-1715752951.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/wjogger">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg" alt="Logo"  />
        </ReactRouterLink>
      </Box>
      <Box >
        <ReactRouterLink to="/wcargos">
          <Image w="270px" h="350px" src="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp" alt="Logo"  />
        </ReactRouterLink>
      </Box>
    </Flex>
    </Box>
    

    )
}