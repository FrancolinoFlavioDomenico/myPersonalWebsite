export interface LeftColumnData {

  profileSection: ProfileSection;
  interestSection: InterestSection;
  contactSection: ContactSection;
}

interface ProfileSection{
  title: string;
  body: string;
}
interface InterestSection{
  title: string;
  body: string[];
}
interface ContactSection{
  title: string;
  body: Object[];
}
