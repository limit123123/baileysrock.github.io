import { defineClientConfig } from "@vuepress/client";
import ChartJS from "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import FlowChart from "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "E:/Code/WebStormProjects/baileysrock.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});