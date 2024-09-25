import React, { useEffect } from "react";

const technologies = [
  { name: "Google Cloud", level: 7, url: "https://cloud.google.com/", backgroundColor: "#4285F4", textColor: "#ffffff" },
  { name: "Javascript", level: 10, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", backgroundColor: "#F7DF1E", textColor: "#000000" },
  { name: "Typescript", level: 10, url: "https://www.typescriptlang.org/", backgroundColor: "#3178C6", textColor: "#ffffff" },
  { name: "Python", level: 7, url: "https://www.python.org/", backgroundColor: "#306998", textColor: "#ffffff" },
  { name: "Node.js", level: 8, url: "https://nodejs.org/", backgroundColor: "#68A063", textColor: "#ffffff" },
  { name: "Angular", level: 10, url: "https://angular.io/", backgroundColor: "#DD0031", textColor: "#ffffff" },
  { name: "React", level: 8, url: "https://reactjs.org/", backgroundColor: "#61DAFB", textColor: "#000000" },
  { name: "ExpressJS", level: 9, url: "https://expressjs.com/", backgroundColor: "#000000", textColor: "#ffffff" },
  { name: "NestJS", level: 7, url: "https://nestjs.com/", backgroundColor: "#E0234E", textColor: "#ffffff" },
  { name: "Next.js", level: 6, url: "https://nextjs.org/", backgroundColor: "#000000", textColor: "#ffffff" },
  { name: "Django", level: 8, url: "https://www.djangoproject.com/", backgroundColor: "#092E20", textColor: "#ffffff" },
  { name: "Flask", level: 8, url: "https://flask.palletsprojects.com/", backgroundColor: "#000000", textColor: "#ffffff" },
  { name: "MySQL", level: 10, url: "https://www.mysql.com/", backgroundColor: "#00758F", textColor: "#ffffff" },
  { name: "PostgreSQL", level: 9, url: "https://www.postgresql.org/", backgroundColor: "#336791", textColor: "#ffffff" },
  { name: "Firebase", level: 7, url: "https://firebase.google.com/", backgroundColor: "#FFCA28", textColor: "#000000" },
  { name: "Neo4j", level: 7, url: "https://neo4j.com/", backgroundColor: "#008CC1", textColor: "#ffffff" },
  { name: 'MongoDB', level: 8, url: 'https://www.mongodb.com/', backgroundColor: '#47A248', textColor: '#ffffff' }
];

const getRandomOffset = (radius: number) => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * radius;
  return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance };
};

const isColliding = (newBubble: any, existingBubbles: any[]) => {
  for (let bubble of existingBubbles) {
    const dx = bubble.x - newBubble.x;
    const dy = bubble.y - newBubble.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < bubble.radius + newBubble.radius) {
      return true;
    }
  }
  return false;
};

const createBubbles = (techList: any[], container: HTMLElement | null) => {
  if (!container) return;

  let radius = 250;
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;
  const placedBubbles: any[] = [];

  techList.sort((a, b) => b.level - a.level);

  techList.forEach((tech) => {
    let bubbleData;
    let attempts = 0;

    do {
      const { x: offsetX, y: offsetY } = getRandomOffset(radius);
      const bubbleRadius = tech.level * 5;

      bubbleData = {
        x: centerX + offsetX,
        y: centerY + offsetY,
        radius: bubbleRadius
      };

      attempts++;
      if (attempts > 50) {
        radius += 20;
      }
    } while (isColliding(bubbleData, placedBubbles));

    placedBubbles.push(bubbleData);

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = `${tech.level * 12}px`;
    bubble.style.height = `${tech.level * 12}px`;
    bubble.style.backgroundColor = tech.backgroundColor;
    bubble.style.borderColor = tech.backgroundColor;

    bubble.style.left = `${bubbleData.x - tech.level * 5}px`;
    bubble.style.top = `${bubbleData.y - tech.level * 5}px`;

    const link = document.createElement("a");
    link.href = tech.url;
    link.target = "_blank";
    link.innerText = tech.name;
    link.style.color = tech.textColor;

    bubble.appendChild(link);
    container.appendChild(bubble);
  });
};

export const TechnologiesBubbles = () => {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    createBubbles(technologies, container);
    window.addEventListener('resize', () => {
      container.replaceChildren();
      createBubbles(technologies, container)
    });
  }, []);

  return (
    <div className="section-wrapper-col">
      <h2 className="font-comicsans text-2xl">Technologies</h2>
      <div className="bubble-container h-[600px] w-[100%]" id="bubble-container"></div>
    </div>
  );
};

