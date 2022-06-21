module.exports = /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */({
  docs: [
    {
      type: 'category',
      label: '入门',
      items: [
        'quicktour',
        'installation'
      ]
    }, {
      type: 'category',
      label: '教程',
      items: [
        'pipeline',
        'autoclass',
        'preprocessing',
        'training',
        'accelerate',
        'model_sharing'
      ]
    }, {
      type: 'category',
      label: '指南',
      items: [
        {
          type: 'category',
          label: '微调下游任务',
          items: [
            'sequence_classification',
            'token_classification',
            'language_modeling'
          ]
        }
      ]
    }, {
      type: 'category',
      label: 'API',
      items: [
        'text_generation'
      ]
    }
  ]
})
