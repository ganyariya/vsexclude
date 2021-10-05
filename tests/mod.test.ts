import { getVSCodeSettingPath, readJson, readTemplate } from "../mod.ts";
import { path } from "./../deps.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.106.0/testing/asserts.ts";
import { basename } from "https://deno.land/std/path/mod.ts";

// https://zenn.dev/uki00a/books/effective-deno/viewer/deno-std

Deno.test("Setting.json Path", () => {
  const path = getVSCodeSettingPath();
  assertEquals(basename(path), ".vscode");
});

Deno.test("Can read Json", async () => {
  const vsCodeSettingPath = getVSCodeSettingPath();
  const settingJsonPath = path.join(vsCodeSettingPath, "settings.json");
  const json = await readJson(settingJsonPath);
  assert(typeof json === "object");
});
Deno.test("Read setting Json", async () => {
  const vsCodeSettingPath = getVSCodeSettingPath();
  const settingJsonPath = path.join(vsCodeSettingPath, "settings.json");
  const json = await readJson(settingJsonPath);
  assert("files.exclude" in json);
});

Deno.test("Read template from Github", async () => {
  const template = await readTemplate("python");
  assert(typeof template === "object");
});
