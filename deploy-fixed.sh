#!/bin/bash
# Script to deploy FlowAgents to GitHub Pages with custom domain - Fixed version

# Set variables
SITE_REPO_PATH="/Users/drkinjangi/Desktop/drkinjangi.github.io"
SOURCE_PATH="/Users/drkinjangi/Desktop/flowagents"
BACKUP_PATH="/Users/drkinjangi/Desktop/drkinjangi.github.io.backup"

echo "Starting fixed deployment process for FlowAgents to GitHub Pages with custom domain www.flowagents.dev"

# First, make sure the source has the right dependencies installed
echo "Installing correct dependencies in source directory..."
cd "$SOURCE_PATH"
npm install
npm install --save lucide-react@0.294.0

# Build in the source directory to verify it works
echo "Verifying build in source directory..."
npm run build

# If the build didn't succeed, exit
if [ $? -ne 0 ]; then
  echo "Build in source directory failed. Please fix the errors and try again."
  exit 1
fi

# Create backup of current repository if exists
if [ -d "$SITE_REPO_PATH" ]; then
  echo "Creating backup of existing repository..."
  if [ -d "$BACKUP_PATH" ]; then
    rm -rf "$BACKUP_PATH"
  fi
  cp -r "$SITE_REPO_PATH" "$BACKUP_PATH"
  echo "Backup created at $BACKUP_PATH"
else
  echo "Cloning repository..."
  git clone https://github.com/drkinjangi/drkinjangi.github.io.git "$SITE_REPO_PATH"
fi

# Clean the repository (except .git folder)
echo "Cleaning repository..."
cd "$SITE_REPO_PATH"
find . -not -path "./.git*" -not -name ".git" -delete

# Copy the built files instead of source files
echo "Copying built files to GitHub repo..."
cp -r "$SOURCE_PATH/build/"* "$SITE_REPO_PATH/"

# Ensure CNAME file exists directly in the repo root
echo "Creating CNAME file..."
echo "www.flowagents.dev" > "$SITE_REPO_PATH/CNAME"

# Commit changes
echo "Committing changes..."
cd "$SITE_REPO_PATH"
git add .
git commit -m "Update website with new FlowAgents design and configure for flowagents.dev domain"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete!"
echo "Remember to configure your DNS settings for www.flowagents.dev as follows:"
echo "  - Type: A, Name: @, Value: 185.199.108.153"
echo "  - Type: A, Name: @, Value: 185.199.109.153"
echo "  - Type: A, Name: @, Value: 185.199.110.153"
echo "  - Type: A, Name: @, Value: 185.199.111.153"
echo "  - Type: CNAME, Name: www, Value: drkinjangi.github.io"
echo ""
echo "Then go to your GitHub repository settings:"
echo "  - Navigate to Pages"
echo "  - Under Custom domain, enter www.flowagents.dev"
echo "  - Check the Enforce HTTPS box (once the SSL certificate is provisioned)"

echo "Your site should be live at https://www.flowagents.dev after DNS propagation (up to 24 hours)"