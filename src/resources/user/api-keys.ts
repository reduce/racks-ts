// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Developer credential management (browser session required)
 */
export class APIKeys extends APIResource {
  /**
   * Creates either a **personal access token (PAT)** or an **Ed25519 key pair**,
   * depending on the `type` field.
   *
   * - `type: "pat"` — generates a PAT (`racks_…`). The full secret is returned once
   *   in `key`.
   * - `type: "keypair"` — generates an Ed25519 key pair. The private key PEM is
   *   returned once in `privateKeyPem`. The public key PEM is stored and always
   *   retrievable.
   *
   * **Save the secret/private key immediately** — it is never shown again.
   *
   * Maximum 10 credentials per user across both types.
   */
  create(
    body: APIKeyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/api/user/api-keys', { body, ...options, __security: {} });
  }

  /**
   * Returns all credentials for the authenticated user. Secrets and private keys are
   * **never** returned by this endpoint; only non-sensitive metadata is included.
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/api/user/api-keys', { ...options, __security: {} });
  }

  /**
   * Revoke an API key
   */
  revoke(id: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.delete(path`/api/user/api-keys/${id}`, { ...options, __security: {} });
  }
}

/**
 * Response shape differs by `type`:
 *
 * - PAT: `key` contains the full `racks_…` secret (shown once).
 * - Key pair: `privateKeyPem` contains the PKCS#8 private key PEM (shown once);
 *   `publicKeyPem` and `fingerprint` are always available.
 */
export interface APIKeyCreateResponse {
  id: string;

  createdAt: string;

  prefix: string;

  type: 'PAT' | 'KEYPAIR';

  /**
   * Reminder that secrets are shown only once
   */
  warning: string;

  /**
   * **Key pair only.** `SHA256:<base64>` fingerprint for identification.
   */
  fingerprint?: string | null;

  /**
   * **PAT only.** Full `racks_<64 hex>` token. Shown once — save it immediately.
   */
  key?: string | null;

  name?: string | null;

  /**
   * **Key pair only.** PKCS#8 Ed25519 private key PEM. Shown once — save it
   * immediately. Use as `Authorization: Bearer <this value>` (with literal `\n`
   * preserved).
   */
  privateKeyPem?: string | null;

  /**
   * **Key pair only.** SPKI Ed25519 public key PEM. Always retrievable from the list
   * endpoint. Send as `X-Client-Key: <this value>` alongside every request.
   */
  publicKeyPem?: string | null;
}

export interface APIKeyListResponse {
  keys?: Array<APIKeyListResponse.Key>;
}

export namespace APIKeyListResponse {
  /**
   * Metadata for a single credential (PAT or key pair). Secrets are never included.
   */
  export interface Key {
    /**
     * Unique credential ID (cuid)
     */
    id?: string;

    createdAt?: string;

    /**
     * `SHA256:<base64>` fingerprint of the public key. Present only for `KEYPAIR`.
     */
    fingerprint?: string | null;

    lastUsedAt?: string | null;

    /**
     * Optional user-supplied label
     */
    name?: string | null;

    /**
     * First 8 hex chars of the token secret (PAT) or last 16 hex chars of the
     * public-key fingerprint (key pair) — for UI display only.
     */
    prefix?: string;

    /**
     * SPKI Ed25519 public key PEM. Present only for `KEYPAIR` credentials. Send this
     * in the `X-Client-Key` header when authenticating.
     */
    publicKeyPem?: string | null;

    /**
     * `PAT` — personal access token; `KEYPAIR` — Ed25519 key pair
     */
    type?: 'PAT' | 'KEYPAIR';
  }
}

export interface APIKeyRevokeResponse {
  ok?: boolean;
}

export interface APIKeyCreateParams {
  /**
   * Optional human-readable label
   */
  name?: string;

  /**
   * `pat` — personal access token (single opaque bearer token). `keypair` — Ed25519
   * asymmetric key pair (private key + public key).
   */
  type?: 'pat' | 'keypair';
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
