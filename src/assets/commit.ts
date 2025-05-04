import { SimpleGit } from "simple-git";

let isCommitting = false;

export const perform_commit = async (git: SimpleGit) => {
  if (isCommitting) return;
  isCommitting = true;

  try {
    const status = await git.status();

    if (status.files.length > 0) {
      await git.add(".");
      await git.commit(`Auto-commit at ${new Date().toLocaleString()} for inactivity period...`);
      await git.push();

      console.log(`     \x1b[32m\u{2714}\x1b[0m  [\x1b[35m${new Date().toLocaleTimeString()}\x1b[0m] - Autocommit successful, git is also pushed.`);
    }
  } catch (error) {
    console.error("\n   \x1b[31mError:\x1b[0m Issue performing commit action using git...\n\n", error);
    console.log("\n   \x1b[33mWarning:\x1b[0m Retrying on next change...\n");
  } finally {
    isCommitting = false;
  }
};
