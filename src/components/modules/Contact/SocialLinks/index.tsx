import { Linkedin, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/orbittechlabs",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Facebook",
    link: "https://facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-110"
          aria-label={`Visit our ${social.name} page`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
