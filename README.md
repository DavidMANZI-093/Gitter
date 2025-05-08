# Gitter

**Gitter** is a lightweight and efficient tool written in **TypeScript** that automates git repository management. Its primary functionality includes real-time file monitoring and automatic commits for changes in a repository, making it perfect for maintaining codebases with minimal manual intervention.

---

## 📖 **Project Overview**

Gitter simplifies your workflow by:

- Monitoring changes in a git repository.
- Automatically committing and pushing updates after a specified period of inactivity.
- Reducing the risk of losing work due to forgotten commits.

---

## 🚀 **Features**

1. **Automatic Commit and Push**:
   - Detects changes in the monitored repository.
   - Auto-commits with a timestamped message and pushes the changes to the remote repository.

2. **Customizable Timeout**:
   - Specify an inactivity timeout (in seconds) after which changes are auto-committed.

3. **Real-time Monitoring**:
   - Utilizes file system watchers to track changes in real-time.

4. **User-friendly Command-line Interface**:
   - Pass repository path and timeout duration as command-line arguments.

---

## 🛠️ **Technologies Used**

- **TypeScript**: Provides a strongly-typed development experience.
- **Node.js**: Powers the file system operations and command-line tooling.
- **simple-git**: A lightweight interface for Git commands.

---

## 📚 **Getting Started**

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- Git installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DavidMANZI-093/Gitter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Gitter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

Run the tool by providing the repository path and timeout in seconds:

```bash
npx ts-node src/gitter.ts <path-to-repo> <timeout-in-seconds>
```

Example:
```bash
npx ts-node src/gitter.ts /path/to/repo 60
```

---

## ⚙️ **How It Works**

1. **Command-line Input Handling**:
   - The `src/assets/cmd.ts` module processes the command-line arguments (repository path and timeout).

2. **Repository Initialization**:
   - The `src/assets/git.ts` module initializes a git repository instance for the provided path.

3. **File Monitoring**:
   - The `src/assets/watcher.ts` module uses Node.js's `fs.watch` to monitor file changes.

4. **Auto-commit Logic**:
   - The `src/assets/commit.ts` module handles the auto-commit and push operations.

5. **Main Script**:
   - The `src/gitter.ts` file ties everything together, initializing the watcher and handling errors gracefully.

---

## 🤝 **Contributing**

We welcome contributions to improve Gitter! Feel free to:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📝 **License**

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

---

## 📧 **Contact**

For any questions or suggestions, feel free to reach out:

- **Author**: [DavidMANZI-093](https://github.com/DavidMANZI-093)
- **Email**: manzidavid093@gmail.com
