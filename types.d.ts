type Items = {
  name: string;
  percent: string;
};
type socialLink = {
  id: number;
  icon: any;
  linkAddress: string;
  targetBlank: boolean;
};
type work = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  smallImage?: boolean;
};

type PortfolioContent = {
  about: string;
  aboutMe: {
    text: string;
    birth: string;
    duty: string;
    address: string;
    freelance: boolean;
  };
  skills: {
    text: string;
    items: Items[];
  };
  image: {
    backGround: string;
    profile: string;
  };
  socialLink: socialLink[];
  works: work[];
};
