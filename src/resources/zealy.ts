// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Zealy extends APIResource {
  /**
   * Zealy admin — read community / webhooks / quests (sample)
   *
   * @example
   * ```ts
   * const zealy = await client.zealy.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ZealyRetrieveResponse> {
    return this._client.get('/api/zealy', { ...options, __security: {} });
  }

  /**
   * Zealy admin — actions (e.g. register webhook)
   *
   * @example
   * ```ts
   * const response = await client.zealy.createAction();
   * ```
   */
  createAction(
    body: ZealyCreateActionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZealyCreateActionResponse> {
    return this._client.post('/api/zealy', { body, ...options, __security: {} });
  }

  /**
   * Zealy admin — delete webhook
   *
   * @example
   * ```ts
   * await client.zealy.deleteWebhook({
   *   webhookId: 'webhookId',
   * });
   * ```
   */
  deleteWebhook(params: ZealyDeleteWebhookParams, options?: RequestOptions): APIPromise<void> {
    const { webhookId } = params;
    return this._client.delete('/api/zealy', {
      query: { webhookId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Body is Zealy event JSON. Signature `x-zealy-signature` must match HMAC-SHA256
   * of raw body using `ZEALY_WEBHOOK_SECRET`.
   *
   * @example
   * ```ts
   * await client.zealy.receiveWebhook({ body: { foo: 'bar' } });
   * ```
   */
  receiveWebhook(params: ZealyReceiveWebhookParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/api/zealy/webhook', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: { zealyWebhookAuth: true },
    });
  }
}

export type ZealyRetrieveResponse = { [key: string]: unknown };

export type ZealyCreateActionResponse = { [key: string]: unknown };

export interface ZealyCreateActionParams {
  action?: string;
}

export interface ZealyDeleteWebhookParams {
  webhookId: string;
}

export interface ZealyReceiveWebhookParams {
  body: { [key: string]: unknown };
}

export declare namespace Zealy {
  export {
    type ZealyRetrieveResponse as ZealyRetrieveResponse,
    type ZealyCreateActionResponse as ZealyCreateActionResponse,
    type ZealyCreateActionParams as ZealyCreateActionParams,
    type ZealyDeleteWebhookParams as ZealyDeleteWebhookParams,
    type ZealyReceiveWebhookParams as ZealyReceiveWebhookParams,
  };
}