// import {useEffect} from "react";
//
// const technologies = [
//     { name: 'Google Cloud', level: 7, url: 'https://cloud.google.com/', backgroundColor: '#4285F4', textColor: '#ffffff' },
//     { name: 'Javascript', level: 10, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', backgroundColor: '#F7DF1E', textColor: '#000000' },
//     { name: 'Typescript', level: 10, url: 'https://www.typescriptlang.org/', backgroundColor: '#3178C6', textColor: '#ffffff' },
//     { name: 'Python', level: 7, url: 'https://www.python.org/', backgroundColor: '#306998', textColor: '#ffffff' },
//     { name: 'Node.js', level: 8, url: 'https://nodejs.org/', backgroundColor: '#68A063', textColor: '#ffffff' },
//     { name: 'Angular', level: 10, url: 'https://angular.io/', backgroundColor: '#DD0031', textColor: '#ffffff' },
//     { name: 'React', level: 8, url: 'https://reactjs.org/', backgroundColor: '#61DAFB', textColor: '#000000' },
//     { name: 'ExpressJS', level: 9, url: 'https://expressjs.com/', backgroundColor: '#000000', textColor: '#ffffff' },
//     { name: 'NestJS', level: 7, url: 'https://nestjs.com/', backgroundColor: '#E0234E', textColor: '#ffffff' },
//     { name: 'Next.js', level: 6, url: 'https://nextjs.org/', backgroundColor: '#000000', textColor: '#ffffff' },
//     { name: 'Django', level: 8, url: 'https://www.djangoproject.com/', backgroundColor: '#092E20', textColor: '#ffffff' },
//     { name: 'Flask', level: 8, url: 'https://flask.palletsprojects.com/', backgroundColor: '#000000', textColor: '#ffffff' },
//     { name: 'MySQL', level: 10, url: 'https://www.mysql.com/', backgroundColor: '#00758F', textColor: '#ffffff' },
//     { name: 'PostgreSQL', level: 9, url: 'https://www.postgresql.org/', backgroundColor: '#336791', textColor: '#ffffff' },
//     { name: 'Firebase', level: 7, url: 'https://firebase.google.com/', backgroundColor: '#FFCA28', textColor: '#000000' },
//     { name: 'Neo4j', level: 7, url: 'https://neo4j.com/', backgroundColor: '#008CC1', textColor: '#ffffff' }
// ];
//
// export function TechnologiesComicSans() {
//     useEffect(() => {
//         function getRandomOffset(radius) {
//             const angle = Math.random() * 2 * Math.PI;
//             const distance = Math.random() * radius;
//             const x = Math.cos(angle) * distance;
//             const y = Math.sin(angle) * distance;
//             return { x, y };
//         }
//
//         function isColliding(newBubble, existingBubbles) {
//             for (let bubble of existingBubbles) {
//                 const dx = bubble.x - newBubble.x;
//                 const dy = bubble.y - newBubble.y;
//                 const distance = Math.sqrt(dx * dx + dy * dy);
//                 if (distance < bubble.radius + newBubble.radius) {
//                     return true; // collision
//                 }
//             }
//             return false;
//         }
//
//         function createBubbles(techList) {
//             const container = document.getElementById('bubble-container');
//             let radius = 250;
//             const centerX = container.clientWidth / 2;
//             const centerY = container.clientHeight / 2;
//             const placedBubbles = [];
//
//             techList.sort((a, b) => b.level - a.level);
//
//             techList.forEach(tech => {
//                 let bubbleData;
//                 let attempts = 0;
//
//                 do {
//                     const { x: offsetX, y: offsetY } = getRandomOffset(radius);
//                     const bubbleRadius = tech.level * 5;
//
//                     bubbleData = {
//                         x: centerX + offsetX,
//                         y: centerY + offsetY,
//                         radius: bubbleRadius
//                     };
//
//                     attempts++;
//                     if (attempts > 50) {
//                         radius += 20;
//                     }
//                 } while (isColliding(bubbleData, placedBubbles));
//
//                 placedBubbles.push(bubbleData);
//
//                 const bubble = document.createElement('div');
//                 bubble.classList.add('bubble');
//                 bubble.style.width = `${tech.level * 12}px`;
//                 bubble.style.height = `${tech.level * 12}px`;
//                 bubble.style.backgroundColor = tech.backgroundColor;
//                 bubble.style.borderColor = tech.backgroundColor;
//
//                 bubble.style.left = `${bubbleData.x - tech.level * 5}px`;
//                 bubble.style.top = `${bubbleData.y - tech.level * 5}px`;
//
//                 const link = document.createElement('a');
//                 link.href = tech.url;
//                 link.target = "_blank";
//                 link.innerText = tech.name;
//                 link.style.color = tech.textColor;
//
//                 bubble.appendChild(link);
//                 container.appendChild(bubble);
//             });
//         }
//
//         createBubbles(technologies);
//     }, []);
//
//     return (
//         <div className="section-wrapper-col">
//             <h2 className="font-comicsans">Technologies</h2>
//             <div className="bubble-container" id="bubble-container"></div>
//         </div>
//     );
// }

export default function MyApp() {
  return <TechnologiesBubbles />;
}
