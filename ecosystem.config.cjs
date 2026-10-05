module.exports = {
  apps: [
    {
      name: 'ntambagbrothers',
      script: 'server.js',
      instances: 'max', // Automatically scales to available CPU cores
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};
