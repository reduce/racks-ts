// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Circle-scoped data (members, quests, leaderboard)
 */
export class Quests extends APIResource {
  /**
   * Creates a new quest for the circle.
   *
   * **Authorization:** Requires a circle API key, or a user key / session from the
   * **circle owner**. Only the circle owner can create quests via the API.
   *
   * **Quest types:** | `questType` | Required field | Description | |---|---|---| |
   * `QUOTE_TWEET` (default) | `targetUrl` | Quote-tweet a specific post | |
   * `RETWEET` | `targetUrl` | Retweet a specific post | | `LIKE` | `targetUrl` |
   * Like a specific post | | `FOLLOW` | `targetHandle` | Follow a specific @handle |
   * | `TELEGRAM_REACTION` | `targetUrl` | React to a Telegram message |
   *
   * @example
   * ```ts
   * const quest = await client.v1.circles.quests.create('id', {
   *   title: 'Quote-tweet our launch post',
   * });
   * ```
   */
  create(id: string, body: QuestCreateParams, options?: RequestOptions): APIPromise<Quest> {
    return this._client.post(path`/api/v1/circles/${id}/quests`, { body, ...options });
  }

  /**
   * Returns quests belonging to the circle, ordered by creation date descending.
   * Supports status filtering and offset pagination.
   *
   * @example
   * ```ts
   * const quests = await client.v1.circles.quests.list('id');
   * ```
   */
  list(
    id: string,
    query: QuestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuestListResponse> {
    return this._client.get(path`/api/v1/circles/${id}/quests`, { query, ...options });
  }
}

export interface Pagination {
  /**
   * Page size used for this response
   */
  limit: number;

  /**
   * Offset used for this response
   */
  offset: number;

  /**
   * Total number of matching records
   */
  total: number;
}

export interface Quest {
  id?: string;

  createdAt?: string;

  deadline?: string | null;

  description?: string | null;

  /**
   * Total reward pool in cents
   */
  rewardPoolCents?: number;

  status?: 'ACTIVE' | 'ENDED' | 'CANCELLED';

  submissionCount?: number;

  targetUrl?: string | null;

  title?: string;
}

export interface QuestListResponse extends Pagination {
  quests?: Array<Quest>;
}

export interface QuestCreateParams {
  /**
   * Quest title shown to members
   */
  title: string;

  /**
   * Optional deadline after which the quest closes
   */
  deadline?: string | null;

  /**
   * Optional longer description
   */
  description?: string | null;

  /**
   * Type of on-chain action required
   */
  questType?: 'QUOTE_TWEET' | 'RETWEET' | 'LIKE' | 'FOLLOW' | 'TELEGRAM_REACTION';

  /**
   * Total reward pool in cents (default 0)
   */
  rewardPool?: number;

  /**
   * Required for FOLLOW — X/Twitter @handle (with or without @)
   */
  targetHandle?: string;

  /**
   * Required for QUOTE_TWEET, RETWEET, LIKE, and TELEGRAM_REACTION
   */
  targetUrl?: string;
}

export interface QuestListParams {
  /**
   * Max results (1–100, default 20)
   */
  limit?: number;

  /**
   * Pagination offset (default 0)
   */
  offset?: number;

  /**
   * Filter by quest status
   */
  status?: 'ACTIVE' | 'ENDED' | 'CANCELLED';
}

export declare namespace Quests {
  export {
    type Pagination as Pagination,
    type Quest as Quest,
    type QuestListResponse as QuestListResponse,
    type QuestCreateParams as QuestCreateParams,
    type QuestListParams as QuestListParams,
  };
}
