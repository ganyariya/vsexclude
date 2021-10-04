import { IExclude } from "./iexclude.ts";
import { IDict } from "./idict.ts";

interface ISetting extends IDict {
  "files.exclude": IExclude;
}

export type { ISetting };
