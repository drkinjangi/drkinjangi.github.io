#!/bin/bash
# Script to deploy FlowAgents to GitHub Pages with custom domain

# Set variables
SITE_REPO_PATH="/Users/drkinjangi/Desktop/drkinjangi.github.io"
SOURCE_PATH="/Users/drkinjangi/Desktop/flowagents"
BACKUP_PATH="/Users/drkinjangi/Desktop/drkinjangi.github.io.backup"

echo "Starting deployment process for FlowAgents to GitHub Pages with custom domain www.flowagents.dev"

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

# Copy all files from source to repository
echo "Copying new files..."
cp -r "$SOURCE_PATH"/* "$SITE_REPO_PATH"/

# Ensure CNAME file exists
echo "Creating CNAME file..."
echo "www.flowagents.dev" > "$SITE_REPO_PATH/public/CNAME"

# Install dependencies
echo "Installing dependencies..."
cd "$SITE_REPO_PATH"
npm install

# Build the application
echo "Building the application..."
npm run build

# Commit changes
echo "Committing changes..."
git add .
git commit -m "Update website with new FlowAgents design and configure for flowagents.dev domain"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

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