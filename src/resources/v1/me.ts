// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Read-only user API. Authenticate with **any** of:
 * - Key pair: `Authorization: Bearer <private-key-pem>` + `X-Client-Key: <public-key-pem>`
 * - PAT: `Authorization: Bearer racks_<64 hex>`
 * - Session JWT cookie (for on-site use — signed-in browser automatically sends this)
 */
export class Me extends APIResource {
  /**
   * Current user profile
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/api/v1/me', {
      ...options,
      __security: { secretKeyAuth: true, clientKeyAuth: true },
    });
  }

  /**
   * Earned badges
   */
  listBadges(options?: RequestOptions): APIPromise<MeListBadgesResponse> {
    return this._client.get('/api/v1/me/badges', {
      ...options,
      __security: { secretKeyAuth: true, clientKeyAuth: true },
    });
  }

  /**
   * Circle memberships
   */
  listCircles(options?: RequestOptions): APIPromise<MeListCirclesResponse> {
    return this._client.get('/api/v1/me/circles', {
      ...options,
      __security: { secretKeyAuth: true, clientKeyAuth: true },
    });
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
   * Cents
   */
  totalEarned?: number;

  /**
   * Cents
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

    emoji?: string;

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

    emoji?: string;

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
