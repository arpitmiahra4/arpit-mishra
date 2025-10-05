#!/bin/bash

# Stop the script if any command fails
set -e

# Check for changes
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to commit."
  exit 0
fi

# Loop through all changed or new files
for file in $(git ls-files -m -o --exclude-standard); do
  git add "$file"
  filename=$(basename "$file")
  commit_message="Adding: $filename full fixed code at once to the codebase"
  git commit -m "$commit_message"
  echo "✅ Committed: $filename"
done

# Push all commits
git push origin main
echo "🚀 All files committed and pushed!"
