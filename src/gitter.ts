import { SimpleGit } from "simple-git";
import path from "path";
import { processCommandLineArguments } from "./assets/cmd";
import { dispath_repo } from "./assets/git";
import { watcher } from "./assets/watcher";

const initAutoCommit = async () => {

  const { repo_path, timeout_sec } = processCommandLineArguments();
  const abs_path = path.resolve(repo_path);
  const git: SimpleGit = dispath_repo(abs_path);

  console.log('\n \u{1F680} Launching \x1b[94mGitter\x1b[0m...\n');
  console.log(`      - Repository: '\x1b[96m${abs_path}\\*\x1b[0m'`);
  console.log(`      - Timeout: \x1b[96m${timeout_sec}s\x1b[0m`);
  
  watcher(abs_path, timeout_sec, git);

  console.log("\n \x1b[32m\u2714\x1b[0m  File watcher active...\n");

};

initAutoCommit();