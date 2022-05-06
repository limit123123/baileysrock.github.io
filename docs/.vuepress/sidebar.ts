import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig(
  {
    
    "/articles/collegeLessons": [
      "/" /* /bar/ */,
      {
        text: "深入理解计算机系统",
        icon: "note",
        children: [
          {
            text: "计算机系统大作业",
            icon: "note",
            collapsable: true,
            prefix: "CSAPP/",
            children: ["finalProject"],
          },
          // {
          //   text: "文章 5-12",
          //   icon: "note",
          //   collapsable: true,
          //   prefix: "article/",
          //   children: ["article5", "article6", "article7", "article8"],
          // },
        ],
      },
      {
        text: "软件构造",
        icon: "note",
        children: [
          {
            text: "软件构造实验",
            icon: "note",
            collapsable: true,
            prefix: "softwareConstructure/",
            children: ["lesson1.md","lesson2.md","lesson3.md","lesson4.md","lesson5.md","lesson6.md","lesson7.md","lesson8.md"],
          },
          // {
          //   text: "文章 5-12",
          //   icon: "note",
          //   collapsable: true,
          //   prefix: "article/",
          //   children: ["article5", "article6", "article7", "article8"],
          // },
        ],
      },
      {
        text: "编译系统",
        icon: "note",
        children: [
          {
            text: "编译原理课程",
            icon: "note",
            collapsable: true,
            prefix: "compileSystem/",
            children: ["compileLesson1.md"],
          },
        ],
      },
    ],


    "/articles/naturalLanguageProcess": [
      "/" /* /bar/ */,
      {
        text: "Huggingface",
        icon: "note",
        children: [
          {
            text: "trainer",
            icon: "note",
            collapsable: true,
            prefix: "trainer/",
            children: ["trainer.md"],
          },
          {
            text: "tokenizer",
            icon: "note",
            collapsable: true,
            prefix: "tokenizer/",
            children: ["tokenizer.md"],
          },
        ],
      },
     
    ],
    

    "/articles/deepLearning": [
      "/" /* /bar/ */,
      {
        text: "读论文",
        icon: "note",
        collapsable: true,
        prefix:"readingPapers/",
        children: ["FaceNet.md"],
      },
     
    ],
    


  },
);
