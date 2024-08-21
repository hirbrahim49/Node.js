import { StaticImageData } from 'next/image'; // Assuming you're using Next.js

import ibrahim from "../../public/images/alumi2.jpg";
import aishat from "../../public/images/alumni1.jpg";
import rokibat from "../../public/images/alumni3.jpeg";
import suliyat from "../../public/images/alumni4.jpg";
import alabi from "../../public/images/suliyat.jpg";
import math2 from "../../public/images/math2.jpg";
import englis from "../../public/images/englis.jpg";
import mee1 from "../../public/images/mee1.jpg";
import cve from "../../public/images/cve.jpg";
import download from "../../public/images/download.jpg";
import yoruba from "../../public/images/yoruba.jpg";
import literature from "../../public/images/literature.jpg";
import account from "../../public/images/account.jpg";
import lib from "../../public/images/lib.jpg";
import zoo from "../../public/images/zoo.jpg";
import bio from "../../public/images/bio.jpg";
import med from "../../public/images/med.webp";

export type SubjectDetails = {
  image: any; // Update this to accept StaticImageData
  curricullum: string;
  objectives: string[];
};

export type Subject = {
  [subjectName: string]: SubjectDetails;
};

export type Student = {
  id: string | number;
  Name: string;
  Faculty: string;
  Department: string;
  email:string;
  Image: any; // Update this to accept StaticImageData
  Qoutes:string;
  video: string;
  Award: string;
  OtherAward: string[];
  subjectOffer: Subject[];
};

