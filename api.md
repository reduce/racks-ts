# Meta

Types:

- <code><a href="./src/resources/meta.ts">MetaRetrieveOpenAPIResponse</a></code>
- <code><a href="./src/resources/meta.ts">MetaRetrieveRacksAPIResponse</a></code>

Methods:

- <code title="get /api/meta/openapi">client.meta.<a href="./src/resources/meta.ts">retrieveOpenAPI</a>() -> string</code>
- <code title="get /api/meta/racks-api">client.meta.<a href="./src/resources/meta.ts">retrieveRacksAPI</a>() -> unknown</code>

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

## Settings

# Zernio

# Raids

## Submissions

# Zealy

# Telegram
