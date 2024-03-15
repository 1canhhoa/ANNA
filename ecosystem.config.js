module.exports = {
  apps: [
    {
      name: 'anna-test.okhub-tech.com',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
