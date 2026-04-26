// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Racks from 'racks';

const client = new Racks({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource quests', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.circles.quests.create('id', { title: 'Quote-tweet our launch post' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.circles.quests.create('id', {
    title: 'Quote-tweet our launch post',
    deadline: '2026-05-01T00:00:00Z',
    description: 'Quote-tweet with your thoughts to earn 500 XP',
    questType: 'QUOTE_TWEET',
    rewardPool: 5000,
    targetHandle: 'racks_cash',
    targetUrl: 'https://x.com/racks_cash/status/1234567890',
  });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.circles.quests.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.circles.quests.list('id', {
    limit: 1,
    offset: 0,
    status: 'ACTIVE',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Racks.NotFoundError);
  });
});