const studentDataBase: Student[] = [
    {
            id: "CVE/2015/20",
            Name: "Odeyemi Ibrahim",
            Faculty: "Technology",
            Department: "Civil Engineering",
            email:"odeyemiibrahim49@gmail.com",
            Image: ibrahim,
            Qoutes:"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. ",
            video: "",
            Award: "Most Serious Student",
            OtherAward: [
              "Best in Academic Excellence",
              "Best in Technological Innovation",
              "Best in Engineering Design",
            ],
            subjectOffer: [
              {
                maths: {
                  image: math2,
                  curricullum: "#",
                  objectives: [
                    "To develop a solid understanding of mathematical concepts, improve problem-solving skills, and apply mathematical reasoning to real-world situations.",
                  ],
                },
              },
              {
                english: {
                  image: englis,
                  curricullum: "#",
                  objectives: [
                    "To enhance students' reading, writing, speaking, and listening skills in English.",
                  ],
                },
                      },
                       {
                      english:{
                        image:englis,
                        curricullum:"#",
                        objectives:["To enhance students' reading, writing, speaking, and listening skills in English. The course aims to develop a strong command of the language, foster an appreciation for literature, and improve the ability to communicate effectively in both academic and everyday settings. Students will engage in critical thinking, creative expression, and comprehensive analysis of texts to build a solid foundation in English language arts."
                          ]
                      } 
                    },
                       {
                      MEE101:{
                        image:mee1,
                        curricullum:"#",
                        objectives:["To provide students with a thorough understanding of the fundamental principles of mechanical engineering, including thermodynamics, fluid mechanics, materials science, and mechanical design. The course aims to develop problem-solving skills, technical proficiency, and the ability to apply engineering concepts to design, analyze, and optimize mechanical systems. Students will gain hands-on experience with modern tools and techniques, preparing them to address real-world engineering challenges and innovate in various industries."
        
                        ]
                      } 
                    },
                       {
                      CVE101:{
                        image:cve,
                        curricullum:"#",
                        objectives:[
                          "To equip students with a comprehensive understanding of civil engineering principles, including structural analysis, geotechnical engineering, transportation systems, water resources, and environmental engineering. The course aims to develop strong problem-solving skills, technical expertise, and the ability to design, construct, and maintain infrastructure that meets societal needs. Students will learn to apply engineering theories to real-world challenges, ensuring safety, sustainability, and efficiency in the development of civil projects."
                        ]
                      } 
                    },
        
        
        
                ]
            },
               {
                id: "FIA/2015/36",
                Name:  "Tiamiyu aishat",
                Faculty:"Yoruba",
                Department:"Fine Art",
                email:'tiamiyuaishat499@gmail.com',
                Image: aishat,
                Qoutes:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma. apply mathematical reasoning to real-world situations",
                video:"",
                Award: " Most Dramatic student",
                OtherAward:[
                  "Best in Cultural Advocacy",
                  "Best in Volunteerism",
                  "Best in Public Speaking",
                ],
                subjectOffer:[
                    {
                      maths:{
                        image:download,
                        curricullum:"#",
                        objectives:[
                            "To develop a solid understanding of mathematical concepts, improve problem-solving skills, and apply mathematical reasoning to real-world situations. The course aims to enhance students' ability to think critically and logically, enabling them to confidently tackle mathematical challenges in academic and everyday contexts."
                        ]
                      } 
                    },
                       {
                      english:{
                        image:englis,
                        curricullum:"#",
                        objectives:[
                           "To enhance students' reading, writing, speaking, and listening skills in English. The course aims to develop a strong command of the language, foster an appreciation for literature, and improve the ability to communicate effectively in both academic and everyday settings. Students will engage in critical thinking, creative expression, and comprehensive analysis of texts to build a solid foundation in English language arts."
                        ]
                      } 
                    },
                       {
                      yoruba:{
                        image:yoruba,
                        curricullum:"#",
                        objectives:[
                           "To develop students' proficiency in reading, writing, speaking, and understanding the Yoruba language. The course aims to deepen students' appreciation for Yoruba culture, literature, and traditions, while enhancing their ability to communicate effectively in various contexts. Through immersive learning experiences, students will gain a strong foundation in Yoruba grammar, vocabulary, and oral expression, fostering a connection to the rich heritage of the Yoruba-speaking world."
                        ]
                      } 
                    },
                       {
                      literature:{
                        image:literature,
                        curricullum:"#",
                        objectives:[
                        "To cultivate an in-depth understanding and appreciation of literary works from diverse genres, periods, and cultures. The course aims to enhance students' critical thinking, analytical, and interpretive skills through the study of prose, poetry, drama, and other forms of literature. Students will explore themes, literary techniques, and the social, historical, and cultural contexts of texts, enabling them to engage thoughtfully with literature and express their insights effectively in both written and oral forms."
                        ]
                      } 
                    },
        
        
        
                ]
            },
                {
                id: "ACC/1016/17",
                Name:  "Rokibat Olaitan",
                Faculty:"Commercial",
                Department:"Accounting",
                email:"rokibatodeyemi@gmail.com",
                Image: rokibat,
                Qoutes:"Keep your thoughts positive because your thoughts become your words. Keep your words positive because your words become your behavior.",
                video:"",
                Award: " Most Attentive student",
                OtherAward:[
                  "Best in Entrepreneurship",
                  "Best in Student Mentorship",
                  "Best in Leadership",
                ],
                subjectOffer:[
                    {
                      maths:{
                        image:download,
                        
                        curricullum:"#",
                        objectives:[
                         "To develop a solid understanding of mathematical concepts, improve problem-solving skills, and apply mathematical reasoning to real-world situations. The course aims to enhance students' ability to think critically and logically, enabling them to confidently tackle mathematical challenges in academic and everyday contexts."
                        ]
                      } 
                    },
                       {
                      english:{
                        image:englis,
                        curricullum:"#",
                        objectives:[
                          "To enhance students' reading, writing, speaking, and listening skills in English. The course aims to develop a strong command of the language, foster an appreciation for literature, and improve the ability to communicate effectively in both academic and everyday settings. Students will engage in critical thinking, creative expression, and comprehensive analysis of texts to build a solid foundation in English language arts."
                        ]
                      } 
                    },
                       {
                      account:{
                        image:account,
                        curricullum:"#",
                        objectives:[
                           "To provide students with a solid foundation in accounting principles, including financial reporting, auditing, taxation, and managerial accounting. The course aims to develop students' ability to analyze financial information, maintain accurate records, and make informed business decisions. Through practical exercises and case studies, students will gain proficiency in using accounting software and tools, preparing them for careers in accounting, finance, and related fields. The course also emphasizes ethical practices and adherence to professional standards in the accounting profession."
                        ]
                      } 
                    },
                       {
                      Lib:{
                        image:lib,
                        curricullum:"#",
                        objectives:[
                         "To equip students with the knowledge and skills necessary to manage and organize information resources in various library and information service settings. The course aims to develop proficiency in cataloging, classification, information retrieval, and digital resource management. Students will learn to curate collections, assist users in accessing information, and utilize modern technologies to enhance library services. The course also emphasizes the importance of ethical practices, intellectual freedom, and the role of libraries in supporting lifelong learning and community engagement"
                        ]
                      } 
                    },
        
        
        
                ]
            },
                {
                id: "ZOO/2015/42",
                Name:  "Suliyat Olabisi",
                Faculty:"science",
                Department:"Zoology",
                email:"suliyatolabisi133@gmail.com",
                Image: suliyat,

                Qoutes:"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure  apply mathematical reasoning .",
                video:"",
                Award: " Most Interactive",
                OtherAward:[
                  "Best in Literary Achievement ",
                  "Best in Research Innovation ",
                  "Best in Environmental Sustainability ",
                ],
                subjectOffer:[
                    {
                      maths:{
                        image:download,
                        curricullum:"#",
                        objectives:[
                          "To develop a solid understanding of mathematical concepts, improve problem-solving skills, and apply mathematical reasoning to real-world situations. The course aims to enhance students' ability to think critically and logically, enabling them to confidently tackle mathematical challenges in academic and everyday contexts."
                        ]
                      } 
                    },
                       {
                      english:{
                        image:englis,
                        curricullum:"#",
                        objectives:[
                           "To enhance students' reading, writing, speaking, and listening skills in English. The course aims to develop a strong command of the language, foster an appreciation for literature, and improve the ability to communicate effectively in both academic and everyday settings. Students will engage in critical thinking, creative expression, and comprehensive analysis of texts to build a solid foundation in English language arts."
                        ]
                      } 
                    },
                       {
                      zoo101:{
                        image:zoo,
                        curricullum:"#",
                        objectives:[
                          "To provide students with a comprehensive understanding of animal biology, including the study of animal behavior, physiology, anatomy, genetics, and ecology. The course aims to develop students' skills in scientific observation, research, and analysis, preparing them for careers in wildlife conservation, veterinary science, and biological research. Through hands-on laboratory work and field studies, students will explore the diversity of animal life, understand the ecological roles of different species, and gain insights into the evolutionary processes that shape the animal kingdom."
                        ]
                      } 
                    },
                       {
                      bio101:{
                        image:bio,
                        curricullum:"#",
                        objectives:[
                          "To equip students with a thorough understanding of animal biology by covering animal behavior, physiology, anatomy, genetics, and ecology. This course aims to enhance skills in scientific observation, research, and analysis, preparing students for careers in wildlife conservation, veterinary science, and biological research. Through practical lab work and field studies, students will explore animal diversity, ecological roles, and evolutionary processes."
                        ]
                      } 
                    },
        
        
        
                ]
            },
                {
                id: "PHA/2017/07",
                Name:  "Alabi Yusuf",
                Faculty:"Mediciene",
                Department:"Phamarcy",
                email:"alabisefiu2000@gmail.com",
                Image: alabi,
                Qoutes:" to earn the appreciation of honest critics and endure the betrayal of false friends; to appreciate beauty,endure the betrayal of false friends;",
                video:"",
                Award: " Most Graduating student",
                OtherAward:[
                  " Best in Sportsmanship",
                  " Best in Research Innovation",
                  "Best in Literary Achievement ",
                ],
                subjectOffer:[
                    {
                      maths:{
                        image:download,
                        curricullum:"#",
                        objectives:[
                        "To develop a solid understanding of mathematical concepts, improve problem-solving skills, and apply mathematical reasoning to real-world situations. The course aims to enhance students' ability to think critically and logically, enabling them to confidently tackle mathematical challenges in academic and everyday contexts."
                        ]
                      } 
                    },
                       {
                      english:{
                        image:englis,
                        curricullum:"#",
                        objectives:[
                          "To enhance students' reading, writing, speaking, and listening skills in English. The course aims to develop a strong command of the language, foster an appreciation for literature, and improve the ability to communicate effectively in both academic and everyday settings. Students will engage in critical thinking, creative expression, and comprehensive analysis of texts to build a solid foundation in English language arts."
                        ]
                      } 
                    },
                       {
                      med101:{
                        image:med,
                        curricullum:"#",
                        objectives:[
                      "To provide students with an in-depth understanding of human medicine, focusing on anatomy, physiology, pharmacology, and pathology. The course aims to develop diagnostic skills, clinical reasoning, and patient care techniques, preparing students for medical practice and healthcare roles. Through hands-on clinical experience and case studies, students will gain insights into disease mechanisms, treatment approaches, and the complexities of patient management."
                        ]
                      } 
                    },
                       {
                      bio101:{
                        image:bio,
                        curricullum:"#",
                        objectives:[
                         "To equip students with a thorough understanding of animal biology by covering animal behavior, physiology, anatomy, genetics, and ecology. This course aims to enhance skills in scientific observation, research, and analysis, preparing students for careers in wildlife conservation, veterinary science, and biological research. Through practical lab work and field studies, students will explore animal diversity, ecological roles, and evolutionary processes."
                        ]
                      } 
                    },
        
        
        
                ]
            },
    
];

export default studentDataBase;
