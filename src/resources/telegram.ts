// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Inbound provider webhooks
 */
export class Telegram extends APIResource {
  /**
   * Telegram Bot updates
   */
  setWebhook(params: TelegramSetWebhookParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/api/telegram/webhook', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: { telegramWebhookAuth: true },
    });
  }
}

export interface TelegramSetWebhookParams {
  /**
   * Telegram Update
   */
  body: { [key: string]: unknown };
}

export declare namespace Telegram {
  export { type TelegramSetWebhookParams as TelegramSetWebhookParams };
}
