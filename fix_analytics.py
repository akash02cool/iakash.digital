import re

files_to_fix = [
    'BLOGPAGE.html',
    'postpage.html',
    'application.html'
]

for filename in files_to_fix:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match the old analytics section with all its variations
        # This matches everything from the first Vercel Web Analytics comment to the end of the duplicate scripts
        old_pattern = r'<!-- Vercel Web Analytics -->.*?<script defer src="https://cdn\.vercel-insights\.com/v1/script\.js"></script>'
        
        # Replace with clean version
        new_content = re.sub(
            old_pattern,
            '<!-- Vercel Web Analytics -->\n<script defer src="https://cdn.vercel-insights.com/v1/script.js"></script>',
            content,
            count=1,
            flags=re.DOTALL
        )
        
        with open(filename, 'w', encoding='utf-8', newline='') as f:
            f.write(new_content)
        
        print(f"Fixed {filename}")
    except FileNotFoundError:
        print(f"File {filename} not found, skipping")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Done!")
