// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Zernio social connect flows
 */
export class Zernio extends APIResource {
  /**
   * Disconnect Zernio account
   */
  disconnectAccount(params: ZernioDisconnectAccountParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete('/api/zernio/disconnect', {
      query: { id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Public callback URL; redirects to `/settings/connections`.
   */
  oauthCallback(
    query: ZernioOAuthCallbackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/zernio/callback', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Redirects to Zernio. Query parameter `platform` selects the network (e.g.
   * twitter).
   */
  startOAuth(query: ZernioStartOAuthParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/zernio/connect', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }
}

export interface ZernioDisconnectAccountParams {
  /**
   * Local ZernioAccount id
   */
  id: string;
}

export interface ZernioOAuthCallbackParams {
  platform?: string;

  userId?: string;
}

export interface ZernioStartOAuthParams {
  platform: string;
}

export declare namespace Zernio {
  export {
    type ZernioDisconnectAccountParams as ZernioDisconnectAccountParams,
    type ZernioOAuthCallbackParams as ZernioOAuthCallbackParams,
    type ZernioStartOAuthParams as ZernioStartOAuthParams,
  };
}
