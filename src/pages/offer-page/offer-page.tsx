import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {v4 as uuidv4} from 'uuid';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  getComments,
  getErrorOfferLoadingStatus,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
} from '../../store/app-data/app-data.selectors';
import {Header} from '../../components/header/header.tsx';
import {NearbyPlaces} from '../../components/offer-components/nearby-places/nearby-places.tsx';
import {Map} from '../../components/map/map.tsx';
import {BookmarkButton} from '../../components/bookmark-button/bookmark-button';
import {LoadingPage} from '../loading-page/loading-page.tsx';
import {OfferHost} from '../../components/offer-components/offer-host/offer-host.tsx';
import {OfferFeatures} from '../../components/offer-components/offer-features/offer-features.tsx';
import {OfferInside} from '../../components/offer-components/offer-inside/offer-inside.tsx';
import {OfferPrice} from '../../components/offer-components/offer-price/offer-price.tsx';
import {OfferRating} from '../../components/offer-components/offer-rating/offer-rating.tsx';
import {OfferReviews} from '../../components/offer-components/offer-reviews/offer-reviews';
import {NotFoundPage} from '../not-found-page/not-found-page.tsx';
import {TReviews} from '../../types/review.ts';
import {TOffer, TOffers} from '../../types/offer.ts';
// import {TCity} from '../../types/city.ts';
import {cityCoordinates, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT, MAX_IMAGES} from '../../const.ts';
import {
  fetchCommentsAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
} from '../../store/api-actions.ts';

export function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string | undefined }>();

  const offers = useAppSelector(getOffers);
  const nearbyOffers = useAppSelector<TOffers>(getNearbyOffers);
  const hasError = useAppSelector(getErrorOfferLoadingStatus);

  const offer = useAppSelector<TOffer>(getOffer);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);

  const reviews = useAppSelector<TReviews>(getComments);

  const selectedCity = offers.find((offerItem) => offerItem.id === id)?.city;

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

  if (isOfferDataLoading) {
    return <LoadingPage/>;
  }

  if (hasError) {
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
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images?.slice(0, MAX_IMAGES).map((image) => (
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
              <OfferRating rating={rating}/>
              <OfferFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <OfferPrice price={price}/>
              <OfferInside goods={goods}/>
              <OfferHost
                isAvatarPro={isAvatarPro}
                host={host}
                description={description}
              />
              <OfferReviews reviews={reviews}/>
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
