module.exports = {
  menu: async (kernel, info) => {
    console.log("info.cwd", info.cwd())
    return [
      {
        text: "Dev",
        icon: "fa-solid fa-code",
        menu: [
          {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            shell: {
              input: true
            },
          },
          {
            image: "/asset/plugin/dev/claude.png",
            text: "Claude Code",
            href: "/run/plugin/dev/claude.json",
            params: {
              cwd: info.cwd()
            },
          },
          {
            image: "/asset/plugin/dev/openai.webp",
            text: "OpenAI Codex",
            href: "/run/plugin/dev/codex.json",
            params: {
              cwd: info.cwd()
            },
          },
          {
            image: "/asset/plugin/dev/cursor.jpeg",
            text: "Cursor",
            run: {
              message: "cursor .",
              path: info.cwd()
            }
          },
          {
            image: "/asset/plugin/dev/windsurf.png",
            text: "Windsurf",
            run: {
              message: "windsurf .",
              path: info.cwd()
            }
          }
        ],
      },
    ]
  }
}
