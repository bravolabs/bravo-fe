import { isTokenExpired } from './authToken';

const KEY = 'bravo';

export default {
  set: function(payload) {
    try {
      const item = JSON.stringify(payload);
      localStorage.setItem(KEY, item);
    } catch {
      return undefined;
    }
  },

  get: function() {
    try {
      const item = localStorage.getItem(KEY);
      if (item === null) {
        return undefined;
      } else {
        const isExpired = isTokenExpired(item.token);
        if (isExpired) {
          this.clear();
          return undefined;
        }
      }
      return JSON.parse(item);
    } catch {
      return undefined;
    }
  },

  clear: function() {
    localStorage.clear();
    window.location.href = '/';
  },
};
