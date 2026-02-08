# Supabase Configuration for Blog Comments

## Setup Instructions

1. **Create a Supabase Account**
   - Go to https://supabase.com
   - Sign up for a free account
   - Create a new project

2. **Get Your Credentials**
   - Go to Project Settings > API
   - Copy your Project URL and anon/public key
   - Add them to `.env` file

3. **Create Comments Table**
   Run this SQL in your Supabase SQL Editor:

   ```sql
   CREATE TABLE comments (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT,
     comment TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable Row Level Security
   ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

   -- Allow anyone to read comments
   CREATE POLICY "Anyone can read comments"
     ON comments FOR SELECT
     USING (true);

   -- Allow anyone to insert comments
   CREATE POLICY "Anyone can insert comments"
     ON comments FOR INSERT
     WITH CHECK (true);
   ```

4. **Update Your Blog**
   - Fill in your credentials in `.env`
   - The blog will automatically use Supabase for comments

## Environment Variables

```
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

## Security Note

Never commit your `.env` file to version control!
Add `.env` to your `.gitignore` file.
