// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Authenticated user's own profile and keys
 */
export class Me extends APIResource {
  /**
   * Returns the authenticated user's profile, stats (cents earned/tipped), XP,
   * level, and default AI model.
   *
   * @example
   * ```ts
   * const me = await client.v1.me.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/api/v1/me', { ...options, __security: {} });
  }

  /**
   * Earned badges for the token owner
   *
   * @example
   * ```ts
   * const response = await client.v1.me.listBadges();
   * ```
   */
  listBadges(options?: RequestOptions): APIPromise<MeListBadgesResponse> {
    return this._client.get('/api/v1/me/badges', { ...options, __security: {} });
  }

  /**
   * Returns all circles the authenticated user belongs to, with role and timestamps.
   *
   * @example
   * ```ts
   * const response = await client.v1.me.listCircles();
   * ```
   */
  listCircles(options?: RequestOptions): APIPromise<MeListCirclesResponse> {
    return this._client.get('/api/v1/me/circles', { ...options, __security: {} });
  }
}

export interface MeRetrieveResponse {
  id?: string;

  bio?: string | null;

  createdAt?: string;

  defaultAiModel?: string | null;

  email?: string | null;

  image?: string | null;

  lastPostAt?: string | null;

  level?: number;

  name?: string | null;

  postCount?: number;

  streakDays?: number;

  /**
   * Lifetime earnings in cents
   */
  totalEarned?: number;

  /**
   * Lifetime tips given in cents
   */
  totalTipped?: number;

  username?: string | null;

  xp?: number;
}

export interface MeListBadgesResponse {
  badges?: Array<MeListBadgesResponse.Badge>;
}

export namespace MeListBadgesResponse {
  export interface Badge {
    description?: string | null;

    earnedAt?: string;

    emoji?: string | null;

    name?: string;

    slug?: string;

    xpThreshold?: number | null;
  }
}

export interface MeListCirclesResponse {
  circles?: Array<MeListCirclesResponse.Circle>;
}

export namespace MeListCirclesResponse {
  export interface Circle {
    id?: string;

    createdAt?: string;

    emoji?: string | null;

    isOwner?: boolean;

    isPrivate?: boolean;

    joinedAt?: string;

    name?: string;

    role?: 'OWNER' | 'ADMIN' | 'MEMBER';
  }
}

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeListBadgesResponse as MeListBadgesResponse,
    type MeListCirclesResponse as MeListCirclesResponse,
  };
}
