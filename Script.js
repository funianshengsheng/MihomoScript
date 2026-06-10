const EXCLUDE_PATTERN = /(拒绝|直连|群|邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|支持|教程|关注|更新|作者|加入|超时|收藏|福利|好友|失联|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|https?:\/\/|\.com\b|com\/|USE|USED|TOTAL|EXPIRE|EMAIL|Panel|Channel|Author|traffic)/i;

const FLAG_EMOJI_PATTERN = /^((?:\uD83C[\uDDE6-\uDDFF]){2})\s*/;

const DIGITS_PATTERN = /\d+/g;
const NATURAL_SORT_PAD_WIDTH = 16;

const GITHUB_RAW_HOST = "raw.githubusercontent.com";
const GITHUB_PROXY_PREFIX = "https://v6.gh-proxy.org/";

const POLICY_MAIN = "节点选择";
const POLICY_DIRECT = "DIRECT";
const NAME_AUTO = "自动选择";
const NAME_BALANCE = "负载均衡";

const GROUP_NAME = {
  all: "全部节点",
  other: "其他节点",
  global: "GLOBAL",
};

const ICON_BASE_URL = "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";
const ICON = {
  global: ICON_BASE_URL + "Global.png",
  select: ICON_BASE_URL + "Proxy.png",
  all: ICON_BASE_URL + "Area.png",
  auto: ICON_BASE_URL + "Auto.png",
  balance: ICON_BASE_URL + "Round_Robin.png",
  other: ICON_BASE_URL + "World_Map.png",
  hk: ICON_BASE_URL + "Hong_Kong.png",
  tw: ICON_BASE_URL + "Taiwan.png",
  jp: ICON_BASE_URL + "Japan.png",
  kr: ICON_BASE_URL + "Korea.png",
  sg: ICON_BASE_URL + "Singapore.png",
  us: ICON_BASE_URL + "United_States.png",
  eu: ICON_BASE_URL + "European_Union.png",
};

const SERVICES = [
  { name: "AI", icon: ICON_BASE_URL + "ChatGPT.png" },
  { name: "YouTube", icon: ICON_BASE_URL + "YouTube.png" },
  { name: "Google", icon: ICON_BASE_URL + "Google_Search.png" },
  { name: "GitHub", icon: ICON_BASE_URL + "GitHub.png" },
  { name: "Microsoft", icon: ICON_BASE_URL + "Microsoft.png" },
  { name: "Apple", icon: ICON_BASE_URL + "Apple.png" },
  { name: "Telegram", icon: ICON_BASE_URL + "Telegram.png" },
  { name: "Cloudflare", icon: ICON_BASE_URL + "Cloudflare.png" },
  { name: "Twitter", icon: ICON_BASE_URL + "Twitter.png" },
  { name: "Instagram", icon: ICON_BASE_URL + "Instagram.png" },
  { name: "Spotify", icon: ICON_BASE_URL + "Spotify.png" },
  { name: "TikTok", icon: ICON_BASE_URL + "TikTok.png" },
  { name: "Netflix", icon: ICON_BASE_URL + "Netflix.png" },
];

const DNS_DEFAULT = ["223.5.5.5", "119.29.29.29"];
const DNS_CN = [
  "https://dns.alidns.com/dns-query#DIRECT",
  "https://doh.pub/dns-query#DIRECT",
];
const DNS_GLOBAL = [
  "https://dns.cloudflare.com/dns-query#" + POLICY_MAIN,
  "https://dns.google/dns-query#" + POLICY_MAIN,
];

