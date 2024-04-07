import {useState} from 'react';
import {SortingMap} from '../../../const.ts';

type SortingProps = {
  handleSort: (sortOption: SortingMap) => void;
  sortingOptionsVisible: boolean;
  setSortingOptionsVisible: (visible: boolean) => void;
}

export function SortingOptions({handleSort, sortingOptionsVisible, setSortingOptionsVisible}: SortingProps): JSX.Element {
  const [selectedSortOption, setSelectedSortOption] = useState<SortingMap>(
    SortingMap.Popular
  );

  const sortingOptionList = Array.from(Object.values(SortingMap));

  const handleOptionClick = (option: SortingMap) => {
    setSelectedSortOption(option);
    handleSort(option);
    setSortingOptionsVisible(false);
  };

  const isVisible = sortingOptionsVisible ? '--opened' : '--closed';

  return (
    <ul className={`places__options places__options--custom places__options${isVisible}`} data-testid="sortOptionsListElement">
      {sortingOptionList.map((option) => (
        <li
          key={option}
          className={`places__option ${
            selectedSortOption !== option ? '' : 'places__option--active'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
