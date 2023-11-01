// import "./styles.css";
// import "leaflet/dist/leaflet.css";
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
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'
//   import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// // import PlacesAutocomplete, {
// //   geocodeByAddress,
// //   getLatLng,
// // } from 'react-places-autocomplete';
// import { Icon, divIcon, point } from "leaflet";

// import { useRef, useState } from "react";
// const customIcon = new Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   // iconUrl: require("./icons/placeholder.png"),
//   iconSize: [38, 38] // size of the icon
// });

// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true)
//   });
// };

// // markers
// const markers = [
//   {
//     geocode: [48.86, 2.3522],
//     popUp: "Hello, I am pop up 1"
//   },
//   {
//     geocode: [48.85, 2.3522],
//     popUp: "Hello, I am pop up 2"
//   },
//   {
//     geocode: [48.855, 2.34],
//     popUp: "Hello, I am pop up 3"
//   }
// ];

// export default function App() {
 
  
 

//   return (
//     <>
//        <Flex
//       position='relative'
//       flexDirection='column'
//       alignItems='center'
//       h='100vh'
//       w='100vw'
//     >
//        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
//        <MapContainer  style={{height:'100%', width:'100%'}}  center={[48.8566, 2.3522]} zoom={13}>
        
//         <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
//       />
   
      
//       <MarkerClusterGroup
//         chunkedLoading
//         iconCreateFunction={createClusterCustomIcon}
//       >
//         {markers.map((marker) => (
//           <Marker position={marker.geocode} icon={customIcon}>
//             <Popup>{marker.popUp}</Popup>
//           </Marker>
//         ))}

      
//       </MarkerClusterGroup>
//     </MapContainer>
        
//        </Box>

//        <Box
//         p={4}
//         borderRadius='lg'
//         m={4}
//         bgColor='white'
//         shadow='base'
//         minW='container.md'
//         zIndex='modal'
//       >
//        <HStack spacing={4}>
//         <Input type="text" placeholder="Origin" />
       
//         <Input type="text" placeholder="Destination" />
//         <ButtonGroup>
//           <Button colorScheme="pink" type="submit">
//             Calculate Route
//           </Button>
//           <IconButton
//              aria-label='center back'
//              icon={<FaTimes />}

//           />
//         </ButtonGroup>
//         </HStack> 
//         <HStack spacing={4} mt={4} justifyContent='space-between'>
//           <Text>Distance:   </Text>
//           <Text>Duration:  </Text>
//           <IconButton
//             aria-label='center back'
//             icon={<FaLocationArrow />}
//             isRound
           
//           />
//         </HStack>
//       </Box>
//     {/* <div >
//     <PlacesAutocomplete
      
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div> */}
    
//     </Flex>

//     </>
//   );
// }





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
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useRef, useState } from 'react'

// const center = { lat: 48.8584, lng: 2.2945 }

// function App() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ['places'],
//   })

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null))
//   const [directionsResponse, setDirectionsResponse] = useState(null)
//   const [distance, setDistance] = useState('')
//   const [duration, setDuration] = useState('')

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef()
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef()

//   if (!isLoaded) {
//     return <SkeletonText />
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === '' || destiantionRef.current.value === '') {
//       return
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService()
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     setDirectionsResponse(results)
//     setDistance(results.routes[0].legs[0].distance.text)
//     setDuration(results.routes[0].legs[0].duration.text)
//   }

//   function clearRoute() {
//     setDirectionsResponse(null)
//     setDistance('')
//     setDuration('')
//     originRef.current.value = ''
//     destiantionRef.current.value = ''
//   }

//   return (
//     <Flex
//       position='relative'
//       flexDirection='column'
//       alignItems='center'
//       h='100vh'
//       w='100vw'
//     >
//       <Box position='absolute' left={0} top={0} h='100%' w='100%'>
//         {/* Google Map Box */}
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: '100%', height: '100%' }}
//           // options={{
//           //   zoomControl: false,
//           //   streetViewControl: false,
//           //   mapTypeControl: false,
//           //   fullscreenControl: false,
//           // }}
//           onLoad={map => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </Box>
//       <Box
//         p={4}
//         borderRadius='lg'
//         m={4}
//         bgColor='white'
//         shadow='base'
//         minW='container.md'
//         zIndex='1'
//       >
//         <HStack spacing={2} justifyContent='space-between'>
//           <Box flexGrow={1}>
//             <Autocomplete>
//               <Input type='text' placeholder='Origin' ref={originRef} />
//             </Autocomplete>
//           </Box>
//           <Box flexGrow={1}>
//             <Autocomplete>
//               <Input
//                 type='text'
//                 placeholder='Destination'
//                 ref={destiantionRef}
//               />
//             </Autocomplete>
//           </Box>

//           <ButtonGroup>
//             <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
//               Calculate Route
//             </Button>
//             <IconButton
//               aria-label='center back'
//               icon={<FaTimes />}
//               onClick={clearRoute}
//             />
//           </ButtonGroup>
//         </HStack>
//         <HStack spacing={4} mt={4} justifyContent='space-between'>
//           <Text>Distance: {distance} </Text>
//           <Text>Duration: {duration} </Text>
//           <IconButton
//             aria-label='center back'
//             icon={<FaLocationArrow />}
//             isRound
//             onClick={() => {
//               map.panTo(center)
//               map.setZoom(15)
//             }}
//           />
//         </HStack>
//       </Box>
//     </Flex>
//   )
// }

// export default App






// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// import 'leaflet/dist/leaflet.css';
// import './App.css';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = () => {
//     // You would typically use a geocoding service here to convert the search term into coordinates
//     // For this example, we're just using a hardcoded location
//     setSearchResult({ lat: 51.505, lng: -0.09 });
//   };

//   return (
//     <div className="App">
//       <h1>Map App</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a place"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {searchResult && (
//           <Marker position={[searchResult.lat, searchResult.lng]}>
//             <Popup>Search Result</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import './App.css';
// import GoogleMaps from './Map';
// import PlacesAutocomplete from './PlacesAutoomplete';
// import Routing from './Routing';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Google Maps Integration</h1>
//       <div className="map-container">
//         <GoogleMaps />
//       </div>
//       <div className="search-container">
//         <PlacesAutocomplete />
//       </div>
//       <div className="routing-container">
//         <Routing />
//       </div>
//     </div>
//   );
// }

// export default App;




import React,{useState} from 'react'
import SearchBox from './SearchBox'
import Maps from './Map'
const App = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  return (
    <div       
     style={{
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100vh",
    }}
>
    <div style={{width:"25vw"}}>
            <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>  
          </div>
       <div style={{width:"75vw",height:"100%"}}>
          <Maps selectPosition={selectPosition}/>
       </div>
      
    </div>
  )
}

export default App