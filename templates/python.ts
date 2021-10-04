import { ITemplate } from "./../interfaces/itemplate.ts";

const template: ITemplate = {
  "**/*venv": true,
  "**/*develo-eggs": true,
  "**/*eggs": true,
  "**/*wheels": true,
  "**/*.egg-info": true,
  "**/*.egg": true,
  "**/sdist": true,
  "**/*.manifest": true,
  "**/*.spec": true,
  "**/*.cache": true,
  "**/*.ipynb_checkpoints": true,
  "**/profile_default": true,
  "**/ipython_config.py": true,
  "**/__pypackages__": true,
  "**/*dmypy.json": true,
  "**/*.mypy_cache": true,
  "**/.pytype": true,
};

export { template };
