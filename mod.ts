import { fs, path, open } from "./deps.ts";
import { ISetting } from "./interfaces/isetting.ts";
import { IDict } from "./interfaces/idict.ts";
import { ITemplate } from "./interfaces/itemplate.ts";

async function readJson(filePath: string): Promise<IDict> {
  try {
    return JSON.parse(await Deno.readTextFile(filePath));
  } catch (_) {
    console.log("vsexclude creates .vscode/settings.json.");
    await Deno.writeTextFile(filePath, JSON.stringify({}));
    return {};
  }
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

async function readTemplate(lang: string): Promise<ITemplate> {
  const url = `https://raw.githubusercontent.com/ganyariya/vsexclude/main/templates/${lang}.txt`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorMessage = `\n404 Error: ${lang} does not exist.\nPlease contribute to vsexclude, adding your exclucde template!`;
    throw new Error(errorMessage);
  }
  const text = await response.text();
  const template: ITemplate = {};
  for (const key of text.trimEnd().split("\n")) {
    if (key.length === 0 || key[0] === "#") continue;
    template[key] = true;
  }
  return template;
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

function getVSCodeSettingPath(): string {
  const currentDirectoryPath = Deno.cwd();
  const vscodeSettingPath = path.join(currentDirectoryPath, ".vscode");
  return vscodeSettingPath;
}

const runVsExclude = async (lang: string): Promise<void> => {
  const vscodeSettingPath = getVSCodeSettingPath();

  if (!fs.existsSync(vscodeSettingPath)) {
    Deno.mkdir(vscodeSettingPath);
  }

  const settingJsonPath = path.join(vscodeSettingPath, "settings.json");
  const setting = await readSettingJson(settingJsonPath);

  const template = await readTemplate(lang);
  const appendedSetting = appendTemplateToSetting(setting, template);

  await writeJson(settingJsonPath, appendedSetting);
};

const listTemplatesOnBrowser = async (): Promise<void> => {
  const url = "https://github.com/ganyariya/vsexclude/tree/main/templates";
  await open(url);
};

export { runVsExclude, listTemplatesOnBrowser };
