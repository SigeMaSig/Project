// conn.js
const {createClient} = require('@supabase/supabase-js');
const SUPABASE_URL='https://evfyevawjqmcnheshjcx.supabase.co'
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2ZnlldmF3anFtY25oZXNoamN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NjcxODIsImV4cCI6MjA1NjU0MzE4Mn0.dYK4XkwRxHzzSfpZtozQjhb7OqNs3jxl82ff8gCR3Tc'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;