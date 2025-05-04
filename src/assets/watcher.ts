import { watch } from "fs";
import { perform_commit } from "./commit";
import { SimpleGit } from "simple-git";

let debounceTimer: NodeJS.Timeout | null = null;

export const watcher = (abs_path: string, timeout_sec: number, git: SimpleGit) => {
    watch(abs_path, { recursive: true }, async () => {

        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => await perform_commit(git), timeout_sec * 1000);

    });
};