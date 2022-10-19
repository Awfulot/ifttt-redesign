import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY


export const supabase = createClient(supabaseUrl, supabaseKey)