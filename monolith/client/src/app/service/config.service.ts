import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 

  private _api_gateway = "http://localhost:8180";
  private _users_and_agancy_ms = this._api_gateway + "/users-ms/api";
  private _advert_ms = this._api_gateway + "/adverts-ms/api";
  private _requests_ms = this._api_gateway + "/requests-ms/api"
  //--------------------------------------------------------
  private _api_url = this._users_and_agancy_ms;

  private _auth_url = this._users_and_agancy_ms + "/auth";

  private _user_url = this._users_and_agancy_ms + '/user';

  private _refresh_token_url = this._users_and_agancy_ms + '/refresh';

  get new_request(): string {
    return this._requests_ms + "/new-request";
  } 


  get_pending_request(prefix: any): string {
    return this._requests_ms + '/' + prefix + "/pending/requests";
  }
  get_cencel_request(prefix: any): string {
    return this._requests_ms + '/' + prefix + "/canceled/requests";
  }
  get_reserved_request(prefix: any): string {
    return this._requests_ms + '/' + prefix + "/reserved/requests";
  }

  get delete_request(): string {
    return this._requests_ms + "/delete-request";
  }
  get requests_url(): string {
    return this._requests_ms;
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

  get_user_permission_config(id):string{
    return this.user_url +'/'+  id + '/permissions';
  }
  get_update_permisions(id):string{
    return this.user_url +'/'+  id + '/update-permissions';
  }
  get_permission_to_post(id):string
  {
    return this.user_url +'/' + id + '/permissions';
  }
  private _whoami_url = this._api_url + '/whoami';

  get whoami_url(): string {
    return this._whoami_url;
  }

  private _users_url = this._user_url + '/all';

  private _update_user_url = this._user_url + '/update';
  get update_user_url(): string {
    return this._update_user_url;
  }
  get users_url(): string {
    return this._users_url;
  }
  get user_url(): string {
    return this._user_url;
  }
  private _foo_url = this._api_url + '/foo';

  get foo_url(): string {
    return this._foo_url;
  }

  private _signup_url = this._auth_url + '/signup';

  get signup_url(): string {
    return this._signup_url;
  }

  //------------------ ADVERTS, PRICELISTS AND CODEBOOK -------------------
  private _add_advert_url = this._advert_ms + '/add';

  get add_advert_url(): string {
    return this._add_advert_url;
  }
  private _users_adverts_url = this._advert_ms + '/me';

  get_advert_by_id(id){
    return this._advert_ms + '/' + id;
  }
  get users_adverts_url(): string {

    return this._users_adverts_url;
  }
  private _all_adverts = this._advert_ms + '/all';
  get all_adverts(): string {
    return this._all_adverts;
  }
  get all_adverts_with_pricelist(){
    return  this._advert_ms + '/advert-card';
  }
  private _delete_advert_url = this._advert_ms + '/delete';

  get delete_advert_url(): string {
    return this._delete_advert_url;
  }

  private _search_advert_url = this._advert_ms + '/search';

  get search_advert_url(): string {
    return this._search_advert_url;
  }
  get upload_img_url(): string {
    return this._advert_ms + '/upload';
  }

  get get_img_url(): string {
    return this._advert_ms + '/get-image/';
  }
  // PRICELIST PART
  private _pricelist_url = this._advert_ms + '/pricelist';


  get pricelist_url(): string {
    return this._pricelist_url;
  }
  get my_pricelist_url(): string {
    return this._pricelist_url + '/me';
  }
  get new_pricelist_url(): string {
    return this._pricelist_url + '/new';
  }
  get advert_pricelist_url(): string {
    return this._pricelist_url + '/advert';
  }
  get update_pricelist_url(): string {
    return this._pricelist_url + '/update';
  }
  get all_pricelist_url(): string {
    return this._pricelist_url + '/all';
  }
  get bonus_url(): string {
    return this._pricelist_url + '/bonus';
  }

  get my_bonuses_url(): string {
    return this._pricelist_url + '/bonuses/me';
  }

  get new_bonus_url(): string {
    return this._pricelist_url + '/bonus/new';
  }
  // CODE-BOOK PART
  private _get_codebook_url = this._advert_ms + '/codebook';

  get codebook_url(): string {
    return this._get_codebook_url;
  }

  get all_codebook_url(): string {
    return this._get_codebook_url + '/all';
  }
  private _get_cities_url = this._get_codebook_url + '/city/all';

  get cities_url(): string {
    return this._get_cities_url;
  }
//STATISTIC
get add_statistic_data():string{
  return this._requests_ms +"/statistic/add";
}

  get _car_milages_stats():string{
    return this._requests_ms + "/statistic/milage";
  }
  get _avg_milages_stats():string{
    return this._requests_ms + "/statistic/avg-milage";
  }
  get _max_milage_ad(){
    return this._requests_ms + "/statistic/max-milage";
  }
  get _most_popular_ad(){
    return this._requests_ms + "/statistic/most-popular";
  }
  get _rent_number_ad(){
    return this._requests_ms + "/statistic/rent-number";
  }
}