const REGIONS = [
  {
    name: "香港节点", icon: ICON.hk,
    pattern: /(香港|深港|沪港|🇭🇰|\bHK\b|\bHKG\b|Hong\s?Kong|Hongkong|HKBN|HKT|PCCW|WTT|CMHK|HGC|Hutchison|Three\s?HK|3HK|Netvigator|iCable)/i,
  },
  {
    name: "台湾节点", icon: ICON.tw,
    pattern: /(台湾|福台|台灣|台北|新北|桃园|桃園|台中|台南|高雄|🇹🇼|\bTW\b|\bTWN\b|\bTPE\b|\bTSA\b|\bKHH\b|Taiwan|Taipei|New\s?Taipei|Taoyuan|Taichung|Tainan|Kaohsiung|中华电信|中華電信|\bCHT\b|Chunghwa|HiNet|Hinet|Seednet)/i,
  },
  {
    name: "日本节点", icon: ICON.jp,
    pattern: /(日本|沪日|东京|東京|大阪|🇯🇵|\bJP\b|\bJPN\b|Japan|Tokyo|Osaka|\bNRT\b|\bHND\b|\bKIX\b|\bCTS\b|\bFUK\b|\bNGO\b|SoftBank|KDDI|\bIIJ\b|IIJmio|Rakuten|楽天|Biglobe)/i,
  },
  {
    name: "韩国节点", icon: ICON.kr,
    pattern: /(韩国|韓國|🇰🇷|首尔|首爾|\bKR\b|\bKOR\b|Korea|Seoul|\bICN\b)/i,
  },
  {
    name: "新加坡节点", icon: ICON.sg,
    pattern: /(新加坡|狮城|獅城|🇸🇬|\bSG\b|\bSGP\b|Singapore|\bSIN\b|\bXSP\b)/i,
  },
  {
    name: "美国节点", icon: ICON.us,
    pattern: /(美国|美國|洛杉矶|洛杉磯|纽约|紐約|西雅图|西雅圖|圣何塞|聖何塞|旧金山|舊金山|芝加哥|达拉斯|達拉斯|硅谷|矽谷|夏威夷|新泽西|新澤西|马纳萨斯|馬納薩斯|🇺🇸|\bUS\b|\bUSA\b|United\s?States|America|Los\s?Angeles|\bLA\b|New\s?York|\bNYC\b|Seattle|San\s?Jose|San\s?Francisco|\bSFO\b|Chicago|Dallas|Silicon\s?Valley|Hawaii|Hawaiian|New\s?Jersey|\bNJ\b|Manassas|\bSJC\b|\bJFK\b|\bEWR\b|\bBOS\b|\bLAX\b|\bORD\b|\bATL\b|\bDFW\b|\bDAL\b|\bMIA\b|\bSEA\b|\bIAD\b|\bLAS\b|\bPHX\b|\bDEN\b|\bHOU\b|AT&T|\bATT\b|Verizon|T-?Mobile|Frontier|Comcast|Xfinity|Charter|Spectrum|\bCox\b)/i,
  },
  {
    name: "欧洲节点", icon: ICON.eu,
    pattern: /(奥地利|奧地利|京德|比利时|比利時|保加利亚|保加利亞|克罗地亚|克羅地亞|塞浦路斯|捷克|丹麦|丹麥|爱沙尼亚|愛沙尼亞|芬兰|芬蘭|法国|法國|德国|德國|希腊|希臘|匈牙利|爱尔兰|愛爾蘭|意大利|義大利|拉脱维亚|拉脫維亞|立陶宛|卢森堡|盧森堡|荷兰|荷蘭|波兰|波蘭|葡萄牙|罗马尼亚|羅馬尼亞|斯洛伐克|斯洛文尼亚|斯洛文尼亞|西班牙|瑞典|英国|英國|瑞士|欧洲|歐洲|🇦🇹|🇧🇪|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇪|🇮🇹|🇱🇻|🇱🇹|🇱🇺|🇳🇱|🇵🇱|🇵🇹|🇷🇴|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇬🇧|🇨🇭|\bEU\b|Europe|\bCDG\b|\bFRA\b|\bAMS\b|\bMAD\b|\bBCN\b|\bFCO\b|\bMUC\b|\bBRU\b|\bLHR\b|\bLGW\b|\bMAN\b|\bVIE\b|\bZRH\b|\bARN\b|\bCPH\b|\bWAW\b|\bPRG\b|\bHEL\b|\bDUB\b)/i,
  },
];

