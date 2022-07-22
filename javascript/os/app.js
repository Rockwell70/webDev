import os from "os";

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
};

console.log(server);
