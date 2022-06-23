import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig(
  {
    
    "/articles/CollegeLessons": [
      "/" /* /bar/ */,
      "/articles/CollegeLessons/",
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
            prefix: "SoftwareConstructure/",
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
            prefix: "CompileSystem/",
            children: ["compileLesson1.md","compileLesson2.md","compileLesson3.md","compileLesson4.md"],
          },
        ],
      },
    ],


    "/articles/NaturalLanguageProcessing": [
      "/" /* /bar/ */,
      "/articles/NaturalLanguageProcessing/",
      {
        text: "读论文",
        icon: "note",
        collapsable:true,
        prefix:"ReadingPapers/",
        children:["IncorporatingHierarchyIntoTextEncoder.md", "DoTransformersReallyPerformBadforGraphRepresentation.md", 
            "Hierarchy-AwareGlobalModelForHierarchicalTextClassification.md"]
      }
      // {
      //   text: "Huggingface",
      //   icon: "note",
      //   collapsable:true,
      //   children: [
      //     {
      //       text: "trainer",
      //       icon: "note",
      //       collapsable: true,
      //       prefix: "trainer/",
      //       children: ["trainer.md"],
      //     },
      //     {
      //       text: "tokenizer",
      //       icon: "note",
      //       collapsable: true,
      //       prefix: "tokenizer/",
      //       children: ["tokenizer.md"],
      //     },
      //   ],
      // },

      // {
      //   text: "基于预训练模型的方法",
      //   icon: "note",
      //   collapsable:true,
      //   children:[
      //     {
      //       text:"",
      //       collapsable:true,
      //       prefix:"",
      //       children:[],
      //     }
      //   ]
      // }
     
    ],
    

    "/articles/DeepLearning": [
      "/" /* /bar/ */,
      "/articles/DeepLearning/",
      {
        text: "读论文",
        icon: "note",
        collapsable: true,
        prefix:"ReadingPapers/",
        children: ["FaceNet.md","AlexNet.md","ResNet.md","GAN.md"],
      },
      {
        text: "理论推导",
        icon: "note",
        collapsable: true,
        prefix:"Theories/",
        children: ["RNN.md", "GRU.md", "LSTM.md"],
      },
     
    ],


    "/articles/Essays": [
      "/" /* /bar/ */,
      "/articles/Essays/",
      {
        text: "2022",
        icon: "note",
        collapsable: false,
        prefix:"2022/",
        children: ["2022-05-21.md"],
      },
     
    ],
    


  },
);
