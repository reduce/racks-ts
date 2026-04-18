// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings';
import { Settings } from './settings';

export class AI extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

AI.Settings = Settings;

export declare namespace AI {
  export { Settings as Settings };
}
