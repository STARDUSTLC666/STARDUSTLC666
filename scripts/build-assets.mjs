import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "..", "assets");
fs.mkdirSync(assetsDir, { recursive: true });

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 1. Hero Banner (Light & Dark) — Set 1: Daylight Prism Horizon (冰川棱镜晨曦光环)
function renderHero(mode) {
  const isLight = mode === "light";
  const skyTop = isLight ? "#FFFFFF" : "#121624";
  const skyMid = isLight ? "#F8FAFC" : "#161B2E";
  const skyBot = isLight ? "#EEF4FF" : "#1C2238";
  const border = isLight ? "#E2E8F0" : "#2B344A";
  const dotColor = isLight ? "#64748B" : "#94A3B8";
  const dotOp = isLight ? "0.26" : "0.22";
  const metaColor = isLight ? "#64748B" : "#94A3B8";
  const t1 = isLight ? "#09090B" : "#FFFFFF";
  const t2 = isLight ? "#27272A" : "#E2E8F0";
  const t3 = isLight ? "#71717A" : "#94A3B8";
  const subColor = isLight ? "#475569" : "#CBD5E1";
  const triadColor = isLight ? "#94A3B8" : "#64748B";
  const planetFill = isLight ? "#FFFFFF" : "#0E121E";
  const planetBaseStroke = isLight ? "#E2E8F0" : "#252E42";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="840" height="304" viewBox="0 0 840 304" role="img" aria-label="STARDUST - AI Systems and Harness Engineering">
  <defs>
    <style>
      @keyframes prismSweep {
        0%, 100% { transform: translateX(-140px); opacity: 0.55; }
        50% { transform: translateX(140px); opacity: 1; }
      }
      .beam { animation: prismSweep 7s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .beam { animation: none; }
      }
    </style>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${skyTop}"/>
      <stop offset="62%" stop-color="${skyMid}"/>
      <stop offset="100%" stop-color="${skyBot}"/>
    </linearGradient>
    <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${dotColor}" fill-opacity="${dotOp}"/>
    </pattern>
    <radialGradient id="dotFade" cx="50%" cy="40%" r="52%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <mask id="dotMask">
      <rect width="840" height="304" fill="url(#dotFade)"/>
    </mask>
    <linearGradient id="wordmark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${t1}"/>
      <stop offset="60%" stop-color="${t2}"/>
      <stop offset="100%" stop-color="${t3}"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="94%" r="52%">
      <stop offset="0%" stop-color="#818CF8" stop-opacity="0.28"/>
      <stop offset="46%" stop-color="#F472B6" stop-opacity="0.16"/>
      <stop offset="82%" stop-color="#38BDF8" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${skyTop}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${planetBaseStroke}" stop-opacity="0"/>
      <stop offset="26%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#6366F1"/>
      <stop offset="74%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="${planetBaseStroke}" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="frame">
      <rect width="840" height="304" rx="16"/>
    </clipPath>
  </defs>

  <g clip-path="url(#frame)">
    <rect width="840" height="304" fill="url(#sky)"/>
    <rect width="840" height="304" fill="url(#dots)" mask="url(#dotMask)"/>
    <rect width="840" height="304" fill="url(#halo)"/>
    <line x1="160" y1="1" x2="680" y2="1" stroke="url(#rim)" stroke-width="1.5" opacity="0.65"/>

    <g font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="10.5" letter-spacing="2.5" fill="${metaColor}">
      <text x="36" y="38">STARDUSTLC666</text>
      <text x="804" y="38" text-anchor="end">DEEPSEEK HARNESS · 18+ MODULES</text>
    </g>

    <text x="420" y="134" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="54" font-weight="800" letter-spacing="10" fill="url(#wordmark)">STARDUST</text>

    <text x="420" y="170" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif" font-size="14.5" font-weight="500" letter-spacing="1" fill="${subColor}">把模糊的 AI 需求，构筑为可运行、可复核、可交付的系统。</text>

    <text x="420" y="200" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="10.5" letter-spacing="4" fill="${triadColor}">EXECUTABLE   /   VERIFIABLE   /   MAINTAINABLE</text>

    <ellipse cx="420" cy="488" rx="560" ry="246" fill="${planetFill}" stroke="${planetBaseStroke}" stroke-width="1.5"/>
    <ellipse cx="420" cy="488" rx="560" ry="246" fill="none" stroke="url(#rim)" stroke-width="2" opacity="0.82"/>
    <g class="beam">
      <ellipse cx="420" cy="488" rx="560" ry="246" fill="none" stroke="url(#rim)" stroke-width="3.2"/>
    </g>
  </g>
  <rect x="0.75" y="0.75" width="838.5" height="302.5" rx="15.25" fill="none" stroke="${border}" stroke-width="1.5"/>
</svg>
`;
}

// 2. Flagship 2x2 Cards (01 dsh-email, 02 dsh-remotion & hyperframes, 03 dsh-ppt, 04 dsh-dream)
const CARDS = [
  {
    slug: "card-01-email",
    num: "01",
    accentLight: "#6366F1",
    accentDark: "#818CF8",
    title: "dsh-email",
    meta: "★ 48  ↗",
    desc: "多账号 OAuth 邮件工作台 · HTML 草稿与二次确认定时发送"
  },
  {
    slug: "card-02-video",
    num: "02",
    accentLight: "#6366F1",
    accentDark: "#818CF8",
    title: "dsh-remotion & hyperframes",
    meta: "★ 74  ↗",
    desc: "React 与 HTML/GSAP 代码驱动双视频工作台 · 预览与导出"
  },
  {
    slug: "card-03-ppt",
    num: "03",
    accentLight: "#EC4899",
    accentDark: "#F472B6",
    title: "dsh-ppt",
    meta: "★ 38  ↗",
    desc: "交付级演示文稿工作台 · 输入原始材料直接生成可下载 PPTX"
  },
  {
    slug: "card-04-dream",
    num: "04",
    accentLight: "#0EA5E9",
    accentDark: "#38BDF8",
    title: "dsh-dream",
    meta: "★ 14  ↗",
    desc: "原生任务记忆插件 · 自动整理候选经验并在工作台核对采纳"
  }
];

function renderCard(card, mode) {
  const isLight = mode === "light";
  const bg = isLight ? "#FFFFFF" : "#151A26";
  const bgGradEnd = isLight ? "#F8FAFC" : "#121622";
  const border = isLight ? "#E2E8F0" : "#293244";
  const titleColor = isLight ? "#0F172A" : "#F8FAFC";
  const descColor = isLight ? "#64748B" : "#94A3B8";
  const metaColor = isLight ? "#64748B" : "#94A3B8";
  const accent = isLight ? card.accentLight : card.accentDark;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="412" height="82" viewBox="0 0 412 82" role="img" aria-label="${esc(card.title)}">
  <defs>
    <linearGradient id="cbg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bgGradEnd}"/>
    </linearGradient>
    <linearGradient id="topLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0"/>
      <stop offset="35%" stop-color="${accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0.6" y="0.6" width="410.8" height="80.8" rx="12" fill="url(#cbg)" stroke="${border}" stroke-width="1.2"/>
  <line x1="24" y1="1.2" x2="220" y2="1.2" stroke="url(#topLine)" stroke-width="1.5"/>
  <text x="20" y="32" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="11.5" font-weight="700" fill="${accent}">${esc(card.num)}</text>
  <text x="48" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14.5" font-weight="700" fill="${titleColor}">${esc(card.title)}</text>
  <text x="392" y="32" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="11" font-weight="600" fill="${metaColor}">${esc(card.meta)}</text>
  <text x="48" y="56" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif" font-size="12.2" fill="${descColor}">${esc(card.desc)}</text>
</svg>
`;
}

