import { Command } from "./deps.ts";
import { runVsExclude } from "./mod.ts";

const { args } = await new Command()
  .name("vsexclude")
  .version("0.1.0")
  .description("Setup VSCode Exclude Setting")
  .arguments("<arg:string>")
  .parse(Deno.args);

const lang: string = args[0];
await runVsExclude(lang);
