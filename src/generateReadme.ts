const THEME = 'nord'
const BORDER_RADIUS = 20
const USERNAME = 'mikew'

async function main() {
  console.log(`
<p align="center">
  <a href="https://github.com/${USERNAME}#js-contribution-activity"><img align="center" src=${buildCardUrlStats({
    show_icons: true,
    include_all_commits: true,
  })} /></a>
  <a href="https://github.com/${USERNAME}?tab=repositories"><img align="center" src=${buildCardUrlLanguages({
    layout: 'compact',
    size_weight: 0.5,
    count_weight: 0.5,
  })} /></a>
</p>

---

<p align="center">
  ${basicRepoLinkWithCard({ repo: 'transmission-material-ui' })}
  ${basicRepoLinkWithCard({ repo: 'xarcade-xinput' })}
</p>
<p align="center">
  ${basicRepoLinkWithCard({ repo: 'redux-easy-mode' })}
  ${basicRepoLinkWithCard({ repo: 'homelab' })}
</p>
<p align="center">
  ${basicRepoLinkWithCard({ repo: 'brinton-memorial-cookbook' })}
  ${basicRepoLinkWithCard({ repo: 'browser-kde-color-scheme' })}
</p>
<p align="center">
  ${basicRepoLinkWithCard({ repo: 'gzdoom-launcher' })}
  ${basicRepoLinkWithCard({ repo: 'ss-plex.bundle' })}
</p>

<!-- ${new Date().valueOf()} -->
  `.trim())
}

type AnyObject = Record<string, unknown>

function basicRepoLinkWithCard(obj: AnyObject) {
  return `<a href="https://github.com/${USERNAME}/${obj.repo}" target="_blank"><img align="center" src=${buildCardUrlRepo({ repo: obj.repo })} /></a>`
}

function buildCardUrlStats(obj: AnyObject) {
  return `https://github-readme-stats.vercel.app/api?${objectToQueryString({
    username: USERNAME,
    theme: THEME,
    hide_border: true,
    border_radius: BORDER_RADIUS,
    ...obj,
  })}`
}

function buildCardUrlLanguages(obj: AnyObject) {
  return `https://github-readme-stats.vercel.app/api/top-langs?${objectToQueryString({
    theme: THEME,
    border_radius: BORDER_RADIUS,
    hide_border: true,
    username: USERNAME,
    ...obj,
  })}`
}

function buildCardUrlRepo(obj: AnyObject) {
  return `https://github-readme-stats.vercel.app/api/pin?${objectToQueryString({
    theme: THEME,
    border_radius: BORDER_RADIUS,
    hide_border: true,
    username: USERNAME,
    description_lines_count: 3,
    ...obj,
  })}`
}

function objectToQueryString(obj: AnyObject) {
  const searchParams = new URLSearchParams()

  for (const paramName in obj) {
    const value = obj[paramName]

    if (value == null) {
      continue
    }

    searchParams.set(paramName, String(value))
  }

  return searchParams.toString()
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
