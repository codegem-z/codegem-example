import { defineConfig } from "codegem";
import loadFile from "codegem-load-file";
import createIcon from "codegem-machine-icon";

export default defineConfig({
  output: "example/generated", // 根目录;所有生成文件统一生成在这个目录下
  factory: [
    {
      use: [loadFile("./example/icon/source")],
      machine: createIcon("./example/generated/icon"),
    },
  ],
});
