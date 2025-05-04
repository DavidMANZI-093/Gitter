import simpleGit from "simple-git";

export const dispath_repo = (abs_path: string) => {
    return simpleGit(abs_path);
};