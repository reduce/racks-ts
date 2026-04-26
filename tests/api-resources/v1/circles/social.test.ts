// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Racks from 'racks';

const client = new Racks({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource social', () => {
  // Mock server tests are disabled
  test.skip('listAccounts', async () => {
    const responsePromise = client.v1.circles.social.listAccounts('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: only required params', async () => {
    const responsePromise = client.v1.circles.social.publish('id', { content: 'We just hit 1000 members! LFG 🔥' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publish: required and optional params', async () => {
    const response = await client.v1.circles.social.publish('id', {
    content: 'We just hit 1000 members! LFG 🔥',
    accounts: ['string'],
    mediaUrl: 'mediaUrl',
  });
  });
});
