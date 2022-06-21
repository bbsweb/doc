module.exports = /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */({
  docs: [
    {
      type: 'category',
      label: '入门',
      items: [
        'overview',
        'install',
        'tutorial',
        'examples'
      ]
    }, {
      type: 'category',
      label: '基本概念',
      items: [
        'commands',
        'spiders',
        'selectors',
        'items',
        'loaders',
        'shell',
        'item-pipeline',
        'feed-exports',
        'request-response',
        'link-extractors',
        'settings',
        'exceptions'
      ]
    }, {
      type: 'category',
      label: '内置服务',
      items: [
        'logging',
        'stats',
        'email',
        'telnetconsole',
        'webservice'
      ]
    }, {
      type: 'category',
      label: '疑难解答',
      items: [
        'faq',
        'debug',
        'contracts',
        'practices',
        'broad-crawls',
        'developer-tools',
        'dynamic-content',
        'leaks',
        'media-pipeline',
        'deploy',
        'autothrottle',
        'benchmarking',
        'jobs',
        'coroutines',
        'asyncio'
      ]
    }, {
      type: 'category',
      label: '扩展',
      items: [
        'architecture',
        'downloader-middleware',
        'spider-middleware',
        'extensions',
        'api',
        'signals',
        'scheduler',
        'exporters'
      ]
    }
  ]
})
