// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuestsAPI from './quests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Circle-scoped data (members, quests, leaderboard)
 */
export class Posts extends APIResource {
  /**
   * Creates a new text post in the circle feed. Optionally cross-posts to connected
   * social accounts (Zernio).
   *
   * **Authorization:** Circle API key (posts as circle owner) or a user key /
   * session from any circle member.
   *
   * **Rate limit:** 30 requests per minute (write tier).
   *
   * @example
   * ```ts
   * const post = await client.v1.circles.posts.create('id', {
   *   content: 'GM frens! Big news dropping today.',
   * });
   * ```
   */
  create(id: string, body: PostCreateParams, options?: RequestOptions): APIPromise<PostCreateResponse> {
    return this._client.post(path`/api/v1/circles/${id}/posts`, { body, ...options });
  }

  /**
   * Returns posts in the circle feed, newest first. Supports offset pagination.
   *
   * @example
   * ```ts
   * const posts = await client.v1.circles.posts.list('id');
   * ```
   */
  list(id: string, query: PostListParams | null | undefined = {}, options?: RequestOptions): APIPromise<PostListResponse> {
    return this._client.get(path`/api/v1/circles/${id}/posts`, { query, ...options });
  }
}

export interface Post {
  id?: string;

  author?: Post.Author | null;

  content?: string;

  createdAt?: string;

  mediaType?: 'TEXT' | 'IMAGE' | 'VIDEO';

  mediaUrl?: string | null;
}

export namespace Post {
  export interface Author {
    id?: string;

    image?: string | null;

    name?: string | null;

    username?: string | null;
  }
}

export interface PostCreateResponse extends Post {
  /**
   * Cross-post result (only present when crossPost is true)
   */
  social?: PostCreateResponse.Social | null;
}

export namespace PostCreateResponse {
  /**
   * Cross-post result (only present when crossPost is true)
   */
  export interface Social {
    error?: string;

    ok?: boolean;

    postId?: string;
  }
}

export interface PostListResponse extends QuestsAPI.Pagination {
  posts?: Array<Post>;
}

export interface PostCreateParams {
  /**
   * Post text content (max 2000 chars)
   */
  content: string;

  /**
   * Also publish to connected social accounts
   */
  crossPost?: boolean;

  /**
   * Media URL to include in cross-posts
   */
  mediaUrl?: string;

  /**
   * Specific Zernio account IDs to cross-post to (default all connected)
   */
  socialAccounts?: Array<string>;
}

export interface PostListParams {
  /**
   * Max results (1–100, default 20)
   */
  limit?: number;

  /**
   * Pagination offset (default 0)
   */
  offset?: number;
}

export declare namespace Posts {
  export {
    type Post as Post,
    type PostCreateResponse as PostCreateResponse,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams
  };
}
