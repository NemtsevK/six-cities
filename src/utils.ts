import {MAX_RATING} from './const.ts';

export function getRandomItem<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export function getRatingWidth(rating: number) {
  return `${Math.round(rating / MAX_RATING) * 100}%`;
}
