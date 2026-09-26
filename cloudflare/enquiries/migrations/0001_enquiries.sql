CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  digest TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  payload TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  next_attempt INTEGER NOT NULL,
  lease_until INTEGER NOT NULL DEFAULT 0,
  provider_id TEXT,
  last_error TEXT
);
CREATE INDEX IF NOT EXISTS enquiry_outbox ON enquiries(status, next_attempt);
CREATE TABLE IF NOT EXISTS rate_limits (
  bucket TEXT PRIMARY KEY,
  hits INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS daily_metrics (
  day TEXT NOT NULL,
  event TEXT NOT NULL,
  service TEXT NOT NULL DEFAULT '',
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(day, event, service)
);
