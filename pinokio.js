const path = require('path')
module.exports = {
  menu: async (kernel, info) => {
    let venvs = info.venv()
    let terminals = [{
      shell: {
        input: true
      }
    }]
    for(let venv of venvs) {
      let parsed = path.parse(venv)
      terminals.push({
        text: parsed.name,
        shell: {
          venv: venv,
          input: true,
        }
      })
    }
    return [
      {
        text: "Dev",
        icon: "fa-solid fa-code",
        menu: [
          {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            menu: terminals
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
          },
          {
            icon: "fa-solid fa-rotate",
            text: "Update",
            shell: {
              message: "git pull",
              path: kernel.path("plugin")
            }
          }
        ],
      },
    ]
  }
}
