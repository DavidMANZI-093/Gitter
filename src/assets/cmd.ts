export const processCommandLineArguments = () => {
  const repo_path = process.argv[2];
  const timeout_sec = Number(process.argv[3]);

  if (!repo_path) {
    console.error("\n   \x1b[31mError:\x1b[0m Please provide a path to git repo.\n");
    process.exit(1);
  }

  if (isNaN(timeout_sec) || timeout_sec < 10) {
    console.error(
      "\n   \x1b[31mError:\x1b[0m Invalid timeout parameter, Use valid number such as `60` as timeout in seconds.\n"
    );

    process.exit(1);
  }

  return { repo_path, timeout_sec };
};