import leaflet from 'leaflet';

export const DEFAULT_ICON = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

export const ACTIVE_ICON = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

export const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
