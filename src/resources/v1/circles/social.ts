// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Social account connections and cross-posting via Zernio
 */
export class Social extends APIResource {
  /**
   * Returns active (non-disconnected) social accounts connected to this circle. Use
   * the `zernioAccountId` values with the publish endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.circles.social.listAccounts('id');
   * ```
   */
  listAccounts(id: string, options?: RequestOptions): APIPromise<SocialListAccountsResponse> {
    return this._client.get(path`/api/v1/circles/${id}/social/accounts`, options);
  }

  /**
   * Publish content directly to the circle's connected social accounts via Zernio.
   * Does **not** create a post in the circle feed — use
   * `POST /api/v1/circles/{id}/posts` with `crossPost: true` if you want both.
   *
   * **Authorization:** Circle API key, or user key / session from the circle owner
   * or an admin.
   *
   * **Rate limit:** 12 requests per minute (social posting tier). Zernio recommends
   * spacing posts at least 4 minutes apart per account to avoid platform-level
   * throttling.
   *
   * @example
   * ```ts
   * const response = await client.v1.circles.social.publish(
   *   'id',
   *   { content: 'We just hit 1000 members! LFG 🔥' },
   * );
   * ```
   */
  publish(id: string, body: SocialPublishParams, options?: RequestOptions): APIPromise<SocialPublishResponse> {
    return this._client.post(path`/api/v1/circles/${id}/social/publish`, { body, ...options });
  }
}

export interface SocialListAccountsResponse {
  accounts?: Array<SocialListAccountsResponse.Account>;
}

export namespace SocialListAccountsResponse {
  export interface Account {
    id?: string;

    avatarUrl?: string | null;

    connectedAt?: string;

    displayName?: string | null;

    platform?: string;

    /**
     * Use this ID with the publish endpoint
     */
    zernioAccountId?: string;
  }
}

export interface SocialPublishResponse {
  accountCount?: number;

  ok?: boolean;

  platforms?: Array<string>;

  /**
   * Zernio post ID
   */
  postId?: string;
}

export interface SocialPublishParams {
  /**
   * Text to publish (max 2000 chars)
   */
  content: string;

  /**
   * Zernio account IDs to post to (default all connected)
   */
  accounts?: Array<string>;

  /**
   * Media URL to attach to the post
   */
  mediaUrl?: string;
}

export declare namespace Social {
  export {
    type SocialListAccountsResponse as SocialListAccountsResponse,
    type SocialPublishResponse as SocialPublishResponse,
    type SocialPublishParams as SocialPublishParams
  };
}
