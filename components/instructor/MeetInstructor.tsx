import React from "react";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Kriti Karki",
    role: "Founder & Lead Yoga Teacher",
    image: "/img/instructors/1.jpg",
    bio: "Yogi  Karki is the owner and a yoga teacher of Mandala Yoga Retreat. Her story of dedication and love for yoga and how she came to this field is truly inspiring. As a five-year-old girl, Kriti became ill with very serious asthma – an illness (asthma) to which her grandparents eventually died. Her father, Dr. SB Karki decided to teach her yoga, meditation,  breathing exercises and started her on a healthy yogic food routine.  Dr. SB Karki specializes in Naturopathy and is a great yogic of Nepal. With all the efforts and determination of both Kriti and her father, Kriti started recovering at the age of 10. Yoga not only saved her life but she eventually fell in love with yoga and it became her daily routine. At the age of 14, she was sent to a Yoga Ashram  where she spent 2 years of her life doing yoga sadhana. She also went to yoga university for her master degree in yoga where she achieved  the knowledge and skills to lead a yogic life. She believes in both scientific and spiritual yoga practices as she has experience in both. She is also a master in reiki healing, sound healing and diploma holder in massage therapy.",
  },
  {
    id: 2,
    name: "Manhal Tousis",
    role: "Yoga Instructor & Therapist",
    image: "/img/instructors/2.jpg",
    bio: "Swami ji Manhal Tousis is not only a Reiki master, he is also an experienced Yoga instructor who has conducted many „Train the Trainer“ courses. Among many others, he is a certified Mantra, Nada yoga and singing bowls healer or numerology, tarot and crystal healer. He is trained and certified by a number institutions and schools in India, China and Nepal to conduct training in several other wellness healing techniques.    Swami ji Manhal Tousis is from Jordan in the Middle East, his family however originally hailed from the Balkan Peninsula in the South East of Europe. He has been living in Nepal for almost 10 years, and considers Nepal to be his second home. Swami ji Manhal Tousis is a spiritual man who strongly believes in spirituality, and loves nothing more than to lead a life of total freedom. A strong personal trait of Swami ji Manhal is his limitless drive and passion for learning and mastering new skills and techniques, both for self development and to benefit others.",
  },
  {
    id: 3,
    name: "Yogesh Pokharel",
    role: "Yoga Therapist & Sound Healer",
    image: "/img/instructors/3.jpg",
    bio: "Yogesh Pokhrel is a yoga therapist and yoga instructor who has extensive training in yoga and a specialist in ashtanga principles. Enjoy motivating people to achieve long-term physical, mental, and spiritual fitness objectives. Yogesh Pokhrel is a sound healing therapist and yoga therapist who specializes in neurological illnesses, hypertension, cardiology, psychiatric problems, arthritis, back pain, diabetes, and many other conditions. He will treat your physical and mental stress through yoga treatment, sound healing therapy, and other techniques. Yogesh is the lead teacher of Ashtanga Vinyasa Yoga, Yoga therapy, Yoga anatomy, and Yoga philosophy at Mandala. Yogesh is a skilled yoga instructor and sound healer with 7 years of experience teaching national and international students.",
  },
];

const MeetInstructor = () => {
  return (
    <div className="bg-[#0A1F1C] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-semibold mb-5 mt-10 ">
          Meet our instructors 
        </h2>

        <div className="space-y-20">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[4/3] lg:aspect-[14/13] overflow-hidden rounded-3xl">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-4xl font-light mb-1">{instructor.name}</h3>
                {/* <p className="text-emerald-400 text-lg mb-6">
                  {instructor.role}
                </p> */}

                <p className="text-gray-300 leading-relaxed text-[15.5px]">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetInstructor;
