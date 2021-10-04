import { path, fs } from "./deps.ts";
import { ISetting } from "./interfaces/isetting.ts";
import { IDict } from "./interfaces/idict.ts";
import { ITemplate } from "./interfaces/itemplate.ts";

async function readJson(filePath: string): Promise<IDict> {
  return JSON.parse(await Deno.readTextFile(filePath));
}

async function writeJson(filePath: string, json: IDict): Promise<void> {
  await Deno.writeTextFile(filePath, JSON.stringify(json, null, "\t"));
}

function readSettingJson(filePath: string): ISetting {
  const dict: IDict = readJson(filePath);
  if (!("files.exclude" in dict)) {
    dict["files.exclude"] = {};
  }
  return dict as ISetting;
}

function appendTemplateToSetting(
  setting: ISetting,
  template: ITemplate
): ISetting {
  const appendedSetting: ISetting = { ...setting };
  appendedSetting["files.exclude"] = {
    ...appendedSetting["files.exclude"],
    ...template,
  };
  return appendedSetting;
}

async function getTemplate(lang: string): Promise<ITemplate> {
  const result = await import(`./templates/${lang}.ts`);
  return result.template;
}

const currentDirectoryPath = Deno.cwd();
const vscodeSettingPath = path.join(currentDirectoryPath, ".vscode");

if (!fs.existsSync(vscodeSettingPath)) {
  Deno.mkdir(vscodeSettingPath);
}

const settingJsonPath = path.join(vscodeSettingPath, "settings.json");
const setting = await readSettingJson(settingJsonPath);

const lang = "python";
const template = await getTemplate(lang);
const appendedSetting = appendTemplateToSetting(setting, template);

await writeJson(settingJsonPath, appendedSetting);
