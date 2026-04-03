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

describe('resource zealy', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.zealy.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createAction', async () => {
    const responsePromise = client.zealy.createAction();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createAction: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.zealy.createAction({ action: 'register-webhook' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Racks.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteWebhook: only required params', async () => {
    const responsePromise = client.zealy.deleteWebhook({ webhookId: 'webhookId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteWebhook: required and optional params', async () => {
    const response = await client.zealy.deleteWebhook({ webhookId: 'webhookId' });
  });

  // Mock server tests are disabled
  test.skip('receiveWebhook: only required params', async () => {
    const responsePromise = client.zealy.receiveWebhook({ body: { foo: 'bar' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('receiveWebhook: required and optional params', async () => {
    const response = await client.zealy.receiveWebhook({ body: { foo: 'bar' } });
  });
});
