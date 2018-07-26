// @flow
import createReducer from './createReducer';
import etherBalanceActionTypes from './actions/etherBalance';
import accountBalancesActionTypes from './actions/accountBalances';
import etherTxActionTypes from './actions/etherTx';
import orderBookActionTypes from './actions/orderBook';
import tradeHistoryActionTypes from './actions/tradeHistory';
import orderHistoryActionTypes from './actions/orderHistory';
import orderFromActionTypes from './actions/orderForm';
import depthChartActionTypes from './actions/depthChart';
import ohlcvActionTypes from './actions/ohlcv';
import coinSearcherActionTypes from './actions/coinSearcher';
import tokensActionTypes from './actions/tokens';
import accountActionTypes from './actions/account';
import depositFormActionTypes from './actions/depositForm';
import settingsActionTypes from './actions/settings';
import createWalletActionTypes from './actions/createWallet';
import walletPageActionTypes from './actions/walletPage';
import loginPageActionTypes from './actions/loginPage';
import logoutPageActionTypes from './actions/logoutPage';
import signerSettingsActionTypes from './actions/signerSettings';

import * as etherBalanceEvents from './domains/etherBalance';
import * as accountBalancesEvents from './domains/accountBalances';
import * as etherTxEvents from './domains/etherTx';
import * as loginPageEvents from './domains/loginPage';
import * as tradingPageEvents from './domains/tradingPage';
import * as orderBookEvents from './domains/orderBook';
import * as tradeHistoryEvents from './domains/tradeHistory';
import * as orderHistoryEvents from './domains/orderHistory';
import * as orderFormEvents from './domains/orderForm';
import * as depthChartEvents from './domains/depthChart';
import * as coinSearcherEvents from './domains/coinSearcher';
import * as ohlcvEvents from './domains/ohlcv';
import * as tokensEvents from './domains/tokens';
import * as accountEvents from './domains/account';
import * as depositFormEvents from './domains/depositForm';
import * as settingsEvents from './domains/settings';
import * as tokenPairsEvents from './domains/tokenPairs';
import * as signerEvents from './domains/signer';
import * as walletsEvents from './domains/wallets';

export const tradingPage = createReducer(action => {
  const { type } = action;
  switch (type) {
    default:
      return tradingPageEvents.initialized();
  }
});

export const loginPage = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case loginPageActionTypes.requestLogin:
      return loginPageEvents.loginRequested();
    case loginPageActionTypes.loginError:
      return loginPageEvents.loginFailed(payload.error);
    case loginPageActionTypes.loginWithMetamask:
      return loginPageEvents.authenticated();
    case loginPageActionTypes.loginWithWallet:
      return loginPageEvents.authenticated();
    default:
      return loginPageEvents.initialized();
  }
});

export const accountBalances = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case accountBalancesActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol);
    case accountBalancesActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol);
    case accountBalancesActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }]);
    case accountBalancesActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case accountBalancesActionTypes.clearBalances:
      return accountBalancesEvents.cleared();
    case depositFormActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol);
    case depositFormActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol);
    case depositFormActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }]);
    case depositFormActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case walletPageActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case walletPageActionTypes.updateAllowances:
      return accountBalancesEvents.allowancesUpdated(payload.allowances);
    default:
      return accountBalancesEvents.initialized();
  }
});

export const signer = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case signerSettingsActionTypes.requestSigner:
      return signerEvents.signerRequested();
    case signerSettingsActionTypes.updateSigner:
      return signerEvents.signerUpdated(payload.params);
    case signerSettingsActionTypes.error:
      return signerEvents.signerError(payload.message);
    default:
      return signerEvents.initialized();
  }
});

export const etherTx = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case etherTxActionTypes.etherTxError:
      return etherTxEvents.etherTxError(payload.status, payload.statusMessage);
    case etherTxActionTypes.validateEtherTx:
      return etherTxEvents.etherTxValidated(payload.statusMessage, payload.gas);
    case etherTxActionTypes.invalidateEtherTx:
      return etherTxEvents.etherTxInvalidated(payload.statusMessage);
    case etherTxActionTypes.revertEtherTx:
      return etherTxEvents.etherTxReverted(payload.statusMessage, payload.receipt);
    case etherTxActionTypes.sendEtherTx:
      return etherTxEvents.etherTxSent(payload.hash);
    case etherTxActionTypes.confirmEtherTx:
      return etherTxEvents.etherTxConfirmed(payload.receipt);
    default:
      return etherTxEvents.initialized();
  }
});

