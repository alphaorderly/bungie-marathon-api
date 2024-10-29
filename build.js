import esbuild from "esbuild";

const baseConfig = {
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  target: "es2019", 
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: { ".js": ".cjs" },
  }),
])
  .then(() => {
    console.log("Build complete");
  })
  .catch(() => {
    console.error("Build failed");
    process.exit(1);
  });
