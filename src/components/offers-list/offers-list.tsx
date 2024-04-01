import {OfferCard} from '../offer-card/offer-card';
import {Offers} from '../../types/offer.ts';

type OffersListProps = {
  offers: Offers;
  className?: string;
  isActive?: boolean;
  onOfferHover?: (offerId: string) => void;
};

export function OffersList({offers, className, isActive = false, onOfferHover}: OffersListProps): JSX.Element {
  return (
    <div className={`${className}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isActive={isActive}
          onOfferHover={onOfferHover}
          size="large"
        />
      ))}
    </div>
  );
}
