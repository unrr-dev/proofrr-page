"use client";

import type { ComponentType } from "react";
import { SiDropbox, SiNotion } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

// Layout is based on an 854 x 906 design canvas (matching the original design)
const W = 854;
const H = 906;

export type Node = {
  label: string;
  x: number; // icon center x
  y: number; // icon center y
  dotX: number;
  dotY: number;
  Icon: ComponentType<{ size?: number; color?: string; className?: string }>;
  color: string;
  path: string; // curve from the node dot to the hub
};

/* Official Multi-Color Google Drive Logo */
export function GoogleDriveLogo({ size = 38 }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 87.3 78" fill="none" className="w-full h-full">
      <path d="M6.6 66.85L10.45 73.5C11.25 74.9 12.4 76 13.75 76.8L27.5 53H0C0 54.55 0.4 56.1 1.2 57.5L6.6 66.85Z" fill="#0066DA" />
      <path d="M43.65 25L30 1.2C28.65 2 27.5 3.1 26.7 4.5L1.3 48.5C0.5 49.9 0.1 51.45 0.1 53H27.6L43.65 25Z" fill="#00AC47" />
      <path d="M73.55 76.8C74.9 76 76.05 74.9 76.85 73.5L86.1 57.5C86.9 56.1 87.3 54.55 87.3 53H59.8L73.55 76.8Z" fill="#EA4335" />
      <path d="M43.65 25L57.4 1.2C56.05 0.4 54.5 0 52.9 0H34.4C32.8 0 31.25 0.4 29.9 1.2L43.65 25Z" fill="#00832D" />
      <path d="M59.8 53H87.3C87.3 51.45 86.9 49.9 86.1 48.5L60.7 4.5C59.9 3.1 58.75 2 57.4 1.2L43.65 25L59.8 53Z" fill="#FFBA00" />
      <path d="M73.55 76.8L59.8 53H27.5L41.25 76.8C42.6 77.6 44.15 78 45.75 78H69.05C70.65 78 72.2 77.6 73.55 76.8Z" fill="#2684FC" />
    </svg>
  );
}

/* Official Multi-Color Figma Logo */
export function FigmaLogo({ size = 38 }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none" className="w-full h-full">
      <path d="M19 0H9.5C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19H19V0Z" fill="#F24E1E" />
      <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
      <path d="M19 19H9.5C4.25329 19 0 23.2533 0 28.5C0 33.7467 4.25329 38 9.5 38H19V19Z" fill="#A259FF" />
      <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    </svg>
  );
}

/* Official Blue Zoom Camera Logo */
export function ZoomCameraLogo({ size = 38 }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="11" width="27" height="26" rx="7.5" fill="#0B5CFF" />
      <path d="M31 19.2L42.2 13.8C43.2 13.3 44 13.9 44 15V33C44 34.1 43.2 34.7 42.2 34.2L31 28.8V19.2Z" fill="#0B5CFF" />
    </svg>
  );
}

/* Official Multi-Color Slack Logo */
export function SlackLogo({ size = 38 }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className="w-full h-full">
      <path d="M28.3 80.6a13.3 13.3 0 1 1-13.3-13.3h13.3v13.3z" fill="#E01E5A" />
      <path d="M35 80.6a13.3 13.3 0 1 1 26.6 0v33.4a13.3 13.3 0 1 1-26.6 0V80.6z" fill="#E01E5A" />
      <path d="M47.4 28.3a13.3 13.3 0 1 1-13.3-13.3v13.3h13.3z" fill="#36C5F0" />
      <path d="M47.4 35a13.3 13.3 0 1 1 0 26.6H14a13.3 13.3 0 1 1 0-26.6h33.4z" fill="#36C5F0" />
      <path d="M99.7 47.4a13.3 13.3 0 1 1 13.3 13.3H99.7V47.4z" fill="#2EB67D" />
      <path d="M93 47.4a13.3 13.3 0 1 1-26.6 0V14a13.3 13.3 0 1 1 26.6 0v33.4z" fill="#2EB67D" />
      <path d="M80.6 99.7a13.3 13.3 0 1 1 13.3 13.3v-13.3H80.6z" fill="#ECB22E" />
      <path d="M80.6 93a13.3 13.3 0 1 1 0-26.6H114a13.3 13.3 0 1 1 0 26.6H80.6z" fill="#ECB22E" />
    </svg>
  );
}

