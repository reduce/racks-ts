// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeAPI from './me';
import { Me, MeListBadgesResponse, MeListCirclesResponse, MeRetrieveResponse } from './me';
import * as CirclesAPI from './circles/circles';
import { CircleListMembersParams, CircleListMembersResponse, CircleRetrieveLeaderboardParams, CircleRetrieveLeaderboardResponse, CircleRetrieveResponse, Circles } from './circles/circles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Global XP leaderboard
 */
export class V1 extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  circles: CirclesAPI.Circles = new CirclesAPI.Circles(this._client);

  /**
   * Returns the top users platform-wide, ranked by XP descending.
   *
   * @example
   * ```ts
   * const response = await client.v1.retrieveLeaderboard();
   * ```
   */
  retrieveLeaderboard(query: V1RetrieveLeaderboardParams | null | undefined = {}, options?: RequestOptions): APIPromise<V1RetrieveLeaderboardResponse> {
    return this._client.get('/api/v1/leaderboard', { query, ...options, __security: {  } });
  }
}

export interface LeaderboardEntry {
  image?: string | null;

  name?: string | null;

  rank?: number;

  streakDays?: number;

  username?: string | null;

  xp?: number;
}

export interface V1RetrieveLeaderboardResponse {
  entries?: Array<LeaderboardEntry>;
}

export interface V1RetrieveLeaderboardParams {
  /**
   * Max results (1–100, default 25)
   */
  limit?: number;
}

V1.Me = Me;
V1.Circles = Circles;

export declare namespace V1 {
  export {
    type LeaderboardEntry as LeaderboardEntry,
    type V1RetrieveLeaderboardResponse as V1RetrieveLeaderboardResponse,
    type V1RetrieveLeaderboardParams as V1RetrieveLeaderboardParams
  };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeListBadgesResponse as MeListBadgesResponse,
    type MeListCirclesResponse as MeListCirclesResponse
  };

  export {
    Circles as Circles,
    type CircleRetrieveResponse as CircleRetrieveResponse,
    type CircleListMembersResponse as CircleListMembersResponse,
    type CircleRetrieveLeaderboardResponse as CircleRetrieveLeaderboardResponse,
    type CircleListMembersParams as CircleListMembersParams,
    type CircleRetrieveLeaderboardParams as CircleRetrieveLeaderboardParams
  };
}