export const ohlcv = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case ohlcvActionTypes.saveData:
      return ohlcvEvents.savedOHLCVData(payload.data);
    default:
      return ohlcvEvents.initialized();
  }
});

export const orderBook = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case orderBookActionTypes.saveData:
      return orderBookEvents.dataSaved(payload.data);
    default:
      return orderBookEvents.initialized();
  }
});

export const orderHistory = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case orderHistoryActionTypes.saveData:
      return orderHistoryEvents.dataSaved(payload.data);

    default:
      return orderHistoryEvents.initialized();
  }
});

export const orderForm = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case orderFromActionTypes.saveData:
      return orderFormEvents.dataSaved(payload.data);

    default:
      return orderFormEvents.initialized();
  }
});

export const depthChart = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case depthChartActionTypes.saveData:
      return depthChartEvents.saveData(payload.data);

    default:
      return depthChartEvents.initialized();
  }
});

export const coinSearcher = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case coinSearcherActionTypes.saveData:
      return coinSearcherEvents.dataSaved(payload.data);

    case coinSearcherActionTypes.toggleStar:
      return coinSearcherEvents.toggleStar(payload.data);

    default:
      return coinSearcherEvents.initialized();
  }
});

export const tradeHistory = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case tradeHistoryActionTypes.saveData:
      return tradeHistoryEvents.dataSaved(payload.data);
    default:
      return tradeHistoryEvents.initialized();
  }
});

export const tokens = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case tokensActionTypes.updateTokens:
      return tokensEvents.tokenUpdated(payload.symbol, payload.address);
    case tokensActionTypes.removeTokens:
      return tokensEvents.tokenRemoved(payload.symbol);
    default:
      return tokensEvents.initialized();
  }
});

export const account = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case accountActionTypes.updateAccount:
      return accountEvents.accountUpdated(payload.address);
    case signerSettingsActionTypes.updateSigner:
      return accountEvents.accountUpdated(payload.address);
    case loginPageActionTypes.loginWithMetamask:
      return accountEvents.accountUpdated(payload.address);
    case loginPageActionTypes.loginWithWallet:
      return accountEvents.accountUpdated(payload.address);
    case logoutPageActionTypes.logout:
      return accountEvents.accountRemoved();
    default:
      return accountEvents.initialized();
  }
});

export const depositForm = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case depositFormActionTypes.deposit:
      return depositFormEvents.deposited();
    case depositFormActionTypes.confirm:
      return depositFormEvents.confirmed();
    case depositFormActionTypes.sendConvertTx:
      return depositFormEvents.convertTxSent(payload.hash);
    case depositFormActionTypes.revertConvertTx:
      return depositFormEvents.convertTxReverted(payload.receipt);
    case depositFormActionTypes.confirmConvertTx:
      return depositFormEvents.convertTxConfirmed(payload.receipt);
    case depositFormActionTypes.sendAllowTx:
      return depositFormEvents.allowTxSent(payload.hash);
    case depositFormActionTypes.revertAllowTx:
      return depositFormEvents.allowTxReverted(payload.receipt);
    case depositFormActionTypes.confirmAllowTx:
      return depositFormEvents.allowTxConfirmed(payload.receipt);
    default:
      return depositFormEvents.initialized();
  }
});

export const settings = createReducer(action => {
  const { type } = action;
  switch (type) {
    case settingsActionTypes.setDefaultGasLimit:
      return settingsEvents.defaultGasLimitSet();
    case settingsActionTypes.setDefaultGasPrice:
      return settingsEvents.defaultGasPriceSet();
    default:
      return settingsEvents.initialized();
  }
});

export const tokenPairs = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case tokensActionTypes.updateTokens:
      return tokenPairsEvents.tokenPairUpdated(payload);
    case tokensActionTypes.removeTokens:
      return tokenPairsEvents.tokenPairRemoved(payload);
    default:
      return tokenPairsEvents.initialized();
  }
});

export const wallets = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case createWalletActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    case createWalletActionTypes.addWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    case createWalletActionTypes.removeWallet:
      return walletsEvents.walletRemoved(payload);
    case loginPageActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    default:
      return walletsEvents.initialized();
  }
});

export const etherBalance = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case etherBalanceActionTypes.subscribeBalance:
      return etherBalanceEvents.subscribed(payload.address);
    case etherBalanceActionTypes.unsubscribeBalance:
      return etherBalanceEvents.unsubscribed(payload.address);
    case etherBalanceActionTypes.updateBalance:
      return etherBalanceEvents.updated(payload.address, payload.balance);
    default:
      return etherBalanceEvents.initialized();
  }
});
