// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Authenticated user's own profile and keys
 */
export class APIKeys extends APIResource {
  /**
   * Creates a new PAT or Ed25519 key pair. The plaintext key / private key PEM is
   * returned **once** and never stored.
   *
   * @example
   * ```ts
   * const apiKey = await client.user.apiKeys.create();
   * ```
   */
  create(body: APIKeyCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/api/user/api-keys', { body, ...options, __security: {  } });
  }

  /**
   * Returns metadata for all your API keys (PATs and Ed25519 key pairs). The
   * plaintext key is **never** returned here — only on creation.
   *
   * @example
   * ```ts
   * const apiKeys = await client.user.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/api/user/api-keys', { ...options, __security: {  } });
  }

  /**
   * Permanently revokes one of your API keys. This cannot be undone.
   *
   * @example
   * ```ts
   * const response = await client.user.apiKeys.revoke('id');
   * ```
   */
  revoke(id: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.delete(path`/api/user/api-keys/${id}`, { ...options, __security: {  } });
  }
}

export interface APIKeyCreateResponse {
  id?: string;

  /**
   * SHA256 fingerprint of the public key (Ed25519 keys only)
   */
  fingerprint?: string | null;

  /**
   * Full `racks_…` token (PAT) or private key PEM (Ed25519) — store it now, it will
   * not be shown again
   */
  key?: string;

  /**
   * Ed25519 public key PEM (Ed25519 keys only)
   */
  publicKeyPem?: string | null;
}

export interface APIKeyListResponse {
  keys?: Array<APIKeyListResponse.Key>;
}

export namespace APIKeyListResponse {
  export interface Key {
    id?: string;

    createdAt?: string;

    lastUsedAt?: string | null;

    name?: string | null;

    /**
     * First 8 hex chars of the secret (safe to display)
     */
    prefix?: string;

    type?: 'PAT' | 'ED25519';
  }
}

export interface APIKeyRevokeResponse {
  deleted?: boolean;
}

export interface APIKeyCreateParams {
  /**
   * Optional label for the key (max 64 characters)
   */
  name?: string;

  /**
   * Key type — PAT for Bearer tokens, ED25519 for asymmetric signing
   */
  type?: 'PAT' | 'ED25519';
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams
  };
}
