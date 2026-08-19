import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default worker cache. Optional R2 incremental cache can be added later:
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
// export default defineCloudflareConfig({ incrementalCache: r2IncrementalCache });
// Requires an R2 bucket bound as NEXT_INC_CACHE_R2_BUCKET.
// [VERIFY against current OpenNext Cloudflare caching docs]
export default defineCloudflareConfig();
