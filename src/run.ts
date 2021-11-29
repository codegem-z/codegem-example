import * as path from "path";
import CodeGenerator from "./code_generator";

async function readConfig() {
  const workPath = process.cwd();
  const { default: config } = await import(
    path.resolve(workPath, "./generator.config.ts")
  );
  return config;
}

async function run() {
  const options = await readConfig();
  console.log("debug", options);

  const codeGenerator = new CodeGenerator(options);

  codeGenerator.init();
}

run();
