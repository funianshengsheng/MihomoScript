# MhomoScript

Mihomo（Clash Meta）配置覆写脚本，内置完善的 DNS 防泄露方案及 WebRTC 泄露防护，以及分流和地区策略，无需手动配置，开箱即用。

> [!IMPORTANT]
> **⚠️ 该脚本适用于覆写机场提供的订阅配置文件以及用于覆写自己手写的配置文件皆可**

## 使用方式

支持 JS 脚本覆写的客户端（如 [Bettbox](https://github.com/appshubcc/Bettbox) / [FlClash](https://github.com/chen08209/FlClash)）均可使用。

客户端中找到「脚本」功能，点击加号 通过URL粘贴以下链接导入即可：

```
https://raw.githubusercontent.com/funianshengsheng/MhomoScript/refs/heads/main/Script.js
```

## 功能特性

- **无 DNS 泄露**：内置完整 DNS 分流配置，国内域名走国内 DNS，国际域名走加密 DNS
- **无 WebRTC 泄露**：规则层屏蔽 UDP 3478 端口，防止 WebRTC 暴露真实 IP
- **自动节点分类**：按地区自动识别归类节点，支持香港、台湾、日本、韩国、新加坡、美国、欧洲
- **Fake-IP 模式**：启用 Fake-IP + 黑名单过滤，国内常用应用不受影响
- **规则集模式**：采用高效 `rule-set` + `.mrs` 格式规则，按需加载，无冗余规则

## 内置策略组

| 策略组 | 说明 |
|--------|------|
| 节点选择 | 主出口，手动切换节点或子组 |
| 自动选择 | 延迟最低节点自动切换 |
| 负载均衡 | 多节点轮询分流 |
| 全部节点 | 所有节点直选 |
| AI | ChatGPT、Claude 等 AI 服务 |
| YouTube | YouTube 专属 |
| Google | Google 全系服务 |
| GitHub | GitHub 专属 |
| Microsoft | OneDrive、Office 等 |
| Apple | App Store、iCloud 等 |
| Telegram | Telegram 专属 |
| Cloudflare | Cloudflare 专属 |
| Twitter | Twitter/X 专属 |
| Instagram | Instagram 专属 |
| TikTok | TikTok 专属 |
| Netflix | Netflix 专属 |
| Spotify | Spotify 专属 |

## 内置地区节点组

每个地区包含「自动选择」「负载均衡」子组，以及该地区全部节点手动直选。

- 🇭🇰 香港节点
- 🇹🇼 台湾节点
- 🇯🇵 日本节点
- 🇰🇷 韩国节点
- 🇸🇬 新加坡节点
- 🇺🇸 美国节点
- 🇪🇺 欧洲节点
- 🌍 其他节点（未匹配地区的节点）

## 兼容客户端

支持任何使用 **Mihomo 内核** 且支持 **JS 脚本覆写** 的客户端，例如：

- [Bettbox](https://github.com/appshubcc/Bettbox)
- [FlClash](https://github.com/chen08209/FlClash)
- [FlyCLash](https://github.com/GtxFury/FlyClash)

## 致谢

感谢以下项目：

- [AIsouler/MyClash](https://github.com/AIsouler/MyClash) — 参考Host以及DNS配置等
- [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) — 官方Mihomo内核
- [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat) — 分流规则集数据
- [DustinWin/ruleset_geodata](https://github.com/DustinWin/ruleset_geodata) — 分流规则集数据
- [Koolson/Qure](https://github.com/Koolson/Qure) — ICON图标资源
- [Mihomo Wiki](https://wiki.metacubex.one/config/) — 官方配置文档
