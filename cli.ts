import { Command } from "./deps.ts";

const { args } = await new Command()
  .name("vsexclude")
  .version("0.1.0")
  .description("Setup VSCode Exclude Setting")
  //   .option("-t, --template [template:string]", "Select Temaplate", {
  //     required: true,
  //   })
  .arguments("<arg:string>")
  .parse(Deno.args);

const lang = args[0];
