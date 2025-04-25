import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Mail, Phone, Award, Building2, User } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const references = [
  {
    id: 1,
    name: "Prasanna S. Haddela",
    designation: "Senior Lecturer / Program Coordinator – Data Science",
    affiliation: "SLIIT – Malabe Campus, Sri Lanka",
    credentials: "BSc Engineering (Hons), CSM, MIEEE (USA), AEng (SL)",
    contact: {
      phone: "+94 77 123 4567",
      email: "prasanna.h@slit.lk"
    },
    avatar: "PH",
    color: "bg-red-500"
  },
  {
    id: 2,
    name: "Ahsan Shamsudeen",
    designation: "Senior Solutions Architect – Artificial Intelligence",
    affiliation: "H2O.ai Inc.",
    credentials: "AI/ML Expert, Cloud Solutions Architect",
    contact: {
      phone: "+94 76 987 6543",
      email: "ahsan.s@h2o.ai"
    },
    avatar: "AS",
    color: "bg-red-500"
  }
];

const Reference = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-red-50 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
            Professional References
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            Recommendations from industry leaders and academic mentors
          </p>
        </motion.div>

        {/* References Carousel */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
            }}
            className="reference-swiper"
          >
            {references.map((reference) => (
              <SwiperSlide key={reference.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Reference Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${reference.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                      {reference.avatar}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-900 ">
                        {reference.name}
                      </h3>
                      <p className="text-gray-900  font-medium">
                        {reference.designation}
                      </p>
                    </div>
                  </div>

                  {/* Affiliation & Credentials */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-700 ">
                      <Building2 className="w-5 h-5" />
                      <span>{reference.affiliation}</span>
                    </div>
                    {reference.credentials && (
                      <div className="flex items-center gap-2 text-gray-700 ">
                        <Award className="w-5 h-5" />
                        <span>{reference.credentials}</span>
                      </div>
                    )}
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5" />
                      <span>{reference.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5" />
                      <span>{reference.contact.email}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href="#"
                      className="p-2 bg-red-700  rounded-full hover:bg-red-900 transition-colors duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reference;
