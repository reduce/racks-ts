# Meta

Types:

- <code><a href="./src/resources/meta.ts">MetaRetrieveOpenAPIResponse</a></code>
- <code><a href="./src/resources/meta.ts">MetaRetrieveRacksAPIResponse</a></code>

Methods:

- <code title="get /api/meta/openapi">client.meta.<a href="./src/resources/meta.ts">retrieveOpenAPI</a>() -> string</code>
- <code title="get /api/meta/racks-api">client.meta.<a href="./src/resources/meta.ts">retrieveRacksAPI</a>() -> MetaRetrieveRacksAPIResponse</code>

# V1

## Me

Types:

- <code><a href="./src/resources/v1/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/me.ts">MeListBadgesResponse</a></code>
- <code><a href="./src/resources/v1/me.ts">MeListCirclesResponse</a></code>

Methods:

- <code title="get /api/v1/me">client.v1.me.<a href="./src/resources/v1/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="get /api/v1/me/badges">client.v1.me.<a href="./src/resources/v1/me.ts">listBadges</a>() -> MeListBadgesResponse</code>
- <code title="get /api/v1/me/circles">client.v1.me.<a href="./src/resources/v1/me.ts">listCircles</a>() -> MeListCirclesResponse</code>

# User

## APIKeys

Types:

- <code><a href="./src/resources/user/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/user/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/user/api-keys.ts">APIKeyRevokeResponse</a></code>

Methods:

- <code title="post /api/user/api-keys">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /api/user/api-keys">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">list</a>() -> APIKeyListResponse</code>
- <code title="delete /api/user/api-keys/{id}">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">revoke</a>(id) -> APIKeyRevokeResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIChatResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIDelegateResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIListModelsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIRetrieveUsageResponse</a></code>

Methods:

- <code title="post /api/ai/chat">client.ai.<a href="./src/resources/ai/ai.ts">chat</a>({ ...params }) -> string</code>
- <code title="post /api/ai/delegate">client.ai.<a href="./src/resources/ai/ai.ts">delegate</a>({ ...params }) -> AIDelegateResponse</code>
- <code title="get /api/ai/models">client.ai.<a href="./src/resources/ai/ai.ts">listModels</a>() -> AIListModelsResponse</code>
- <code title="get /api/ai/usage">client.ai.<a href="./src/resources/ai/ai.ts">retrieveUsage</a>() -> AIRetrieveUsageResponse</code>

## Settings

Types:

- <code><a href="./src/resources/ai/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /api/ai/settings">client.ai.settings.<a href="./src/resources/ai/settings.ts">retrieve</a>() -> SettingRetrieveResponse</code>
- <code title="patch /api/ai/settings">client.ai.settings.<a href="./src/resources/ai/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>

# Zernio

Methods:

- <code title="delete /api/zernio/disconnect">client.zernio.<a href="./src/resources/zernio.ts">disconnectAccount</a>({ ...params }) -> void</code>
- <code title="get /api/zernio/callback">client.zernio.<a href="./src/resources/zernio.ts">oauthCallback</a>({ ...params }) -> void</code>
- <code title="get /api/zernio/connect">client.zernio.<a href="./src/resources/zernio.ts">startOAuth</a>({ ...params }) -> void</code>

# Raids

## Submissions

Types:

- <code><a href="./src/resources/raids/submissions.ts">SubmissionExportResponse</a></code>

Methods:

- <code title="get /api/raids/{raidId}/submissions/export">client.raids.submissions.<a href="./src/resources/raids/submissions.ts">export</a>(raidID) -> string</code>

# Zealy

Types:

- <code><a href="./src/resources/zealy.ts">ZealyRetrieveResponse</a></code>
- <code><a href="./src/resources/zealy.ts">ZealyCreateActionResponse</a></code>

Methods:

- <code title="get /api/zealy">client.zealy.<a href="./src/resources/zealy.ts">retrieve</a>() -> ZealyRetrieveResponse</code>
- <code title="post /api/zealy">client.zealy.<a href="./src/resources/zealy.ts">createAction</a>({ ...params }) -> ZealyCreateActionResponse</code>
- <code title="delete /api/zealy">client.zealy.<a href="./src/resources/zealy.ts">deleteWebhook</a>({ ...params }) -> void</code>
- <code title="post /api/zealy/webhook">client.zealy.<a href="./src/resources/zealy.ts">receiveWebhook</a>({ ...params }) -> void</code>

# Telegram

Methods:

- <code title="post /api/telegram/webhook">client.telegram.<a href="./src/resources/telegram.ts">setWebhook</a>({ ...params }) -> void</code>
