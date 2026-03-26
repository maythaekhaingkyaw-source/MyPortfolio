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
  role: "System Engineer Intern Candidate",
  location: "No.32, 89th Street, Mingalar Taung Nyunt, Yangon.",
  status: "Available for Internship",
  email: "maythaekhaingkyaw27@gmail.com",
  phone: "+959788875477",
  
  about: {
    description: "I’m May Thae Khaing Kyaw, an IT student at M.S.T College, passionate about gaining hands-on experience through a System Engineer Internship Program. I am eager to learn from senior IT professionals, improve my technical skills, and apply my academic knowledge in real-world production infrastructure.",
    quote: "I enjoy challenges, teamwork, and stepping out of my comfort zone to grow in my career. I am motivated, adaptable, and willing to take risks and learn from experience to build a strong future in the system & networking field."
  },

  skills: [
    {
      category: "System Administration",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      items: [
        "Intermediate in Microsoft & Linux System Administration",
        "MS SVR Administration",
        "System Policy & Management"
      ]
    },
    {
      category: "Networking & Infrastructure",
      icon: <Network className="w-5 h-5 text-blue-500" />,
      items: [
        "Networking Essential & MS SVR Administration",
        "DHCP, DNS, RAID, AD, IIS Configuration",
        "Infrastructure Maintenance"
      ]
    }
  ],

  education: [
    {
      course: "NCC Level-5 Diploma in Cyber Security (UK) at M.S.T College. (Present)",
      school: "",
      status: "Present"
    },
    {
      course: "NCC Level-4 Diploma in Computing (UK) at M.S.T College.",
      school: "",
      status: "Completed"
    },
    {
      course: "NCC Level-3 Diploma in Computing (UK) at Y-Max College.",
      school: "",
      status: "Completed"
    },
    {
      course: "Practicing Middle School Yankin Education Degree College (Yankin.TTC)",
      school: "",
      status: "Completed"
    }
  ],

  languages: [
    {
      course: "Wall Street English Myanmar (Level-18) (Present)",
      school: "",
      status: "Present"
    },
    {
      course: "Myanmar International Education Center (HSK-4)",
      school: "",
      status: "Completed"
    }
  ],

  socials: [
    { icon: <ExternalLink className="w-4 h-4" />, href: "#", label: "Portfolio" }
  ]
};
