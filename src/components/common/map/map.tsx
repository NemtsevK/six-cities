import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {useMap} from '../../../hooks/use-map.tsx';
import {TCity} from '../../../types/city.ts';
import {TOffers} from '../../../types/offer.ts';
import {DEFAULT_ICON, ACTIVE_ICON} from './const';

type MapProps = {
  city?: TCity | undefined;
  offers: TOffers;
  activeOfferId?: string | null;
  className?: string;
}

export function Map({city, offers, activeOfferId, className}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  const map = useMap({
    location: city ? city.location : undefined,
    mapRef: mapRef,
  });

  const markerLayer = useRef(leaflet.layerGroup());

  useEffect(() => {
    if (map && city && city.location) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      markerLayer.current.clearLayers();

      offers.forEach((offer) => {
        if (offer && offer.location) {
          const marker = leaflet.marker(
            [offer.location.latitude, offer.location.longitude],
            {
              icon: offer.id === activeOfferId ? ACTIVE_ICON : DEFAULT_ICON
            }
          );

          marker.addTo(markerLayer.current);
        }
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className={`${className} map`} ref={mapRef} data-testid="mapSectionElement"></section>;
}
