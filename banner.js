// Webpack 플러그인
// 빌드 시 commit 날짜, 사용자, 빌드 일시를 출력하는 기능

const { execSync } = require('child_process');

function banner() {
  try {
    const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
    return `Build version: ${commitHash}`;
  } catch (error) {
    return 'Build version: unknown';
  }
}

module.exports = banner;
