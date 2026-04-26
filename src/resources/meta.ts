// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * API discovery and documentation
 */
export class Meta extends APIResource {
  /**
   * Returns this OpenAPI 3.1 YAML document. No authentication required. CORS open.
   */
  retrieveOpenAPI(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/api/meta/openapi', { ...options, headers: buildHeaders([{Accept: 'text/yaml'}, options?.headers]) });
  }

  /**
   * Returns a JSON file listing all public API routes with auth requirements and
   * descriptions.
   */
  retrieveRacksAPI(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/meta/racks-api', options);
  }
}

export type MetaRetrieveOpenAPIResponse = string

export type MetaRetrieveRacksAPIResponse = unknown

export declare namespace Meta {
  export {
    type MetaRetrieveOpenAPIResponse as MetaRetrieveOpenAPIResponse,
    type MetaRetrieveRacksAPIResponse as MetaRetrieveRacksAPIResponse
  };
}
