module.exports = {
  apps: [
    {
      name: 'anna-test.okhub-tech.com',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/nextjs/app',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
