module.exports = /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */({
  docs: [
    'guide',
    {
      type: 'category',
      label: '模块',
      items: [
        'general',
        'browser',
        'web-interaction',
        'online-services',
        'conditions'
      ]
    }, {
      type: 'category',
      label: 'API',
      items: [
        'workflow',
        'blocks'
      ]
    }, {
      type: 'link',
      label: '官网',
      href: 'https://www.automa.site',
    }
  ]
})
