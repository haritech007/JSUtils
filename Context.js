/**
 * A JavaScript Context Module
 * This module can be used to store application state data for single page applications.
 * This uses Observer and Module design pattern which subscribes the Context Store
 * Whenever ever the data adds and changes in Store it trigger subscriptions
 */

var Context = (function () {
  var Store = {};
  var subscriptionList = [];

  function set(key, data) {
    Store[key] = data;
    notify(Store);
  }

  function get(key) {
    return Store[key];
  }

  function subscribe(subscription) {
    subscriptionList.push(subscription);
  }

  function notify(store) {
    subscriptionList.forEach(function (subscription) {
      subscription.call(this, store);
    });
  }

  return {
    set: set,
    get: get,
    subscribe: subscribe
  };
})();
