module.exports = {
  apps: [
    {
      name: 'anna-test.okhub-tech.com',
      script: 'yarn',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
