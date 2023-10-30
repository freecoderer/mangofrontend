// import React, { useEffect } from 'react';

// interface GoogleMapProps {
//   apiKey: string;
// }

// const Map: React.FC<GoogleMapProps> = ({ apiKey }) => {
//   useEffect(() => {
//     const loadGoogleMap = () => {
//       if (!window.google) {
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//         script.async = true;
//         script.defer = true;
//         script.onload = initMap;
//         document.head.appendChild(script);
//       }
//     };

//     const initMap = () => {
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//       });
//     };

//     loadGoogleMap();
//   }, [apiKey]);

//   return (
//     <div>
//       <h3>My Google Maps Demo</h3>
//       <div id="map" style={{ height: '400px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default Map;

export {}