import { createClient } from '@supabase/supabase-js';

const url = process.env.VUE_APP_URL
const pass = process.env.VUE_APP_KEY

const supabase = createClient(url, pass);

export default supabase;