// 3. Minimalist Pill Badges (Portfolio, dsh-suite, ai-daily-briefing, Email — 100% Original Projects Only)
const PILLS = [
  { slug: "pill-portfolio", dot: "#6366F1", label: "Homepage · stardustlc666.github.io/home ↗", w: 266 },
  { slug: "pill-suite", dot: "#0EA5E9", label: "dsh-suite · 18+ Plugins ↗", w: 186 },
  { slug: "pill-briefing", dot: "#EC4899", label: "ai-daily-briefing ↗", w: 158 },
  { slug: "pill-email", dot: "#64748B", label: "liuzhousk@gmail.com", w: 174 }
];

function renderPill(pill, mode) {
  const isLight = mode === "light";
  const bg = isLight ? "#F8FAFC" : "#151A26";
  const border = isLight ? "#E2E8F0" : "#293244";
  const fg = isLight ? "#334155" : "#CBD5E1";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${pill.w}" height="32" viewBox="0 0 ${pill.w} 32" role="img" aria-label="${esc(pill.label)}">
  <rect x="0.6" y="0.6" width="${pill.w - 1.2}" height="30.8" rx="15.4" fill="${bg}" stroke="${border}" stroke-width="1.2"/>
  <circle cx="16" cy="16" r="3.5" fill="${pill.dot}"/>
  <text x="27" y="20" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="11" font-weight="600" fill="${fg}">${esc(pill.label)}</text>
</svg>
`;
}

for (const mode of ["light", "dark"]) {
  fs.writeFileSync(path.join(assetsDir, `hero-${mode}.svg`), renderHero(mode), "utf8");
  for (const card of CARDS) {
    fs.writeFileSync(path.join(assetsDir, `${card.slug}-${mode}.svg`), renderCard(card, mode), "utf8");
  }
  for (const pill of PILLS) {
    fs.writeFileSync(path.join(assetsDir, `${pill.slug}-${mode}.svg`), renderPill(pill, mode), "utf8");
  }
}

console.log("Generated", fs.readdirSync(assetsDir).length, "SVG assets successfully.");