const OTHER_NODE_EXCLUDE_FILTER = "(?i)" + REGIONS.map(function (region) {
  return region.pattern.source;
}).join("|");

const HEALTH_CHECK_BASE = {
  url: "https://www.gstatic.com/generate_204",
  interval: 300,
  timeout: 5000,
  lazy: true,
  "max-failed-times": 3,
};
const SELECT_BASE = { type: "select" };
const URLTEST_BASE = Object.assign({}, HEALTH_CHECK_BASE, { type: "url-test", tolerance: 100 });
const BALANCE_BASE = Object.assign({}, HEALTH_CHECK_BASE, { type: "load-balance", strategy: "sticky-sessions" });

const RULESET_META_BASE = "https://" + GITHUB_RAW_HOST + "/MetaCubeX/meta-rules-dat/meta/geo/";
const RULESET_DUSTIN_BASE = "https://" + GITHUB_RAW_HOST + "/DustinWin/ruleset_geodata/mihomo-ruleset/";

const RULESET_URL = {
  private_domain: RULESET_META_BASE + "geosite/private.mrs",
  private_ip: RULESET_META_BASE + "geoip/private.mrs",
  fakeip_filter: RULESET_DUSTIN_BASE + "fakeip-filter.mrs",
  DownloadApps: "https://" + GITHUB_RAW_HOST + "/AIsouler/MyClash/main/Rules/DownloadApps.txt",
  captcha: "https://" + GITHUB_RAW_HOST + "/funianshengsheng/MihomoScript/main/rule/Captcha.mrs",
  webrtc: "https://" + GITHUB_RAW_HOST + "/funianshengsheng/MihomoScript/main/rule/WebRTC.list",
  speedtest_domain: RULESET_META_BASE + "geosite/ookla-speedtest.mrs",
  ai: RULESET_DUSTIN_BASE + "ai.mrs",
  gfw: RULESET_DUSTIN_BASE + "gfw.mrs",
  github_domain: RULESET_META_BASE + "geosite/github.mrs",
  youtube_domain: RULESET_META_BASE + "geosite/youtube.mrs",
  googlefcm: RULESET_META_BASE + "geosite/googlefcm.mrs",
  google_domain: RULESET_META_BASE + "geosite/google.mrs",
  google_ip: RULESET_META_BASE + "geoip/google.mrs",
  onedrive_domain: RULESET_META_BASE + "geosite/onedrive.mrs",
  microsoft_domain: RULESET_META_BASE + "geosite/microsoft.mrs",
  appletv_domain: RULESET_META_BASE + "geosite/apple-tvplus.mrs",
  apple_domain: RULESET_META_BASE + "geosite/apple.mrs",
  telegram_domain: RULESET_META_BASE + "geosite/telegram.mrs",
  telegram_ip: RULESET_META_BASE + "geoip/telegram.mrs",
  tiktok_domain: RULESET_META_BASE + "geosite/tiktok.mrs",
  twitter_domain: RULESET_META_BASE + "geosite/twitter.mrs",
  twitter_ip: RULESET_META_BASE + "geoip/twitter.mrs",
  instagram_domain: RULESET_META_BASE + "geosite/instagram.mrs",
  netflix_domain: RULESET_META_BASE + "geosite/netflix.mrs",
  netflix_ip: RULESET_META_BASE + "geoip/netflix.mrs",
  disney_domain: RULESET_META_BASE + "geosite/disney.mrs",
  spotify_domain: RULESET_META_BASE + "geosite/spotify.mrs",
  paypal_domain: RULESET_META_BASE + "geosite/paypal.mrs",
  cloudflare_domain: RULESET_META_BASE + "geosite/cloudflare.mrs",
  "geolocation-!cn": RULESET_META_BASE + "geosite/geolocation-!cn.mrs",
  geolocation_cn: RULESET_META_BASE + "geosite/geolocation-cn.mrs",
  add_direct_domain: "https://" + GITHUB_RAW_HOST + "/Seven1echo/Yaml/refs/heads/main/rules/Seven1_Direct_Domain.mrs",
  cn_additional_domain: "https://static-file-global.353355.xyz/rules/cn-additional-list.mrs",
  cn_domain: RULESET_META_BASE + "geosite/cn.mrs",
  cn_ip: RULESET_META_BASE + "geoip/cn.mrs",
};

