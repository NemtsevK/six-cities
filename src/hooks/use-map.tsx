import {useEffect, useState, useRef, MutableRefObject} from 'react';
import leaflet, {Map} from 'leaflet';
import {TLocation} from '../types/city.ts';
import 'leaflet/dist/leaflet.css';
import {TILE_LAYER_URL_PATTERN, TILE_LAYER_ATTRIBUTION} from '../components/map/const.ts';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  location: TLocation;
}

export function useMap({mapRef, location}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}
