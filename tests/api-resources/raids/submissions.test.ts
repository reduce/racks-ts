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

describe('resource submissions', () => {
  // Mock server tests are disabled
  test.skip('export', async () => {
    const responsePromise = client.raids.submissions.export('raidId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
