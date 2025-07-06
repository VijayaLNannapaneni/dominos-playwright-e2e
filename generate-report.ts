import { generate } from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: 'reports',
  reportPath: 'docs',
  metadata: {
    browser: {
      name: 'chrome',
      version: '91',
    },
    device: 'Local machine',
    platform: {
      name: process.platform,
      version: '',
    },
  },
  customData: {
    title: 'Project Info',
    data: [
      { label: 'Project', value: 'Dominos Playwright Tests' },
      { label: 'Test Environment', value: 'Local' },
      { label: 'Executed', value: new Date().toLocaleString() },
    ],
  },
});
