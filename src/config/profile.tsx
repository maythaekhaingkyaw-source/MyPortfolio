import React from 'react';
import { 
  Server, 
  Network, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

export const PROFILE_DATA = {
  name: "May Thae Khaing Kyaw",
  shortName: "MTKK",
  role: "System Engineer Internship candidate",
  location: "Yangon, Myanmar",
  status: "Available for Internship",
  email: "maythaekhaingkyaw27@gmail.com",
  phone: "+95 978 887 5477",
  
  about: {
    description: "I’m May Thae Khaing Kyaw, an IT student at M.S.T College, passionate about gaining hands-on experience through a System Engineer Internship Program. I am eager to learn from senior IT professionals, improve my technical skills, and apply my academic knowledge in real-world production infrastructure.",
    quote: "I enjoy challenges, teamwork, and stepping out of my comfort zone to grow in my career. I am motivated, adaptable, and willing to take risks and learn from experience to build a strong future in the system & networking field."
  },

  skills: [
    {
      category: "System Administration",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      items: [
        "Microsoft System Administration (Intermediate)",
        "Linux System Administration (Intermediate)",
        "Microsoft Server Administration (AD & IIS)"
      ]
    },
    {
      category: "Networking & Infrastructure",
      icon: <Network className="w-5 h-5 text-blue-500" />,
      items: [
        "Networking Essentials",
        "DHCP & DNS Configuration",
        "RAID Configuration"
      ]
    }
  ],

  education: [
    {
      course: "NCC Level-5 Diploma in Cyber Security (UK)",
      school: "M.S.T College",
      status: "Present"
    },
    {
      course: "NCC Level-4 Diploma in Computing (UK)",
      school: "M.S.T College",
      status: "Completed"
    },
    {
      course: "NCC Level-3 Diploma in Computing (UK)",
      school: "Y-Max College",
      status: "Completed"
    },
    {
      course: "Middle School Education (TTC)",
      school: "Yankin Education Degree College",
      status: "Completed"
    }
  ],

  languages: [
    {
      course: "English Proficiency (Level 18)",
      school: "Wall Street English Myanmar",
      status: "Present"
    },
    {
      course: "Chinese Proficiency (HSK-4)",
      school: "Myanmar International Education Center",
      status: "Completed"
    }
  ],

  socials: [
    { icon: <ExternalLink className="w-4 h-4" />, href: "#", label: "Portfolio" }
  ]
};
