// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';
import Notifier from '../../components/Notifier';

type Props = {
  authenticated: boolean,
  loginWithMetamask: (SyntheticEvent<>) => void,
  loginWithWallet: (SyntheticEvent<>) => void,
};

type State = {
  view: string,
  metamaskStatus: 'unlocked' | 'locked' | 'undefined',
};

class LoginPage extends React.PureComponent<Props, State> {
  state = {
    view: 'loginMethods',
    metamaskStatus: 'undefined',
  };

  componentDidMount = () => {
    typeof window.web3 === 'undefined'
      ? this.setState({ metamaskStatus: 'undefined' })
      : typeof window.web3.eth.defaultAccount === 'undefined'
        ? this.setState({ metamaskStatus: 'locked' })
        : this.setState({ metamaskStatus: 'unlocked' });
  };

  showWalletLoginForm = () => {
    this.setState({ view: 'wallet' });
  };

  loginWithMetamask = () => {
    // this.props.addNotification({ id: 1, message: 'Heelo' });
    this.props.loginWithMetamask();
  };

  renderer = () => {};

  render() {
    const { loginWithMetamask, loginWithWallet, authenticated } = this.props;
    const { view, metamaskStatus } = this.state;

    if (authenticated) {
      return <Redirect to="/wallet" />;
    }
    return (
      <div>
        <Notifier />
        <LoginPageRenderer
          view={view}
          metamaskStatus={metamaskStatus}
          loginWithWallet={loginWithWallet}
          loginWithMetamask={loginWithMetamask}
          showWalletLoginForm={this.showWalletLoginForm}
        />
      </div>
    );
  }
}

export default LoginPage;
