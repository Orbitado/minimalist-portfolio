"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _menuData = require("@/app/constants/menuData");
var _types = require("@/app/types/types");
var _lucideReact = require("lucide-react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function NavBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nav__logo"
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: "/"
  }, "LV")), /*#__PURE__*/React.createElement("ul", {
    className: "nav__list"
  }, _menuData.navbarLinks.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.name,
      className: "nav__item"
    }, /*#__PURE__*/React.createElement(_link.default, {
      href: link.url,
      className: "nav__link"
    }, link.name));
  }), /*#__PURE__*/React.createElement("li", {
    className: "nav__item--theme-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__theme-toggle"
  }, /*#__PURE__*/React.createElement(_lucideReact.Moon, {
    className: "nav__icon nav__item"
  }), /*#__PURE__*/React.createElement(_lucideReact.Sun, {
    className: "nav__icon nav__item"
  }))), /*#__PURE__*/React.createElement("li", {
    className: "nav__item--theme-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__theme-toggle"
  }, /*#__PURE__*/React.createElement(_lucideReact.Globe, {
    className: "nav__icon nav__item"
  }))))));
}
var _default = exports.default = NavBar;