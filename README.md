# 🦕 vsexclude

<p align="center">
  <img width="400" src="./icon/deno-vsexclude.png">
</p>

vsexclude can add your favorite lang's `files.exclude` of vscode to your `settings.json`, like `.gitignore`.

### 🦕 Install

```shell
deno install --allow-run --allow-read --allow-write --allow-net --unstable --force --name vsexclude https://raw.githubusercontent.com/ganyariya/vsexclude/main/cli.ts
```

### 🦕 CLI

You can add a lang template to your `.vscode/settings.json`.
You have to run the below command, on the vscode project directory.

```shell
# vsexclude add <lang>
vsexclude add python
```

You can check current exclude templates.

```shell
vsexclude list
```

### 🦕 Contribute

Please add your favorite lang's `files.exclude` template to [templates directory](https://github.com/ganyariya/vsexclude/tree/main/templates).

For example, if you want to add the deno template, please make PR of creating `templates/deno.txt`!

🦕🦕🦕 Welcome for your any PRs! 🦕🦕🦕

### 🦕 TODO

- [ ] Refactoring (Please welcome for great engineer help)
- [ ] Other functions
  - [ ] search.exclude
  - [ ] files.watch exclude
- [ ] 🦕 your idea!