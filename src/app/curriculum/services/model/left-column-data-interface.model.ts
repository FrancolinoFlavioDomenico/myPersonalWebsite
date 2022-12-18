export interface LeftColumnDataInterface {

  profileSection: ProfileSection;
  interestSection: InterestSection;
  contactSection: ContactSection;
}

export interface ProfileSection{
  title: string;
  body: string;
}
export interface InterestSection{
  title: string;
  body: string[];
}
export interface ContactSection{
  title: string;
  body: {key: string, value: string}[];
}
