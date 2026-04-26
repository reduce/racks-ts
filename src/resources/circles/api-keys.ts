// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Circle-scoped data (members, quests, leaderboard)
 */
export class APIKeys extends APIResource {
  /**
   * Creates a new `racks_circle_…` API key for the circle. Caller must be the owner
   * or an admin. The full key is returned once.
   *
   * @example
   * ```ts
   * const apiKey = await client.circles.apiKeys.create('id');
   * ```
   */
  create(id: string, body: APIKeyCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/api/circles/${id}/api-keys`, { body, ...options, __security: {  } });
  }

  /**
   * Returns metadata for all API keys scoped to a circle. Caller must be the circle
   * owner or an admin.
   *
   * @example
   * ```ts
   * const apiKeys = await client.circles.apiKeys.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/api/circles/${id}/api-keys`, { ...options, __security: {  } });
  }

  /**
   * Permanently revokes a circle API key. Caller must be the circle owner or an
   * admin.
   *
   * @example
   * ```ts
   * const response = await client.circles.apiKeys.revoke(
   *   'keyId',
   *   { id: 'id' },
   * );
   * ```
   */
  revoke(keyID: string, params: APIKeyRevokeParams, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    const { id } = params
    return this._client.delete(path`/api/circles/${id}/api-keys/${keyID}`, { ...options, __security: {  } });
  }
}

export interface APIKeyCreateResponse {
  id?: string;

  /**
   * Full `racks_circle_…` token — store it now
   */
  key?: string;
}

export interface APIKeyListResponse {
  keys?: Array<APIKeyListResponse.Key>;
}

export namespace APIKeyListResponse {
  export interface Key {
    id?: string;

    createdAt?: string;

    lastUsedAt?: string | null;

    name?: string | null;

    prefix?: string;
  }
}

export interface APIKeyRevokeResponse {
  deleted?: boolean;
}

export interface APIKeyCreateParams {
  name?: string;
}

export interface APIKeyRevokeParams {
  /**
   * Circle ID (cuid)
   */
  id: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRevokeParams as APIKeyRevokeParams
  };
}
