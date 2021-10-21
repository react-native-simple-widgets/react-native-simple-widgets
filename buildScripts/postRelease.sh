echo "Post release"
CURRENT_BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
CURRENT_VERSION=$1
git add package.json
git add package-lock.json
git commit -m "chore: release "$CURRENT_VERSION
git push origin $CURRENT_BRANCH
