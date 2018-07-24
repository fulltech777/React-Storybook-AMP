import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import createStore from '../../store/configureStore';
import connect, { mapStateToProps, mapDispatchToProps } from './connect';
import createSelector from '../../store/models/WalletPage';

jest.mock('../../store/models/WalletPage');

const depositTableData = [
  { symbol: 'EOS', balance: '10.0000', allowed: true },
  { symbol: 'ZRX', balance: '1.00000', allowed: false },
  { symbol: 'EOS', balance: '5.00000', allowed: false },
  { symbol: 'EOS', balance: '8.00000', allowed: true },
];

describe('connect(Component)', () => {
  it('injects certain props and renders without crashing', () => {
    const { store } = createStore();
    const ConnectedTestComponent = connect(props => {
      expect(props).toBeDefined();
      expect(props).toHaveProperty('queryAccountData');
      expect(props).toHaveProperty('loading');
      expect(props).toHaveProperty('depositTableSelector');
      expect(props).toHaveProperty('isDefaultAccountSet');
      return null;
    });

    shallow(
      <Provider store={store}>
        <ConnectedTestComponent />
      </Provider>
    );
  });
});

describe('mapStateToProps(state, props)', () => {
  let balancesArray;

  beforeEach(() => {
    balancesArray = jest.fn(() => depositTableData);
    createSelector.mockReturnValue({ balancesArray });
  });

  it('returns expected props', () => {
    const state = {};
    const props = {};
    const result = mapStateToProps(state, props);

    expect(result).toBeDefined();
    expect(result).toEqual({ depositTableData, isDefaultAccountSet: false, loading: false });
  });
});
