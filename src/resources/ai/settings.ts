// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * In-app assistant and model settings (browser session required)
 */
export class Settings extends APIResource {
  /**
   * Default AI model
   */
  retrieve(options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get('/api/ai/settings', { ...options, __security: {} });
  }

  /**
   * Update default AI model
   */
  update(body: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    return this._client.patch('/api/ai/settings', { body, ...options, __security: {} });
  }
}

export interface SettingRetrieveResponse {
  defaultAiModel?: string;
}

export interface SettingUpdateResponse {
  defaultAiModel?: string;

  ok?: boolean;
}

export interface SettingUpdateParams {
  /**
   * Allowed model id (provider/model slug)
   */
  model: string;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
