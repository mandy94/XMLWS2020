import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  private _api_gateway = "http://localhost:8180";
  private _users_and_agancy_ms = this._api_gateway + "/uaamicroservice/api";
  private _advert_ms = this._api_gateway + "adservice";
  //--------------------------------------------------------
  private _api_url =  this._users_and_agancy_ms;

  private _auth_url = this._users_and_agancy_ms  + "/auth";

  private _user_url = this._users_and_agancy_ms + '/user';

  private _refresh_token_url = this._users_and_agancy_ms + '/refresh';

  get new_request():string{
    return this._api_url + "/request/new-request";
  }
  get kart_url():string{
    return this._api_url + "/kart";
  }
  get requests_url():string{
    return this._api_url + "/request";
  }
  get refresh_token_url(): string {
    return this._refresh_token_url;
  }

  private _login_url = this._auth_url + '/login';

  get login_url(): string {
    return this._login_url;
  }

  private _change_password_url = this._auth_url + '/change-password';

  get change_password_url(): string {
    return this._change_password_url;
  }

  private _whoami_url = this._api_url + '/whoami';

  get whoami_url(): string {
    return this._whoami_url;
  }

  private _users_url = this._user_url + '/all';

  get users_url(): string {
    return this._users_url;
  }

  private _foo_url = this._api_url + '/foo';

  get foo_url(): string {
    return this._foo_url;
  }

  private _signup_url = this._auth_url + '/signup';

  get signup_url(): string {
    return this._signup_url;
  }

  private _advert_url = this._api_url +  '/advert';

  get advert_url(): string{
    return this._advert_url;
  }
  private _add_advert_url = this.advert_url + '/add';

  get add_advert_url(): string{
    return this._add_advert_url;
  }
  private _users_adverts_url = this._advert_url + '/me/all';

  get users_adverts_url(): string{
    
    return this._users_adverts_url;
  }
  private _all_adverts = this._advert_url + '/all';
  get all_adverts(): string{
    return this._all_adverts;
  }
  private _delete_advert_url = this._advert_url + '/delete';

  get delete_advert_url(): string{
    return this._delete_advert_url;
  }
  private _get_codebook_url = this._api_url + '/codebook/all';

  get get_codebook_url(): string{
    return this._get_codebook_url;
  }
  private _get_cities_url = this._api_url + '/codebook/cities';

  get get_cities_url(): string{
    return this._get_cities_url;
  }
  get add_fuel(): string{
    return '/add/fuel';
  }
}
