// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from '../v1';
import * as PostsAPI from './posts';
import { Post, PostCreateParams, PostCreateResponse, PostListParams, PostListResponse, Posts } from './posts';
import * as QuestsAPI from './quests';
import { Pagination, Quest, QuestCreateParams, QuestListParams, QuestListResponse, Quests } from './quests';
import * as SocialAPI from './social';
import { Social, SocialListAccountsResponse, SocialPublishParams, SocialPublishResponse } from './social';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Circle-scoped data (members, quests, leaderboard)
 */
export class Circles extends APIResource {
  quests: QuestsAPI.Quests = new QuestsAPI.Quests(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  social: SocialAPI.Social = new SocialAPI.Social(this._client);

  /**
   * Returns the circle's profile and aggregate counts (members, quests, posts).
   *
   * The caller must be a member of the circle, or use a circle API key scoped to it.
   *
   * @example
   * ```ts
   * const circle = await client.v1.circles.retrieve(
   *   'clxxxxxxxxxxxxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CircleRetrieveResponse> {
    return this._client.get(path`/api/v1/circles/${id}`, options);
  }

  /**
   * Returns the circle member list with username, role, XP, level, and join date.
   * Ordered by role (owner first) then join date.
   *
   * @example
   * ```ts
   * const response = await client.v1.circles.listMembers('id');
   * ```
   */
  listMembers(id: string, query: CircleListMembersParams | null | undefined = {}, options?: RequestOptions): APIPromise<CircleListMembersResponse> {
    return this._client.get(path`/api/v1/circles/${id}/members`, { query, ...options });
  }

  /**
   * Returns circle members ranked by XP descending.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.circles.retrieveLeaderboard('id');
   * ```
   */
  retrieveLeaderboard(id: string, query: CircleRetrieveLeaderboardParams | null | undefined = {}, options?: RequestOptions): APIPromise<CircleRetrieveLeaderboardResponse> {
    return this._client.get(path`/api/v1/circles/${id}/leaderboard`, { query, ...options });
  }
}

export interface CircleRetrieveResponse {
  id?: string;

  createdAt?: string;

  description?: string | null;

  discordUrl?: string | null;

  emoji?: string | null;

  isPrivate?: boolean;

  memberCount?: number;

  name?: string;

  ownerId?: string;

  postCount?: number;

  questCount?: number;

  xUrl?: string | null;
}

export interface CircleListMembersResponse extends QuestsAPI.Pagination {
  members?: Array<CircleListMembersResponse.Member>;
}

export namespace CircleListMembersResponse {
  export interface Member {
    id?: string;

    image?: string | null;

    joinedAt?: string;

    level?: number;

    name?: string | null;

    role?: 'OWNER' | 'ADMIN' | 'MEMBER';

    streakDays?: number;

    username?: string | null;

    xp?: number;
  }
}

export interface CircleRetrieveLeaderboardResponse {
  entries?: Array<CircleRetrieveLeaderboardResponse.Entry>;
}

export namespace CircleRetrieveLeaderboardResponse {
  export interface Entry extends V1API.LeaderboardEntry {
    id?: string;

    joinedAt?: string;

    level?: number;

    role?: 'OWNER' | 'ADMIN' | 'MEMBER';
  }
}

export interface CircleListMembersParams {
  /**
   * Max results (1–100, default 50)
   */
  limit?: number;

  /**
   * Pagination offset (default 0)
   */
  offset?: number;
}

export interface CircleRetrieveLeaderboardParams {
  /**
   * Max results (1–100, default 25)
   */
  limit?: number;
}

Circles.Quests = Quests;
Circles.Posts = Posts;
Circles.Social = Social;

export declare namespace Circles {
  export {
    type CircleRetrieveResponse as CircleRetrieveResponse,
    type CircleListMembersResponse as CircleListMembersResponse,
    type CircleRetrieveLeaderboardResponse as CircleRetrieveLeaderboardResponse,
    type CircleListMembersParams as CircleListMembersParams,
    type CircleRetrieveLeaderboardParams as CircleRetrieveLeaderboardParams
  };

  export {
    Quests as Quests,
    type Pagination as Pagination,
    type Quest as Quest,
    type QuestListResponse as QuestListResponse,
    type QuestCreateParams as QuestCreateParams,
    type QuestListParams as QuestListParams
  };

  export {
    Posts as Posts,
    type Post as Post,
    type PostCreateResponse as PostCreateResponse,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams
  };

  export {
    Social as Social,
    type SocialListAccountsResponse as SocialListAccountsResponse,
    type SocialPublishResponse as SocialPublishResponse,
    type SocialPublishParams as SocialPublishParams
  };
}
