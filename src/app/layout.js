"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RootLayout;
exports.metadata = void 0;
require("./styles.css");
var _google = require("next/font/google");
var _NavBar = _interopRequireDefault(require("./components/specific/NavBar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var onest = (0, _google.Onest)({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest"
});
var metadata = exports.metadata = {
  title: "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
  icons: {
    icon: "/images/portfolio.thumbnail.webp"
  },
  description: "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
  keywords: ["Leonardo Juan Pablo Valdez", "Leonardo Valdez", "Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Next.js", "SaaS applications", "web development", "e-commerce backend", "AI prompt engineering", "responsive design", "JavaScript developer", "agile developer", "UI/UX developer", "scalable web applications", "Tucuman Argentina developer"],
  alternates: {
    canonical: "https://vleonardojuanpablo.vercel.app/",
    languages: {
      en: "https://vleonardojuanpablo.vercel.app/",
      es: "https://vleonardojuanpablo.vercel.app/"
    }
  },
  openGraph: {
    title: "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
    description: "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
    url: "https://vleonardojuanpablo.vercel.app/",
    type: "website",
    images: [{
      url: "/images/portfolio-thumbnail.webp",
      // Replace with actual image URL
      width: 1200,
      height: 630,
      alt: "Leonardo Valdez Portfolio Thumbnail"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Valdez | Frontend Developer Portfolio",
    description: "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js.",
    images: ["/images/portfolio-thumbnail.webp"] // Replace with actual image URL
  }
};
function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("html", {
    lang: "en",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("body", {
    className: "".concat(onest.variable)
  }, /*#__PURE__*/React.createElement(_NavBar.default, null), /*#__PURE__*/React.createElement("main", {
    className: "container"
  }, children)));
}