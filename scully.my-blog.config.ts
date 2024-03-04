import { ScullyConfig } from "@scullyio/scully";
import '@scullyio/scully-plugin-puppeteer';
export const config:ScullyConfig = {
  projectRoot:'./src',
  projectName:'my-blog',
  outDir:'./dist/static',
  routes:{
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },

  }
}
