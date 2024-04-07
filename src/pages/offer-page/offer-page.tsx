import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  getComments,
  getErrorOfferLoadingStatus,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
} from '../../store/app-data/app-data.selectors';
import {TReviews} from '../../types/review.ts';
import {TOffer, TOffers} from '../../types/offer.ts';
import {cityCoordinates, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT} from '../../const.ts';
import {fetchCommentsAction, fetchNearbyOffersAction, fetchOfferAction} from '../../store/api-actions.ts';
import {LoadingPage} from '../loading-page/loading-page.tsx';
import {NotFoundPage} from '../not-found-page/not-found-page.tsx';
import {Header} from '../../components/header/header.tsx';
import {NearbyOffers} from '../../components/offer/nearby-offers/nearby-offers.tsx';
import {OfferGallery} from '../../components/offer/offer-gallery/offer-gallery.tsx';
import {OfferDetails} from '../../components/offer/offer-details/offer-details.tsx';
import {MapSection} from '../../components/offer/map-section/map-section.tsx';

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

  const [slicedNearbyOffers, setSlicedNearbyOffers] = useState<TOffers>([]);
  const [offersToMap, setOffersToMap] = useState<TOffers>([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && nearbyOffers.length > 0) {
      setSlicedNearbyOffers(
        nearbyOffers.slice(0, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT)
      );
    }
    return () => {
      isMounted = false;
    };
  }, [nearbyOffers]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && offer) {
      setOffersToMap([offer, ...slicedNearbyOffers]);
    }
    return () => {
      isMounted = false;
    };
  }, [offer, slicedNearbyOffers]);

  if (isOfferDataLoading) {
    return <LoadingPage/>;
  }

  if (hasError) {
    return <NotFoundPage/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer" data-testid="offerMainElement">
        <section className="offer">
          <OfferGallery images={offer.images}/>
          <OfferDetails
            offer={offer}
            isPremium={offer.isPremium}
            isFavorite={offer.isFavorite}
            id={id}
            reviews={reviews}
          />
          <MapSection
            city={activeCityCoordinates}
            activeOfferId={id}
            offers={offersToMap}
          />
        </section>
        <div className="container">
          <NearbyOffers slicedNearbyOffers={slicedNearbyOffers}/>
        </div>
      </main>
    </div>
  );
}
