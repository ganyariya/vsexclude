import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run app.ts",
      desc: "run my app.ts file",
    },
    mod: {
      cmd: "deno run mod.ts",
    },
    test: {
      cmd: "deno test",
    },
  },
  allow: ["run", "net", "read", "write"],
  unstable: true,
};

export default config;
