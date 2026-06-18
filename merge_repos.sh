#!/usr/bin/env bash

set -e

TARGET_DIR="src/apps"
mkdir -p "$TARGET_DIR"

# Updated list: 12 repositories (food-blog-and-recipes removed)
REPOS=(
  "game-hub|git@github.com:jhrhq/game-hub.git"
  "project-manager|git@github.com:jhrhq/project-manager.git"
  "product-list|git@github.com:jhrhq/product-list.git"
  "quizzes|git@github.com:jhrhq/quizzes.git"
  "home-inventory|git@github.com:jhrhq/home-inventory.git"
  "expense-tracker|git@github.com:jhrhq/expense-tracker.git"
  "Real-Estate|git@github.com:jhrhq/Real-Estate.git"
  "issue-tracker|git@github.com:jhrhq/issue-tracker.git"
  "gerich-restaurant|git@github.com:jhrhq/gerich-restaurant.git"
  "modern_ui_ux_gpt3_jsm|git@github.com:jhrhq/modern_ui_ux_gpt3_jsm.git"
  "event-calender|git@github.com:jhrhq/event-calender.git"
  "portfolio|git@github.com:jhrhq/portfolio.git"
)

echo "🚀 Starting repository merge into $TARGET_DIR..."

for item in "${REPOS[@]}"; do
  IFS="|" read -r APP_NAME REPO_URL <<< "$item"
  
  TEMP_REMOTE="temp-remote-$APP_NAME"
  DEST_PATH="$TARGET_DIR/$APP_NAME"
  
  echo "--------------------------------------------------"
  echo "📦 Processing: $APP_NAME"
  echo "🔗 URL: $REPO_URL"
  echo "--------------------------------------------------"

  git remote add "$TEMP_REMOTE" "$REPO_URL"
  git fetch "$TEMP_REMOTE"

  DEFAULT_BRANCH=$(git remote show "$TEMP_REMOTE" | grep "HEAD branch" | sed 's/.*: //')
  if [ -z "$DEFAULT_BRANCH" ]; then
    DEFAULT_BRANCH="main"
  fi
  echo "🔹 Detected default branch: $DEFAULT_BRANCH"

  echo "📥 Merging history into $DEST_PATH..."
  git subtree add --prefix="$DEST_PATH" "$TEMP_REMOTE" "$DEFAULT_BRANCH"

  git remote remove "$TEMP_REMOTE"
  echo "✅ Successfully merged $APP_NAME!"
done

echo "🎉 All 12 repositories have been successfully merged with history preserved!"