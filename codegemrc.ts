import { defineConfig } from "codegem";
import loadFile, { FileType } from "codegem-load-file";

function createIcon(
  type: "ts" | "js"
): (source: FileType[]) => { pathname: string; code: string }[] {
  return (source: FileType[]) => {
    console.log(source);
    if (source) {
      return [{ pathname: `hello.${type}`, code: source[0].files[0] }];
    }
    return [];
  };
}

export default defineConfig({
  output: "example/generated", // 根目录;所有生成文件统一生成在这个目录下
  factory: [
    {
      use: [loadFile("./example")],
      machine: createIcon("js"),
      output: "example/generated/hello", // 优先级 > root output
    },
  ],
});
