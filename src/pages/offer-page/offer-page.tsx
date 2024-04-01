import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {v4 as uuidv4} from 'uuid';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getRatingWidth} from '../../utils.ts';
import {Header} from '../../components/header/header.tsx';
import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {ReviewsList} from '../../components/reviews-list/reviews-list.tsx';
import {NearbyPlaces} from '../../components/nearby-places/nearby-places.tsx';
import {Map} from '../../components/map/map.tsx';
import {BookmarkButton} from '../../components/bookmark-button/bookmark-button';
import {Spinner} from '../../components/spinner/spinner.tsx';
import {OfferHost} from '../../components/offer-host/offer-host.tsx';
import {NotFoundPage} from '../not-found-page/not-found-page.tsx';
import {Reviews} from '../../types/review.ts';
import {Offers} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {cityCoordinates, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT} from '../../const.ts';
import {
  fetchCommentsAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
} from '../../store/api-actions.ts';

export function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  const {id} = useParams();
  const offer = offers.find((item) => item.id.toString() === id);

  const idExists = offers.some((item) => item.id === id);
  const comments = useAppSelector<Reviews>((state) => state.comments);
  const nearbyOffers = useAppSelector<Offers>((state) => state.nearbyOffers);

  const sortedComments = comments
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const isOfferLoading = useAppSelector((state) => state.isOfferDataLoading);
  const isCommentsLoading = useAppSelector(
    (state) => state.isCommentsDataLoading
  );
  const isNearbyOffersLoading = useAppSelector(
    (state) => state.isNearbyOffersDataLoading
  );

  const selectedCity: City | undefined = offers.find((offerItem) => offerItem.id === id)?.city;

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === selectedCity?.name.toLowerCase()
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [id, dispatch]);

  if (!idExists) {
    return <NotFoundPage/>;
  }

  if (!offer) {
    if (isOfferLoading || isCommentsLoading || isNearbyOffersLoading) {
      return <Spinner/>;
    }
    return <NotFoundPage/>;
  }

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    isFavorite,
  } = offer;

  const slicedNearbyOffers = nearbyOffers.slice(0, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT);
  const offersToMap = [offer, ...slicedNearbyOffers];
  const isAvatarPro = host?.isPro ? 'offer__avatar-wrapper--pro' : '';

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header isActiveLogo={false} isNav/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images?.map((image) => (
                <div className="offer__image-wrapper" key={uuidv4()}>
                  <img className="offer__image" src={image} alt="Offer"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton
                  id={id}
                  isFavorite={isFavorite}
                  width={'31'}
                  height={'33'}
                  isOfferScreen
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingWidth(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedroom
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adult
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods?.map((good) => (
                    <li className="offer__inside-item" key={uuidv4()}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <OfferHost
                isAvatarPro={isAvatarPro}
                host={host}
                description={description}
              />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList reviews={sortedComments.slice(0, 10)}/>
                {String(authorizationStatus) === 'AUTH' && <ReviewForm/>}
              </section>
            </div>
          </div>
          {activeCityCoordinates && offer && (
            <Map
              city={activeCityCoordinates}
              activeOfferId={id}
              offers={offersToMap}
              className='offer__map'
            />
          )}
        </section>
        <div className="container">
          <NearbyPlaces slicedNearbyOffers={slicedNearbyOffers}/>
        </div>
      </main>
    </div>
  );
}
