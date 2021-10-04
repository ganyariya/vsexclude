import { Command } from "./deps.ts";

const { args } = await new Command()
  .name("vsexclude")
  .version("0.1.0")
  .description("Setup VSCode Exclude Setting")
  .arguments("<arg:string>")
  .parse(Deno.args);

const lang: string = args[0];
