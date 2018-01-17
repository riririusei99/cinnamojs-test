module.exports = [
  {action: "start"},
  {action: "browser.set.size", width: 1024, height: 768},
  {action: "browse", url: "http://teamspirit.hatenablog.com/"},
  {action: "send.keys", locator: {css: "input[type=text]"}, keys: "riririusei99"},
  {action: "click", locator: {css: "input[type=submit]"}},
  {action: "wait.title", "page.title": "riririusei99 の検索結果 - TeamSpirit Developer Blog"}
];
