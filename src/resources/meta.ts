// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Machine-readable API metadata (public — no auth required)
 */
export class Meta extends APIResource {
  /**
   * This specification, served as `text/yaml`. Fully public — no credentials
   * required. CORS headers allow any origin to fetch this spec for use in Swagger
   * UI, Redoc, Postman, etc.
   */
  retrieveOpenAPI(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api/meta/openapi', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/yaml' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Same structure as `src/lib/racks-api-catalog.json` — endpoints, auth notes, and
   * integration hints.
   */
  retrieveRacksAPI(options?: RequestOptions): APIPromise<MetaRetrieveRacksAPIResponse> {
    return this._client.get('/api/meta/racks-api', { ...options, __security: {} });
  }
}

export type MetaRetrieveOpenAPIResponse = string;

export type MetaRetrieveRacksAPIResponse = { [key: string]: unknown };

export declare namespace Meta {
  export {
    type MetaRetrieveOpenAPIResponse as MetaRetrieveOpenAPIResponse,
    type MetaRetrieveRacksAPIResponse as MetaRetrieveRacksAPIResponse,
  };
}
