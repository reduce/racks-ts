// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Raid management and participation. Publicly available to all authenticated users — no feature flag required.
 *
 * **REST endpoints** — CSV export for raid managers (see paths below).
 *
 * **Server Actions** (called from the Next.js app):
 * - `createRaid(data)` — create a raid in a circle (circle owner only)
 * - `submitToRaid(raidId, tweetUrl)` — submit an X/Twitter post as proof
 * - `updateSubmissionViews(submissionId, views, reward?)` — update view count and optional reward for a submission (circle admin/owner)
 * - `endRaid(raidId)` — close a raid (circle owner only)
 */
export class Submissions extends APIResource {
  /**
   * Download all submissions for a raid as a CSV file. Caller must be the circle
   * owner, a circle admin, or a super admin.
   *
   * CSV columns: `user_username`, `user_name`, `user_email`, `tweet_url`,
   * `tweet_username`, `tweet_id`, `views`, `reward_cents`, `submitted_at`.
   */
  export(raidID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/api/raids/${raidID}/submissions/export`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
      __security: {},
    });
  }
}

export type SubmissionExportResponse = string;

export declare namespace Submissions {
  export { type SubmissionExportResponse as SubmissionExportResponse };
}
