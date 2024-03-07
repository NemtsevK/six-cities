import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import {useMap} from '../../hooks/use-map.tsx';
import {City} from '../../types/city.ts';
import {Offer} from '../../types/offer.ts';
import {DEFAULT_ICON, CURRENT_ICON} from './const';

type MapProps = {
  city: City;
  offers: Offer[];
  activeCardId: Offer['id'] | null;
  className: string;
}

export function Map({city, offers, activeCardId, className}: MapProps): JSX.Element {
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
        className={`${className} map`}
        style={{
          height: '100%',
          minHeight: '500px',
          width: '100%',
          maxWidth: '1144px',
          margin: '0 auto',
        }}
        ref={mapRef}
      >
      </section>
    </div>
  );
}
