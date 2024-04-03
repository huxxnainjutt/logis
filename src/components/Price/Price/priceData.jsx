import Image from "next/image";
import Person from "../../../../public/images/Pricing/person.jpg.png";
export const priceData = [
  {
    image: <Image src={Person} alt="person"></Image>,
    title: "Tailored Pricing for Every Fleet",
    description: 'Our customized pricing adapts to the size and aspirations of your fleet, propelling you towards growth and success. We understand that each fleet is unique, and our pricing system is designed to accommodate your specific needs, ensuring that you pay for what you need and nothing more.',
  },
  {
    image: <Image src={Person} alt="person"></Image>,
    title: "Efficiency Amplified with Additional Services",
    description: 'We go beyond the basics of dispatch solutions, offering a comprehensive range of services that streamline your trucking operations. Our additional services are designed to simplify processes, allowing you to excel without exerting extra effort. ',
  },
  {
    image: <Image src={Person} alt="person"></Image>,
    title: "Efficiency Amplified with Additional Services",
    description: 'We go beyond the basics of dispatch solutions, offering a comprehensive range of services that streamline your trucking operations. Our additional services are designed to simplify processes, allowing you to excel without exerting extra effort. ?',
  },
];
