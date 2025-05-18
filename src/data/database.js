
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://trxnkmbyrijefjtravky.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyeG5rbWJ5cmlqZWZqdHJhdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NDU1OTQsImV4cCI6MjA2MjQyMTU5NH0.w8bQvjub-Tyd45nBQvuTdbi7Eu1obBa4HOJ4QDDp6Vg';

export const supabase = createClient(supabaseUrl, supabaseKey, { db: { schema: 'public' } });