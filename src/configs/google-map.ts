export const mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ color: '#fefefe' }, { lightness: 20 }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ lightness: 20 }, { color: '#ececec' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { color: '#f0f0ef' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [{ visibility: 'on' }, { color: '#f0f0ef' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'on' }, { color: '#d4d4d4' }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { color: '#ececec' }],
  },
  { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'on' }] },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ lightness: 21 }, { visibility: 'off' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [{ visibility: 'on' }, { color: '#d4d4d4' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#303030' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [{ saturation: '-100' }],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.government',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.medical',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#dedede' }, { lightness: 21 }],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.school',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry.stroke',
    stylers: [{ lightness: '-61' }, { gamma: '0.00' }, { visibility: 'off' }],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'all',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }, { lightness: 17 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 18 }],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 16 }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#dadada' }, { lightness: 17 }],
  },
];

export const MapDefaultStyle = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#c6c6c6' }],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '#f2f2f2' }],
  },
  { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#dde6e8' }, { visibility: 'on' }],
  },
];
