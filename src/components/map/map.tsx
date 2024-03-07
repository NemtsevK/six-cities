import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import {useMap} from '../../hooks/use-map.tsx';
import {City} from '../../types/city.ts';
import {Offer} from '../../types/offer.ts';
import {DEFAULT_ICON, CURRENT_ICON} from './const';

type MapProps = {
  city: City;
  offers: Offer[];
  activeCardId: string | null;
}

export function Map({city, offers, activeCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(
            activeCardId !== undefined && offer.id === activeCardId ? CURRENT_ICON : DEFAULT_ICON)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  return (
    <div className="cities__right-section">
      <section
        className="cities__map map"
        style={{minHeight: '100%'}}
        ref={mapRef}
      >
      </section>
    </div>
  );
}
