import os
import datetime

# Step 1: Create a simple file
today = datetime.date.today().isoformat()
file_name = f"daily_contribution_{today}.txt"

with open(file_name, "w") as file:
    file.write(f"Daily contribution for {today}: Practicing Machine Learning!")

# Step 2: Git add, commit, and push
os.system("git add .")
os.system(f'git commit -m "Daily contribution on {today}"')
os.system("git push origin main")
