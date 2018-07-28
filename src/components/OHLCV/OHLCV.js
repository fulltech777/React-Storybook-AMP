//@flow
import React from 'react';
import SmallChart from './SmallChart';
import ExtendedChart from './ExtendedChart';
import type { SendTimelineParams } from '../../types/ohlcv';

type State = {
  expandedChard: boolean,
};

type Props = {
  ohlcvData: Array<Object>,
  pair: string,
  pairId: string,
  updateTimeLine: SendTimelineParams => void,
};

export default class OHLCV extends React.PureComponent<Props, State> {
  state = {
    expandedChard: false,
  };
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  toggleExpand = () => {
    this.setState(prevState => {
      return {
        expandedChard: !prevState.expandedChard,
      };
    });
  };
  render() {
    const {
      props: { ohlcvData, pair, updateTimeLine, pairId, hideOrderBook, toggleOrderBook },
      state: { expandedChard },
      toggleExpand,
      reset,
    } = this;
    return (
      <React.Fragment>
        <SmallChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          pair={pair}
          pairId={pairId}
          hideOrderBook={hideOrderBook}
          toggleOrderBook={toggleOrderBook}
          toggleExpand={toggleExpand}
          expandedChard={expandedChard}
        />
        <ExtendedChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          pair={pair}
          pairId={pairId}
          hideOrderBook={hideOrderBook}
          toggleOrderBook={toggleOrderBook}
          expandedChard={expandedChard}
          toggleExpand={toggleExpand}
        />
      </React.Fragment>
    );
  }
}
