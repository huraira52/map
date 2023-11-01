import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, OutlinedInput } from '@mui/material';

const NOMINATIM_BASE_URL="https://nominatim.openstreetmap.org/search?";
const params={
    q: "",
    format: "json",
    addressdetails: "addressdetails",
};

const SearchBox = (props) => {
    const { selectPosition, setSelectPosition } = props;
    const [searchText,setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
     <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <OutlinedInput
         style={{width: "100%"}}
          value={searchText}
           onChange={(event)=>{
            setSearchText(event.target.value);
           }}/>
      </div>   
      <div style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}>
         <Button variant='contained' color='primary' onClick={()=>{
            // Search
            const params={
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())zz
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("err: ", err))
         }}>
            Search
         </Button>
      </div>   
     </div>
     <div>
        <List  component="nav" aria-label="main mailbox folders">
          {
            listPlace.map((item) =>{
                return (
                    <div key={item?.place_id}>
                    <ListItem  
                        button
                        onClick={() => {
                            setSelectPosition(item);
                        }}>
                    <ListItemIcon>
                        <img src='./placeholder.png.png' alt='placeholder' style={{width: 38, height: 38}}/>
                    </ListItemIcon>
                    <ListItemText primary={item?.display_name}/>
                    </ListItem> 
                    <Divider/>
                    </div>
                );
            })
          }
          
        </List>
     </div>
    </div>
  )
}

export default SearchBox



// import React from 'react'
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
//   List,
//   ListItem,
//   ListIcon,
//   OrderedList,
//   UnorderedList,
// } from '@chakra-ui/react'
// const SearchBox = () => {
//   return (
//     <Box
//         p={4}
//         borderRadius='lg'
//         m={4}
//         bgColor='white'
//         shadow='base'
//         zIndex='modal'
//       >
//        <HStack spacing={4}>
//         <Input type="text" placeholder="Origin" />
       
//         <ButtonGroup>
//           <Button colorScheme="pink" type="submit">
//             Search
//           </Button>
         
//         </ButtonGroup>
//         </HStack> 
      
//  <List spacing={3} >
//   <ListItem button>
//     <ListIcon><img src="./placeholder.png.png" alt='placeholder'/></ListIcon>
   
//   </ListItem>
  
// </List>
//       </Box>
//   )
// }

// export default SearchBox