export default {
  "src/**/*.md": ["eslint --cache --fix", "prettier --write"],
  "src/**/*.js": ["eslint --cache --fix", "prettier --write"],
  "src/**/*.astro": ["eslint --cache --fix", "prettier --write"]
};
