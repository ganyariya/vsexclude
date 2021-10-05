import { Command } from "./deps.ts";
import { runVsExclude, listTemplatesOnBrowser } from "./mod.ts";

await new Command()
  .name("vsexclude")
  .version("0.1.0")
  .description("Setup VSCode Exclude Setting")
  .command("add <lang:string>", "add template to .vscode/settings.json")
  .action(async (_: any, lang: string) => {
    await runVsExclude(lang);
  })
  .reset()
  .command("list", "list templates")
  .action(async () => {
    await listTemplatesOnBrowser();
  })
  .parse(Deno.args);