const RULE_DEFS = [
  { name: "private_domain", behavior: "domain", policy: POLICY_DIRECT, dns: "system" },
  { name: "private_ip", behavior: "ipcidr", policy: POLICY_DIRECT, noResolve: true },
  { name: "webrtc", behavior: "classical", policy: "REJECT", format: "text" },
  { raw: `AND,((DST-PORT,443),(NETWORK,UDP),(NOT,((RULE-SET,cn_ip))),(NOT,((RULE-SET,cn_domain)))),REJECT` },
  { name: "DownloadApps", behavior: "classical", policy: POLICY_DIRECT, format: "text" },
  { name: "speedtest_domain", behavior: "domain", policy: POLICY_MAIN },
  { name: "captcha", behavior: "domain", policy: "AI" },
  { name: "ai", behavior: "domain", policy: "AI" },
  { raw: "DOMAIN-SUFFIX,anyrouter.top,AI" },
  { name: "github_domain", behavior: "domain", policy: "GitHub" },
  { name: "youtube_domain", behavior: "domain", policy: "YouTube" },
  { name: "googlefcm", behavior: "domain", policy: POLICY_DIRECT },
  { name: "google_domain", behavior: "domain", policy: "Google" },
  { name: "google_ip", behavior: "ipcidr", policy: "Google", noResolve: true },
  { name: "onedrive_domain", behavior: "domain", policy: "Microsoft" },
  { name: "microsoft_domain", behavior: "domain", policy: "Microsoft" },
  { name: "appletv_domain", behavior: "domain", policy: "Apple" },
  { name: "apple_domain", behavior: "domain", policy: "Apple" },
  { name: "telegram_domain", behavior: "domain", policy: "Telegram" },
  { name: "telegram_ip", behavior: "ipcidr", policy: "Telegram", noResolve: true },
  { name: "tiktok_domain", behavior: "domain", policy: "TikTok" },
  { name: "twitter_domain", behavior: "domain", policy: "Twitter" },
  { name: "twitter_ip", behavior: "ipcidr", policy: "Twitter", noResolve: true },
  { name: "instagram_domain", behavior: "domain", policy: "Instagram" },
  { name: "netflix_domain", behavior: "domain", policy: "Netflix" },
  { name: "netflix_ip", behavior: "ipcidr", policy: "Netflix", noResolve: true },
  { name: "disney_domain", behavior: "domain", policy: POLICY_MAIN },
  { name: "spotify_domain", behavior: "domain", policy: "Spotify" },
  { name: "paypal_domain", behavior: "domain", policy: POLICY_MAIN },
  { name: "cloudflare_domain", behavior: "domain", policy: "Cloudflare" },
  { name: "geolocation-!cn", behavior: "domain", policy: POLICY_MAIN },
  { name: "gfw", behavior: "domain", policy: POLICY_MAIN },
  { name: "add_direct_domain", behavior: "domain", policy: POLICY_DIRECT },
  { name: "cn_additional_domain", behavior: "domain", policy: POLICY_DIRECT },
  { name: "geolocation_cn", behavior: "domain", policy: POLICY_DIRECT },
  { name: "cn_domain", behavior: "domain", policy: POLICY_DIRECT },
  { name: "cn_ip", behavior: "ipcidr", policy: POLICY_DIRECT, noResolve: true },
  { name: "fakeip_filter", behavior: "domain", policy: null },
  { raw: "MATCH," + POLICY_MAIN },
];

