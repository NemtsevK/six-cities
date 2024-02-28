import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {Offer} from '../../types/offer.ts';
import {getRatingWidth} from '../../utils.ts';

type Size = 'small' | 'large';

type OfferCardProps = {
  offer: Offer;
  block: string;
  size?: Size;
  onCardHover?: (offerId: Offer['id'] | null) => void;
}

function getImageSize(size: Size) {
  return size === 'small' ? {width: '150', height: '110'} : {width: '260', height: '200'};
}

export function OfferCard({offer, block, size = 'large', onCardHover}: OfferCardProps): JSX.Element {
  const {id, title, type, price, isPremium, isFavorite, rating, previewImage} = offer;

  const handleMouseEnter = () => {
    onCardHover?.(id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  const textFavorite = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>{isPremium ? 'Premium' : null}</span>
      </div>
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            {...getImageSize(size)}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{textFavorite}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
