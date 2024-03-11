import {useState} from 'react';
import cn from 'classnames';
import {SortingMap} from '../../const.ts';
import {TSorting} from '../../types/sorting.ts';

type SortingProps = {
  activeSorting: TSorting;
  onSortingOptionClick: (type: TSorting) => void;
}

export function Sorting({activeSorting, onSortingOptionClick}: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const arrowStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  function handleTypeClick() {
    setIsOpened((prevState) => !prevState);
  }

  function handleSortingOptionClick(type: TSorting) {
    setIsOpened(false);
    onSortingOptionClick(type);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortingMap[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={arrowStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {
        'places__options--opened': isOpened,
      })}
      >
        {
          (Object.entries(SortingMap) as [
              TSorting,
              (typeof SortingMap)[TSorting]
            ][]
          ).map(([option, content]) => (
            <li
              key={option}
              className={cn('places__option', {
                'places__option--active': activeSorting === option,
              })}
              tabIndex={0}
              onClick={() => handleSortingOptionClick(option)}
            >
              {content}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
