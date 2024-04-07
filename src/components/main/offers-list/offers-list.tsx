import {OfferCard} from '../../common/offer-card/offer-card.tsx';
import {TOffers} from '../../../types/offer.ts';

type OffersListProps = {
  offers: TOffers;
  className?: string;
  isActive?: boolean;
  onOfferHover?: (offerId: string) => void;
};

export function OffersList({offers, className, isActive = false, onOfferHover = () => {}}: OffersListProps): JSX.Element {
  return (
    <div className={`${className}`} data-testid="offersListElement">
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
