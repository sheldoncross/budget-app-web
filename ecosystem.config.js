module.exports = {
    apps : [{
      name: "frontend",
      script: "npm",
      args: "run dev",
      cwd: "./src/packages/frontend",
      watch: true,
      ignore_watch: ["node_modules"],
    }, {
      name: "backend",
      script: "./src/packages/backend/server.tsx",
      watch: true,
      ignore_watch: ["node_modules"],
    }]
  };
  