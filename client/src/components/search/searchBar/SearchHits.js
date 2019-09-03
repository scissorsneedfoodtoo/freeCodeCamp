import React from 'react';
import PropTypes from 'prop-types';
import {
  connectStateResults,
  connectHits,
  connectSortBy
} from 'react-instantsearch-dom';
import isEmpty from 'lodash/isEmpty';
import Suggestion from './SearchSuggestion';

const SortBy = ({ items, refine }) => (
  <ul className='ais-SortBy'>
    {items.map(item => (
      <li className='ais-SortBy-option' key={item.value}>
        <a
          href='#'
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const CustomSortBy = connectSortBy(SortBy);

const CustomHits = connectHits(({ hits, currentRefinement, handleSubmit }) => {
  const shortenedHits = hits.filter((hit, i) => i < 8);
  const defaultHit = [
    {
      objectID: `default-hit-${currentRefinement}`,
      query: currentRefinement,
      _highlightResult: {
        query: {
          value: `
            See all results for
            <ais-highlight-0000000000>
            ${currentRefinement}
            </ais-highlight-0000000000>
          `
        }
      }
    }
  ];
  return (
    <div className='ais-Hits'>
      <ul className='ais-Hits-list'>
        <span>
          <CustomSortBy
            defaultRefinement='challenges'
            items={[
              { value: 'challenges', label: 'Coding Challenges' },
              { value: 'news', label: 'Developer News' }
            ]}
          />
        </span>
        {shortenedHits.concat(defaultHit).map(hit => (
          <li
            className='ais-Hits-item'
            data-fccobjectid={hit.objectID}
            key={hit.objectID}
          >
            <Suggestion handleSubmit={handleSubmit} hit={hit} />
          </li>
        ))}
      </ul>
    </div>
  );
});

const SearchHits = connectStateResults(({ handleSubmit, searchState }) => {
  return isEmpty(searchState) || !searchState.query ? null : (
    <CustomHits
      currentRefinement={searchState.query}
      handleSubmit={handleSubmit}
    />
  );
});

SortBy.propTypes = {
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired
};

export default SearchHits;
