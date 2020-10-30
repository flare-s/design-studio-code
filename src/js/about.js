import "../scss/main.scss";
// import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "../loaders/closest";
import {mobNav} from "../loaders/nav";
import {initAccordion} from "../loaders/accordion";
import {initTablist} from "../loaders/tablist";

mobNav();
initAccordion();
initTablist();