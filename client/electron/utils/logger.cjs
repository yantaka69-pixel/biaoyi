function logInfo(...args) {
  console.log('[biaoyi-client]', ...args);
}

function logError(...args) {
  console.error('[biaoyi-client]', ...args);
}

module.exports = {
  logError,
  logInfo,
};
