// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyListResponse,
  APIKeyRevokeParams,
  APIKeyRevokeResponse,
  APIKeys,
} from './api-keys';

export class Circles extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

Circles.APIKeys = APIKeys;

export declare namespace Circles {
  export {
    APIKeys as APIKeys,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
  };
}
