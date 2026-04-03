// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubmissionsAPI from './submissions';
import { SubmissionExportResponse, Submissions } from './submissions';

export class Raids extends APIResource {
  submissions: SubmissionsAPI.Submissions = new SubmissionsAPI.Submissions(this._client);
}

Raids.Submissions = Submissions;

export declare namespace Raids {
  export { Submissions as Submissions, type SubmissionExportResponse as SubmissionExportResponse };
}
