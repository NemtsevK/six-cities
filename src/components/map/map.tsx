import {useRef, useEffect} from 'react';
import leaflet, {LayerGroup} from 'leaflet';
import {useMap} from '../../hooks/use-map.tsx';
import {City} from '../../types/city.ts';
import {Offer, Offers} from '../../types/offer.ts';
import {DEFAULT_ICON, ACTIVE_ICON} from './const';

type MapProps = {
  city: City;
  offers: Offers;
  activeOfferId?: Offer['id'] | null;
  className?: string;
}

export function Map({city, offers, activeOfferId, className}: MapProps): JSX.Element {
  const {location} = city;
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({mapRef, location});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: offer.id === activeOfferId ? ACTIVE_ICON : DEFAULT_ICON
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, activeOfferId]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}
