// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeAPI from './me';
import { Me, MeListBadgesResponse, MeListCirclesResponse, MeRetrieveResponse } from './me';

export class V1 extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

V1.Me = Me;

export declare namespace V1 {
  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeListBadgesResponse as MeListBadgesResponse,
    type MeListCirclesResponse as MeListCirclesResponse,
  };
}
