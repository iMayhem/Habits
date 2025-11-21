const SUPABASE_URL = 'https://czeebkyxfsgwxxsailkn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZWVia3l4ZnNnd3h4c2FpbGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MjcxODAsImV4cCI6MjA3OTMwMzE4MH0.cFcEXDFmFiBAJErL8UIFpsNtGkjtpstwYdJSfI5Pepc';

function getDB() {
    return supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}