// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Racks } from '../client';

export abstract class APIResource {
  protected _client: Racks;

  constructor(client: Racks) {
    this._client = client;
  }
}
