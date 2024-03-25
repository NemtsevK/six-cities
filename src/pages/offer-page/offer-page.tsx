import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {getRatingWidth} from '../../utils.ts';
import {Header} from '../../components/header/header.tsx';
import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {ReviewsList} from '../../components/reviews-list/reviews-list.tsx';
import {NearPlaces} from '../../components/near-places/near-places.tsx';
import {Map} from '../../components/map/map.tsx';
import {BookmarkButton} from '../../components/bookmark-button/bookmark-button';
import {NotFoundPage} from '../not-found-page/not-found-page.tsx';
import {getNearOffers} from './utils.ts';

export function OfferPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [chosenOffer, setChosenCard] = useState<string | null>(null);
  const {offerId} = useParams();
  const offer = offers.find((item) => item.id.toString() === offerId);

  if (!offer) {
    return <NotFoundPage/>;
  }

  const nearOffers = getNearOffers({offer, offers});
  const nearOffersPlusCurrent = [offer, ...nearOffers];

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header isActive={false} isNav/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((image) => (
                  <div key={image} className="offer__image-wrapper">
                    <img className="offer__image" src={image} alt={offer.description}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <BookmarkButton
                  id={offerId}
                  isFavorite={false}
                  width={'31'}
                  height={'33'}
                  isOfferScreen
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingWidth(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedroom
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adult
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={[]}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            offers={nearOffersPlusCurrent}
            activeOfferId={chosenOffer}
            className='offer__map'
          />
        </section>
        <NearPlaces nearPlaces={nearOffers} setChosenCard={setChosenCard}/>
      </main>
    </div>
  );
}