/* Official Multi-Color Google Calendar Logo */
export function GoogleCalendarLogo({ size = 38 }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 192 192" fill="none" className="w-full h-full">
      <rect x="28" y="28" width="136" height="136" rx="28" fill="#FFFFFF" />
      <path d="M136 28H56C40.5 28 28 40.5 28 56v14h136V56c0-15.5-12.5-28-28-28z" fill="#4285F4" />
      <path d="M164 70v66c0 15.5-12.5 28-28 28h-14V70h42z" fill="#34A853" />
      <path d="M122 164H56c-15.5 0-28-12.5-28-28v-14h94v42z" fill="#FBBC04" />
      <path d="M28 122V70h14v94H56c-15.5 0-28-12.5-28-28z" fill="#EA4335" />
      <rect x="42" y="70" width="108" height="66" fill="#FFFFFF" />
      <text
        x="96"
        y="126"
        textAnchor="middle"
        fill="#4285F4"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="60"
        fontWeight="700"
      >
        31
      </text>
    </svg>
  );
}

/* Adaptable OpenAI Icon */
export function OpenAIIcon({ size = 38, className }: { size?: number; color?: string; className?: string }) {
  return <RiOpenaiFill size={size} className={className || "text-zinc-900 dark:text-zinc-100"} />;
}

/* Adaptable Notion Icon */
export function NotionIcon({ size = 38, className }: { size?: number; color?: string; className?: string }) {
  return <SiNotion size={size} className={className || "text-zinc-900 dark:text-zinc-100"} />;
}

