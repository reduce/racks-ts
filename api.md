# Meta

Types:

- <code><a href="./src/resources/meta.ts">MetaRetrieveOpenAPIResponse</a></code>
- <code><a href="./src/resources/meta.ts">MetaRetrieveRacksAPIResponse</a></code>

Methods:

- <code title="get /api/meta/openapi">client.meta.<a href="./src/resources/meta.ts">retrieveOpenAPI</a>() -> string</code>
- <code title="get /api/meta/racks-api">client.meta.<a href="./src/resources/meta.ts">retrieveRacksAPI</a>() -> unknown</code>

# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">LeaderboardEntry</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1RetrieveLeaderboardResponse</a></code>

Methods:

- <code title="get /api/v1/leaderboard">client.v1.<a href="./src/resources/v1/v1.ts">retrieveLeaderboard</a>({ ...params }) -> V1RetrieveLeaderboardResponse</code>

## Me

Types:

- <code><a href="./src/resources/v1/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/me.ts">MeListBadgesResponse</a></code>
- <code><a href="./src/resources/v1/me.ts">MeListCirclesResponse</a></code>

Methods:

- <code title="get /api/v1/me">client.v1.me.<a href="./src/resources/v1/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="get /api/v1/me/badges">client.v1.me.<a href="./src/resources/v1/me.ts">listBadges</a>() -> MeListBadgesResponse</code>
- <code title="get /api/v1/me/circles">client.v1.me.<a href="./src/resources/v1/me.ts">listCircles</a>() -> MeListCirclesResponse</code>

## Circles

Types:

- <code><a href="./src/resources/v1/circles/circles.ts">CircleRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/circles/circles.ts">CircleListMembersResponse</a></code>
- <code><a href="./src/resources/v1/circles/circles.ts">CircleRetrieveLeaderboardResponse</a></code>

Methods:

- <code title="get /api/v1/circles/{id}">client.v1.circles.<a href="./src/resources/v1/circles/circles.ts">retrieve</a>(id) -> CircleRetrieveResponse</code>
- <code title="get /api/v1/circles/{id}/members">client.v1.circles.<a href="./src/resources/v1/circles/circles.ts">listMembers</a>(id, { ...params }) -> CircleListMembersResponse</code>
- <code title="get /api/v1/circles/{id}/leaderboard">client.v1.circles.<a href="./src/resources/v1/circles/circles.ts">retrieveLeaderboard</a>(id, { ...params }) -> CircleRetrieveLeaderboardResponse</code>

### Quests

Types:

- <code><a href="./src/resources/v1/circles/quests.ts">Pagination</a></code>
- <code><a href="./src/resources/v1/circles/quests.ts">Quest</a></code>
- <code><a href="./src/resources/v1/circles/quests.ts">QuestListResponse</a></code>

Methods:

- <code title="post /api/v1/circles/{id}/quests">client.v1.circles.quests.<a href="./src/resources/v1/circles/quests.ts">create</a>(id, { ...params }) -> Quest</code>
- <code title="get /api/v1/circles/{id}/quests">client.v1.circles.quests.<a href="./src/resources/v1/circles/quests.ts">list</a>(id, { ...params }) -> QuestListResponse</code>

### Posts

Types:

- <code><a href="./src/resources/v1/circles/posts.ts">Post</a></code>
- <code><a href="./src/resources/v1/circles/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/v1/circles/posts.ts">PostListResponse</a></code>

Methods:

- <code title="post /api/v1/circles/{id}/posts">client.v1.circles.posts.<a href="./src/resources/v1/circles/posts.ts">create</a>(id, { ...params }) -> PostCreateResponse</code>
- <code title="get /api/v1/circles/{id}/posts">client.v1.circles.posts.<a href="./src/resources/v1/circles/posts.ts">list</a>(id, { ...params }) -> PostListResponse</code>

### Social

Types:

- <code><a href="./src/resources/v1/circles/social.ts">SocialListAccountsResponse</a></code>
- <code><a href="./src/resources/v1/circles/social.ts">SocialPublishResponse</a></code>

Methods:

- <code title="get /api/v1/circles/{id}/social/accounts">client.v1.circles.social.<a href="./src/resources/v1/circles/social.ts">listAccounts</a>(id) -> SocialListAccountsResponse</code>
- <code title="post /api/v1/circles/{id}/social/publish">client.v1.circles.social.<a href="./src/resources/v1/circles/social.ts">publish</a>(id, { ...params }) -> SocialPublishResponse</code>

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

# Circles

## APIKeys

Types:

- <code><a href="./src/resources/circles/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/circles/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/circles/api-keys.ts">APIKeyRevokeResponse</a></code>

Methods:

- <code title="post /api/circles/{id}/api-keys">client.circles.apiKeys.<a href="./src/resources/circles/api-keys.ts">create</a>(id, { ...params }) -> APIKeyCreateResponse</code>
- <code title="get /api/circles/{id}/api-keys">client.circles.apiKeys.<a href="./src/resources/circles/api-keys.ts">list</a>(id) -> APIKeyListResponse</code>
- <code title="delete /api/circles/{id}/api-keys/{keyId}">client.circles.apiKeys.<a href="./src/resources/circles/api-keys.ts">revoke</a>(keyID, { ...params }) -> APIKeyRevokeResponse</code>
