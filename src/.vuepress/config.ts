import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "WorkTime",
      description: "努力摸鱼，禁止工作",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
