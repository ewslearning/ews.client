
import TileImg1 from "../../home/assets/images/waste-management.png";
import TileImg2 from "../../home/assets/images/Corporate Sustainability Programs.png";
import TileImg3 from "../../home/assets/images/Sustainable Workforces.png";
import TileImg4 from "../../home/assets/images/Environmental Compliance Training.png";
import TileImg5 from "../../home/assets/images/Sustainable Supply Chain Management.png";
import TileImg6 from "../../home/assets/images/Circular Economy  Strategies.png";
import TileImg7 from "../../home/assets/images/energy-efficiency.png";
import TileImg8 from "../../home/assets/images/sustainable-product-design.png";
import TileImg9 from "../../home/assets/images/ai-and-sustainability.png";
import { StaticImageData } from "next/image";

export interface CoursesInterface{
  id: number;
  imageSrc: StaticImageData;
  title: string;
  bulletPoints: string[];
  mode: string;
  duration: string;
}
const courses: CoursesInterface[] = [ 
    {
      id: 1,
      imageSrc: TileImg1,
      title: "Waste Management & Recycling Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    // Add more courses as needed
    {
        id: 2,
      imageSrc: TileImg2,
      title: "Corporate Sustainability Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 3,
      imageSrc: TileImg3,
      title: "Sustainable\nWorkforces",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 4,
      imageSrc: TileImg4,
      title: "Environmental Compliance Training",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 5,
      imageSrc: TileImg5,
      title: "Sustainable Supply Chain Management",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 6,
      imageSrc: TileImg6,
      title: "Circular Economy\nStrategies",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },

    {
        id: 7,
      imageSrc: TileImg7,
      title: "Energy Efficiency and\nConservation",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 8,
      imageSrc: TileImg8,
      title: "Sustainable\nProduct Design",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
        id: 9,
      imageSrc: TileImg9,
      title: "AI and Sustainability\nIntegration",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    }
  ];

  export default courses;