export const NODES: Node[] = [
  {
    label: "OpenAI",
    x: 139,
    y: 128,
    dotX: 139,
    dotY: 241,
    Icon: OpenAIIcon,
    color: "#111111",
    path: "M139 241 C139 305 250 285 352 372",
  },
  {
    label: "Google Drive",
    x: 327,
    y: 128,
    dotX: 327,
    dotY: 241,
    Icon: GoogleDriveLogo,
    color: "#1FA463",
    path: "M327 241 C327 300 385 310 388 364",
  },
  {
    label: "Figma",
    x: 521,
    y: 128,
    dotX: 521,
    dotY: 241,
    Icon: FigmaLogo,
    color: "#F24E1E",
    path: "M521 241 C521 300 465 320 462 364",
  },
  {
    label: "Slack",
    x: 713,
    y: 128,
    dotX: 713,
    dotY: 241,
    Icon: SlackLogo,
    color: "#4A154B",
    path: "M713 241 C713 290 580 285 497 376",
  },
  {
    label: "Zoom",
    x: 139,
    y: 700,
    dotX: 139,
    dotY: 625,
    Icon: ZoomCameraLogo,
    color: "#0B5CFF",
    path: "M139 625 C139 555 280 590 350 512",
  },
  {
    label: "Dropbox",
    x: 327,
    y: 700,
    dotX: 327,
    dotY: 625,
    Icon: SiDropbox,
    color: "#0061FF",
    path: "M327 625 C327 575 385 580 388 522",
  },
  {
    label: "Notion",
    x: 521,
    y: 700,
    dotX: 521,
    dotY: 625,
    Icon: NotionIcon,
    color: "#111111",
    path: "M521 625 C521 575 465 570 462 522",
  },
  {
    label: "Google Calendar",
    x: 713,
    y: 700,
    dotX: 713,
    dotY: 625,
    Icon: GoogleCalendarLogo,
    color: "#4285F4",
    path: "M713 625 C713 560 580 580 500 512",
  },
];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function IntegrationHub() {
  return (
    <div className="flex w-full items-center justify-center p-1 sm:p-3">
      <div
        className="hub-card @container relative w-full max-w-[500px] overflow-hidden rounded-[32px] bg-white dark:bg-[#111215] shadow-[0_8px_40px_rgba(30,64,175,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-colors duration-300"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        {/* connector lines + traveling pulses */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full pointer-events-none"
          fill="none"
          aria-hidden
        >
          {NODES.map((n, i) => (
            <g key={n.label}>
              {/* connector path */}
              <path
                d={n.path}
                pathLength={1}
                stroke="#2563EB"
                strokeWidth={3}
                strokeLinecap="round"
                className="hub-line stroke-[#2563EB] dark:stroke-[#3B82F6]"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              />
              {/* node dot */}
              <circle
                cx={n.dotX}
                cy={n.dotY}
                r={6.5}
                fill="#2563EB"
                className="hub-dot fill-[#2563EB] dark:fill-[#3B82F6]"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              />
              {/* glowing pulse traveling inward from app node to center hub */}
              <circle r={5} fill="#60A5FA" opacity={0} className="fill-[#60A5FA] dark:fill-[#93C5FD]">
                <animate
                  attributeName="opacity"
                  values="0;0.95;0.95;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="3s"
                  begin={`${1.8 + i * 0.35}s`}
                  repeatCount="indefinite"
                />
                <animateMotion
                  dur="3s"
                  begin={`${1.8 + i * 0.35}s`}
                  repeatCount="indefinite"
                  path={n.path}
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* app nodes */}
        {NODES.map((n, i) => (
          <div
            key={n.label}
            className="absolute"
            style={{
              left: pct(n.x, W),
              top: pct(n.y, H),
              width: pct(112, W),
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="hub-node flex flex-col items-center cursor-default select-none"
              style={{ animationDelay: `${0.1 + i * 0.08}s, ${0.9 + i * 0.25}s` }}
            >
              <div className="hub-circle flex aspect-square w-full items-center justify-center rounded-full bg-white dark:bg-[#1a1b22] border border-slate-100/90 dark:border-white/10 shadow-[0_3px_16px_rgba(15,23,42,0.08)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.4)] p-[18%]">
                <div className="flex h-full w-full items-center justify-center">
                  <n.Icon size={38} color={n.color} />
                </div>
              </div>
              <span className="mt-2 sm:mt-2.5 whitespace-nowrap text-[clamp(9.5px,2.4cqw,13px)] font-semibold text-slate-900 dark:text-zinc-100 tracking-tight">
                {n.label}
              </span>
            </div>
          </div>
        ))}

        {/* center hub (Proofrr mascot character) */}
        <div
          className="hub-center absolute"
          style={{
            left: "50%",
            top: pct(443, H),
            width: pct(162, W),
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="hub-breathe aspect-square w-full overflow-hidden rounded-[28%] bg-[#0066FF] shadow-[0_12px_32px_rgba(0,102,255,0.38)] dark:shadow-[0_12px_36px_rgba(37,99,235,0.48)]">
            <Eyes />
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hub-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: hub-draw 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .hub-dot {
          opacity: 0;
          animation: hub-fade 0.4s ease-out forwards;
        }
        .hub-node {
          opacity: 0;
          animation: hub-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            hub-float 4.5s ease-in-out infinite;
        }
        .hub-circle {
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
        }
        .hub-node:hover .hub-circle {
          transform: scale(1.14);
          box-shadow: 0 10px 28px -4px rgba(37, 99, 235, 0.32);
        }
        .hub-center {
          animation: hub-center-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .hub-breathe {
          animation: hub-breathe 3.5s ease-in-out 1s infinite;
        }
        .eye-pupils {
          animation: hub-look 7s ease-in-out 1.2s infinite;
        }
        .eye-lid {
          transform-box: fill-box;
          transform-origin: center;
          animation: hub-blink 5s ease-in-out infinite;
        }

        @keyframes hub-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes hub-fade {
          to { opacity: 1; }
        }
        @keyframes hub-pop {
          from { opacity: 0; transform: scale(0.6) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hub-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -6px; }
        }
        @keyframes hub-center-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes hub-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes hub-look {
          0%, 15%  { transform: translate(0, 0); }
          25%, 40% { transform: translate(-32px, 26px); }
          50%, 62% { transform: translate(34px, 20px); }
          72%, 85% { transform: translate(0, -26px); }
          100%     { transform: translate(0, 0); }
        }
        @keyframes hub-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hub-node, .hub-breathe, .eye-pupils, .eye-lid, .hub-line, .hub-dot, .hub-center {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}

export default IntegrationHub;

/* Authentic Proofrr mascot character with animated interactive pupils and blink */
function Eyes() {
  const eyes = [
    { cx: 260, cy: 449 },
    { cx: 639, cy: 449 },
  ];
  return (
    <svg viewBox="0 0 900 900" className="block h-full w-full" aria-hidden>
      {eyes.map((e, i) => (
        <g key={i} className="eye-lid">
          <defs>
            <clipPath id={`hub-eye-clip-${i}`}>
              <ellipse cx={e.cx} cy={e.cy - 4} rx={118} ry={134} />
            </clipPath>
          </defs>
          {/* Yellow outer eye ring */}
          <circle cx={e.cx} cy={e.cy} r={187} fill="#FFE812" />
          {/* Light blue sclera/iris */}
          <ellipse cx={e.cx} cy={e.cy - 4} rx={118} ry={134} fill="#75AEFF" />
          {/* Moving pupil clipped inside the eye */}
          <g clipPath={`url(#hub-eye-clip-${i})`}>
            <g className="eye-pupils">
              <circle cx={e.cx - 48} cy={e.cy + 46} r={88} fill="#000000" />
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