const POLICY_DNS = {
  [POLICY_DIRECT]: DNS_CN,
};

const BASE_CONFIG = {
  "mixed-port": 7894,
  mode: "rule",
  "allow-lan": true,
  "bind-address": "*",
  "tcp-concurrent": true,
  "inbound-tfo": true,
  "unified-delay": true,
  "log-level": "silent",
  ipv6: false,
  "find-process-mode": "strict",
  "etag-support": true,
  "keep-alive-idle": 600,
  "keep-alive-interval": 60,
  "external-controller": "127.0.0.1:9090",
  "external-ui-name": "zashboard",
  "external-ui": "ui",
  "external-ui-url": "https://github.com/Zephyruso/zashboard/releases/latest/download/dist-no-fonts.zip",
  secret: "",
  profile: { "store-selected": true, "store-fake-ip": true },
  ntp: { enable: true, server: "ntp.aliyun.com", port: 123, interval: 60, "write-to-system": false },
  experimental: { "quic-go-disable-gso": true, "quic-go-disable-ecn": true },
  tun: {
    enable: true,
    stack: "gvisor",
    mtu: 1480,
    "dns-hijack": ["udp://any:53", "tcp://any:53"],
    "auto-detect-interface": true,
    "auto-route": true,
    "auto-redirect": true,
    "strict-route": true,
    "route-exclude-cidr": ["192.168.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "224.0.0.0/4"],
    "disable-icmp-forwarding": true,
    "endpoint-independent-nat": true,
    "udp-timeout": 60,
    gso: true,
    "gso-max-size": 65536,
  },
  sniffer: {
    enable: true,
    "override-destination": true,
    "parse-pure-ip": true,
    "force-dns-mapping": true,
    sniff: {
      QUIC: { ports: [443, 8443] },
      TLS: { ports: [443, 8443] },
      HTTP: { ports: [80, "8080-8880"] },
    },
    "force-domain": [
      "+.googlevideo.com", "+.youtube.com", "+.ytimg.com", "+.googlecdn.com",
      "+.netflix.com", "+.nflxvideo.net",
      "+.cloudfront.net", "+.cloudflare.net", "+.fastly.net",
      "+.akamaized.net", "+.akamai.net",
      "+.telegram.org", "+.t.me", "+.tdesktop.com",
      "+.cdn-telegram.org", "+.telegram-cdn.org", "+.cdn.telegram.org",
      "+.tiktokcdn.com", "+.tiktokv.com",
      "+.amazonaws.com", "+.media.dssott.com",
    ],
    "skip-domain": [
      "localhost", "+.lan", "+.local", "+.arpa", "+.invalid", "+.test",
      "+.push.apple.com", "+.apple.com", "+.icloud.com",
      "dlg.io.mi.com", "+.mi.com", "+.xiaomi.com", "+.market.xiaomi.com",
      "+.wechat.com", "+.qq.com", "+.qpic.cn", "+.wechatapp.com",
      "+.oray.com", "+.sunlogin.net",
      "+.pvp.net", "+.riotgames.com",
      "cloudflare-ech.com", "+.openai.*",
    ],
    "skip-src-address": ["127.0.0.0/8", "::1/128"],
    "skip-dst-address": ["rule-set:private_ip", "rule-set:cn_ip", "rule-set:telegram_ip"],
  },
  hosts: {
    "dns.alidns.com": ["223.5.5.5", "223.6.6.6"],
    "doh.pub": ["1.12.12.12", "120.53.53.53"],
    "dns.cloudflare.com": ["1.1.1.1", "1.0.0.1"],
    "dns.google": ["8.8.8.8", "8.8.4.4"],
    "services.googleapis.cn": ["services.googleapis.com"],
    "google.cn":   ["google.com"],
    "cn.bing.com": ["global.bing.com"],
    "+.mcdn.bilivideo.com": ["0.0.0.0"],
    "+.mcdn.bilivideo.cn": ["0.0.0.0"],
  },
};

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function compareStrings(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function naturalSortKey(text) {
  return text.replace(DIGITS_PATTERN, function (digits) {
    return digits.padStart(NATURAL_SORT_PAD_WIDTH, "0");
  });
}

function getRegionIndex(nodeName) {
  let matchedIndex = -1;
  let matchedPosition = -1;
  for (let i = 0; i < REGIONS.length; i++) {
    const pattern = REGIONS[i].pattern;
    pattern.lastIndex = 0;
    const match = pattern.exec(nodeName);
    if (match && match.index > matchedPosition) {
      matchedPosition = match.index;
      matchedIndex = i;
    }
  }
  return matchedIndex;
}

function processProxies(rawProxies) {
  const seenNames = new Set();
  const sortEntries = [];

  for (let i = 0; i < rawProxies.length; i++) {
    const proxy = rawProxies[i];
    const name = proxy && typeof proxy.name === "string" ? proxy.name.trim() : "";
    if (!name || seenNames.has(name) || EXCLUDE_PATTERN.test(name)) continue;
    seenNames.add(name);

    const flagMatch = FLAG_EMOJI_PATTERN.exec(name);
    sortEntries.push({
      proxy: proxy.name === name ? proxy : Object.assign({}, proxy, { name: name }),
      name: name,
      flag: flagMatch ? flagMatch[1] : "",
      sortKey: naturalSortKey(flagMatch ? name.slice(flagMatch[0].length) : name),
      regionIndex: getRegionIndex(name),
    });
  }

  sortEntries.sort(function (entryA, entryB) {
    return compareStrings(entryA.flag, entryB.flag) || compareStrings(entryA.sortKey, entryB.sortKey);
  });

  const regionBuckets = REGIONS.map(function () { return []; });
  const otherBucket = [];
  const proxies = [];
  const proxyNames = [];

  for (let j = 0; j < sortEntries.length; j++) {
    const entry = sortEntries[j];
    proxies.push(entry.proxy);
    proxyNames.push(entry.name);
    if (entry.regionIndex >= 0) {
      regionBuckets[entry.regionIndex].push(entry.name);
    } else {
      otherBucket.push(entry.name);
    }
  }

  return {
    proxies: proxies,
    proxyNames: proxyNames,
    regionBuckets: regionBuckets,
    otherBucket: otherBucket,
  };
}

function makeRuleProvider(rulesetName, behavior, format) {
  const rawUrl = RULESET_URL[rulesetName];
  if (!rawUrl) throw new Error("未找到规则集 URL: " + rulesetName);

  const isGithubUrl = rawUrl.indexOf(GITHUB_RAW_HOST) !== -1;
  const fileExt = format === "text" ? "txt" : format;
  const provider = {
    type: "http",
    format: format,
    behavior: behavior,
    interval: 86400,
    url: isGithubUrl ? GITHUB_PROXY_PREFIX + rawUrl : rawUrl,
    path: "./ruleset/" + rulesetName + "." + fileExt,
  };
  if (isGithubUrl) provider.proxy = POLICY_MAIN;
  return provider;
}

function buildRuleArtifacts() {
  const ruleProviders = {};
  const rules = [];
  const nameserverPolicy = { "+.arpa": "system" };

  for (let i = 0; i < RULE_DEFS.length; i++) {
    const ruleDef = RULE_DEFS[i];

    if (ruleDef.raw != null) {
      rules.push(ruleDef.raw);
      continue;
    }

    const rulesetName = ruleDef.name;
    const behavior = ruleDef.behavior;
    const policy = ruleDef.policy;
    const format = ruleDef.format != null ? ruleDef.format : "mrs";

    ruleProviders[rulesetName] = makeRuleProvider(rulesetName, behavior, format);

    if (policy) {
      rules.push(ruleDef.noResolve
        ? "RULE-SET," + rulesetName + "," + policy + ",no-resolve"
        : "RULE-SET," + rulesetName + "," + policy);
    }

    if (behavior === "domain") {
      const rulesetRef = "rule-set:" + rulesetName;
      let nameserver = ruleDef.dns;
      if (nameserver == null && policy) {
        nameserver = POLICY_DNS[policy] || DNS_GLOBAL;
      }
      if (nameserver) nameserverPolicy[rulesetRef] = nameserver;
    }
  }

  const fakeIpFilter = ["rule-set:private_domain", "rule-set:fakeip_filter", "rule-set:cn_domain"];

  return {
    ruleProviders: ruleProviders,
    rules: rules,
    nameserverPolicy: nameserverPolicy,
    fakeIpFilter: fakeIpFilter,
  };
}

const RULE_ARTIFACTS = buildRuleArtifacts();

function attachProxyProviders(group, providerNames, filter, excludeFilter) {
  if (providerNames && providerNames.length) {
    group.use = providerNames.slice();
    if (filter) group.filter = filter;
    if (excludeFilter) group["exclude-filter"] = excludeFilter;
  }
  return group;
}

function makeNodeGroup(baseConfig, name, icon, members, providerNames, filter, excludeFilter) {
  const group = Object.assign({}, baseConfig, { name: name });
  if (icon) group.icon = icon;
  if (members && members.length) group.proxies = members.slice();
  attachProxyProviders(group, providerNames, filter, excludeFilter);
  return group;
}

function makeRegionContainerGroup(name, icon, members, providerNames, filter, excludeFilter, autoGroupName, balanceGroupName) {
  const proxies = [autoGroupName, balanceGroupName];
  for (let i = 0; i < members.length; i++) proxies.push(members[i]);

  const group = Object.assign({}, SELECT_BASE, { name: name, icon: icon, proxies: proxies });
  attachProxyProviders(group, providerNames, filter, excludeFilter);
  return group;
}

function buildGroups(proxyData, providerNames) {
  const proxyNames = proxyData.proxyNames;
  const regionBuckets = proxyData.regionBuckets;
  const otherBucket = proxyData.otherBucket;
  const hasProxyProviders = providerNames.length > 0;

  const regionSelectNames = [];
  const allGroups = [];

  for (let i = 0; i < REGIONS.length; i++) {
    const region = REGIONS[i];
    const members = regionBuckets[i];
    if (!members.length && !hasProxyProviders) continue;

    const regionFilter = hasProxyProviders ? "(?i)" + region.pattern.source : null;
    const autoGroupName = region.name + "-" + NAME_AUTO;
    const balanceGroupName = region.name + "-" + NAME_BALANCE;

    const autoGroup = makeNodeGroup(URLTEST_BASE, autoGroupName, ICON.auto, members, providerNames, regionFilter, null);
    const balanceGroup = makeNodeGroup(BALANCE_BASE, balanceGroupName, ICON.balance, members, providerNames, regionFilter, null);
    autoGroup.hidden = true;
    balanceGroup.hidden = true;

    allGroups.push(autoGroup, balanceGroup);
    allGroups.push(makeRegionContainerGroup(
      region.name, region.icon, members, providerNames, regionFilter, null, autoGroupName, balanceGroupName
    ));
    regionSelectNames.push(region.name);
  }

  const hasOtherNodes = otherBucket.length > 0 || hasProxyProviders;
  if (hasOtherNodes) {
    const otherExcludeFilter = hasProxyProviders ? OTHER_NODE_EXCLUDE_FILTER : null;
    const otherAutoName = GROUP_NAME.other + "-" + NAME_AUTO;
    const otherBalanceName = GROUP_NAME.other + "-" + NAME_BALANCE;

    const otherAutoGroup = makeNodeGroup(URLTEST_BASE, otherAutoName, ICON.auto, otherBucket, providerNames, null, otherExcludeFilter);
    const otherBalanceGroup = makeNodeGroup(BALANCE_BASE, otherBalanceName, ICON.balance, otherBucket, providerNames, null, otherExcludeFilter);
    otherAutoGroup.hidden = true;
    otherBalanceGroup.hidden = true;

    allGroups.push(otherAutoGroup, otherBalanceGroup);
    allGroups.push(makeRegionContainerGroup(
      GROUP_NAME.other, ICON.other, otherBucket, providerNames, null, otherExcludeFilter, otherAutoName, otherBalanceName
    ));
  }

  const globalAutoGroup = makeNodeGroup(URLTEST_BASE, NAME_AUTO, ICON.auto, proxyNames, providerNames, null, null);
  const globalBalanceGroup = makeNodeGroup(BALANCE_BASE, NAME_BALANCE, ICON.balance, proxyNames, providerNames, null, null);
  globalAutoGroup.hidden = true;
  globalBalanceGroup.hidden = true;

  const allNodesGroup = makeNodeGroup(SELECT_BASE, GROUP_NAME.all, ICON.all, proxyNames, providerNames, null, null);

  const mainGroupProxies = [NAME_AUTO, NAME_BALANCE, GROUP_NAME.all].concat(regionSelectNames);
  if (hasOtherNodes) mainGroupProxies.push(GROUP_NAME.other);
  const mainGroup = Object.assign({}, SELECT_BASE, {
    name: POLICY_MAIN, icon: ICON.select, proxies: mainGroupProxies,
  });

  const serviceProxyOptions = [POLICY_MAIN].concat(regionSelectNames);
  const serviceGroups = [];
  for (let s = 0; s < SERVICES.length; s++) {
    const service = SERVICES[s];
    serviceGroups.push(Object.assign({}, SELECT_BASE, {
      name: service.name, icon: service.icon, proxies: serviceProxyOptions.slice(),
    }));
  }

  const orderedGroups = [mainGroup, allNodesGroup]
    .concat(serviceGroups)
    .concat([globalAutoGroup, globalBalanceGroup])
    .concat(allGroups);

  const allGroupNames = [];
  for (let g = 0; g < orderedGroups.length; g++) allGroupNames.push(orderedGroups[g].name);
  const globalGroup = Object.assign({}, SELECT_BASE, {
    name: GROUP_NAME.global, icon: ICON.global, proxies: allGroupNames,
  });

  return [globalGroup].concat(orderedGroups);
}

function buildDNS(nameserverPolicy, fakeIpFilter) {
  return {
    enable: true,
    listen: "0.0.0.0:7874",
    ipv6: false,
    "prefer-h3": false,
    "tls-version": { min: "1.2", max: "1.3" },
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-ttl": 1,
    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": fakeIpFilter,
    "respect-rules": true,
    "use-hosts": true,
    "use-system-hosts": true,
    "cache-algorithm": "arc",
    "cache-size": 2048,
    "default-nameserver": DNS_DEFAULT,
    "proxy-server-nameserver": DNS_CN,
    "direct-nameserver": DNS_DEFAULT,
    "direct-nameserver-follow-policy": true,
    nameserver: DNS_GLOBAL,
    "nameserver-policy": nameserverPolicy,
  };
}

function main(config) {
  const inputConfig = isPlainObject(config) ? config : {};

  const rawProxies = Array.isArray(inputConfig.proxies) ? inputConfig.proxies : [];
  const proxyProviders = inputConfig["proxy-providers"];
  const providerNames = isPlainObject(proxyProviders) ? Object.keys(proxyProviders) : [];

  delete inputConfig["global-client-fingerprint"];

  const proxyData = processProxies(rawProxies);

  Object.assign(inputConfig, BASE_CONFIG, {
    proxies: proxyData.proxies,
    "proxy-groups": buildGroups(proxyData, providerNames),
    rules: RULE_ARTIFACTS.rules,
    "rule-providers": RULE_ARTIFACTS.ruleProviders,
    dns: buildDNS(RULE_ARTIFACTS.nameserverPolicy, RULE_ARTIFACTS.fakeIpFilter),
  });

  return inputConfig;
}
