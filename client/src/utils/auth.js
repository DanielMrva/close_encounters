// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";
import Cookies from 'universal-cookie';

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem("id_token", idToken);
    window.location.href = "/user";
  }

  logout() {
    
    const cookie = new Cookies;
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("user");
    localStorage.removeItem("lat");
    localStorage.removeItem("lng");
    cookie.remove('username');
    cookie.remove('userId')
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();
