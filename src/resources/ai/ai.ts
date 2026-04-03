// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings';
import { SettingRetrieveResponse, SettingUpdateParams, SettingUpdateResponse, Settings } from './settings';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * In-app assistant and model settings (browser session required)
 */
export class AI extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Server-Sent Events / UIMessage stream (`toUIMessageStreamResponse`). Request
   * body follows AI SDK v6 chat shape; tools include in-app reads, E2B sandbox, MCP
   * proxy, etc.
   */
  chat(body: AIChatParams, options?: RequestOptions): APIPromise<Stream<AIChatResponse>> {
    return this._client.post('/api/ai/chat', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
      __security: {},
    }) as APIPromise<Stream<AIChatResponse>>;
  }

  /**
   * Intended for code running in E2B when the assistant enables delegation. Bearer
   * token is a short-lived HMAC JWT-like string tied to the user session that
   * started the tool. Actions: `me`, `badges`, `circles`, `active_raids`,
   * `leaderboard`, `raid` (requires `raidId`).
   */
  delegate(body: AIDelegateParams, options?: RequestOptions): APIPromise<AIDelegateResponse> {
    return this._client.post('/api/ai/delegate', {
      body,
      ...options,
      __security: { aiDelegationBearerAuth: true },
    });
  }

  /**
   * Allowed assistant models
   */
  listModels(options?: RequestOptions): APIPromise<AIListModelsResponse> {
    return this._client.get('/api/ai/models', { ...options, __security: {} });
  }

  /**
   * AI usage totals for current user
   */
  retrieveUsage(options?: RequestOptions): APIPromise<AIRetrieveUsageResponse> {
    return this._client.get('/api/ai/usage', { ...options, __security: {} });
  }
}

export type AIChatResponse = string;

export type AIDelegateResponse = { [key: string]: unknown };

export interface AIListModelsResponse {
  /**
   * AI Gateway OIDC or API key present
   */
  configured?: boolean;

  models?: Array<AIListModelsResponse.Model>;

  xaiConfigured?: boolean;
}

export namespace AIListModelsResponse {
  export interface Model {
    id?: string;

    inputPerMTokenUsd?: number;

    label?: string;

    outputPerMTokenUsd?: number;

    supportsVideo?: boolean;

    /**
     * Present only for xAI models
     */
    xai?: 'chat' | 'responses';
  }
}

export interface AIRetrieveUsageResponse {
  byModel?: Array<AIRetrieveUsageResponse.ByModel>;

  totals?: AIRetrieveUsageResponse.Totals;
}

export namespace AIRetrieveUsageResponse {
  export interface ByModel {
    estimatedCost?: number;

    inputTokens?: number;

    model?: string;

    outputTokens?: number;

    totalTokens?: number;
  }

  export interface Totals {
    estimatedCost?: number;

    inputTokens?: number;

    outputTokens?: number;

    totalTokens?: number;
  }
}

export interface AIChatParams {
  /**
   * UIMessage[]
   */
  messages?: Array<{ [key: string]: unknown }>;

  /**
   * Optional provider/model slug
   */
  model?: string;
}

export type AIDelegateParams =
  | AIDelegateParams.Variant0
  | AIDelegateParams.Variant1
  | AIDelegateParams.Variant2;

export declare namespace AIDelegateParams {
  export interface Variant0 {
    action: 'me' | 'badges' | 'circles' | 'active_raids';
  }

  export interface Variant1 {
    action: 'raid';

    raidId: string;
  }

  export interface Variant2 {
    action: 'leaderboard';

    limit?: number;
  }
}

AI.Settings = Settings;

export declare namespace AI {
  export {
    type AIChatResponse as AIChatResponse,
    type AIDelegateResponse as AIDelegateResponse,
    type AIListModelsResponse as AIListModelsResponse,
    type AIRetrieveUsageResponse as AIRetrieveUsageResponse,
    type AIChatParams as AIChatParams,
    type AIDelegateParams as AIDelegateParams,
  };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
