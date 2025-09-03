import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>([...goodsFromServer]);
  const [activeButton, setActiveButton] = useState<'alphabet' | 'length' | ''>(
    '',
  );
  const [reverse, setReverse] = useState<boolean>(false);

  const sortAlphabetically = () => {
    setGoods([...goods].sort());
  };

  const sortByLength = () => {
    setGoods([...goods].sort((a, b) => a.length - b.length));
  };

  const reverseList = () => {
    setGoods([...goods].reverse());
  };

  const resetList = () => {
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${activeButton === 'alphabet' ? '' : 'is-light'}`}
          onClick={() => {
            sortAlphabetically();
            setActiveButton('alphabet');
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${activeButton === 'length' ? '' : 'is-light'}`}
          onClick={() => {
            sortByLength();
            setActiveButton('length');
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${reverse ? '' : 'is-light'}`}
          onClick={() => {
            reverseList();
            if (reverse) {
              setReverse(false);
            } else {
              setReverse(true);
            }
          }}
        >
          Reverse
        </button>

        {reverse || activeButton !== '' ? (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              resetList();
              setActiveButton('');
              setReverse(false);
            }}
          >
            Reset
          </button>
        ) : null}
      </div>

      <ul>
        {goods.map((good: string) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
