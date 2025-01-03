
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tdijrdrhceryogtrkklg.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaWpyZHJoY2VyeW9ndHJra2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MjU2MDgsImV4cCI6MjA1MTMwMTYwOH0.xQ6d0Qu2LD8RPW6fPn5jxq8RPKpR4FZDz3X66tckjkk"
const supabase = createClient(supabaseUrl, supabaseKey)
export default  supabase