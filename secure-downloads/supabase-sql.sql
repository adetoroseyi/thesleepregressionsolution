-- Run this in Supabase SQL Editor
-- Creates a table to track download tokens per purchase

CREATE TABLE download_tokens (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_id UUID REFERENCES purchases(id),
  customer_email TEXT NOT NULL,
  product_id TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  download_count INTEGER DEFAULT 0,
  max_downloads INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE download_tokens ENABLE ROW LEVEL SECURITY;

-- Index for fast token lookups
CREATE INDEX idx_download_tokens_token ON download_tokens(token);
CREATE INDEX idx_download_tokens_email ON download_tokens(customer_email);
