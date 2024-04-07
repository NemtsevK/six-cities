import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';
import {TOffer} from '../../../types/offer.ts';
import {getRatingWidth} from '../../../utils.ts';
import {MemoizedBookmarkButton} from '../bookmark-button/bookmark-button.tsx';

type Size = 'small' | 'large';

type OfferCardProps = {
  offer: TOffer;
  isActive?: boolean;
  onOfferHover?: (offerId: string) => void;
  isFavoriteItem?: boolean;
  size?: Size;
}

function getImageSize(size: Size | undefined) {
  return size === 'small' ? {width: '150', height: '110'} : {width: '260', height: '200'};
}

export function OfferCard({offer, isActive, onOfferHover, isFavoriteItem, size}: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    rating,
    previewImage,
    isFavorite,
    isPremium
  } = offer;

  const location = useLocation();
  let className;

  switch (true) {
    case location.pathname === String(AppRoute.Main):
      className = 'cities';
      break;
    case /^\/offer\//.test(location.pathname):
      className = 'near-places';
      break;
    case location.pathname === String(AppRoute.Favorites):
      className = 'favorites';
      break;
    default:
      className = 'cities';
  }

  const wrapperClassName = `${
    isFavoriteItem
      ? 'favorites__image-wrapper place-card__image-wrapper'
      : 'cities__image-wrapper place-card__image-wrapper'
  }`;

  return (
    <article
      className={` ${className}__card place-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onOfferHover && onOfferHover(id)}
      onMouseLeave={() => onOfferHover && onOfferHover('')}
      data-testid="cardArticleElement"
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>{isPremium ? 'Premium' : null}</span>
      </div>
      <div className={`${wrapperClassName}`}>
        <Link to={`/offer/${id}`}>
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
          <MemoizedBookmarkButton
            id={id}
            isFavorite={isFavorite}
            width={'18'}
            height={'19'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
