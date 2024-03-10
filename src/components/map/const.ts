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
