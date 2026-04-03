// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Racks from 'racks';

const client = new Racks({
  secret: 'My Secret',
  publicKey: 'My Public Key',
  apiKey: 'My API Key',
  webhookSignature: 'My Webhook Signature',
  webhookSecret: 'My Webhook Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource zernio', () => {
  // Mock server tests are disabled
  test.skip('disconnectAccount: only required params', async () => {
    const responsePromise = client.zernio.disconnectAccount({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('disconnectAccount: required and optional params', async () => {
    const response = await client.zernio.disconnectAccount({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('oauthCallback', async () => {
    const responsePromise = client.zernio.oauthCallback();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('oauthCallback: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.zernio.oauthCallback(
        { platform: 'platform', userId: 'userId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Racks.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('startOAuth: only required params', async () => {
    const responsePromise = client.zernio.startOAuth({ platform: 'platform' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('startOAuth: required and optional params', async () => {
    const response = await client.zernio.startOAuth({ platform: 'platform' });
  });
});
