import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function IconsBox({ iconsData }) {
  const [icons, setIcons] = useState([]);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (iconsData) {
      try {
        const parsedIcons =
          typeof iconsData === "string" ? JSON.parse(iconsData) : iconsData;
        setIcons(parsedIcons);
      } catch (error) {
        console.error("Error parsing iconsData:", error);
        setIcons([]);
      }
    }
  }, [iconsData]);

  return (
    <div className=" relative  container mx-auto  py-8">
      <h2 className=" text-xl font-bold text-center mb-8">
        Заказать мебель стало проще
      </h2>
      <div
        ref={scrollRef}
        className="bg-white px-6 mx-auto py-12 w-[calc(100%_-_80px)]  xl:mx-10   rounded-3xl shadow-xl  grid grid-cols-2 xl:grid-cols-8 gap-6 md:grid-cols-4    "
      >
        {icons.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center   gap-2 lg:snap-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            style={{
              order: feature.url ? 0 : 1,
            }}
          >
            <div className="w-12  h-12 mb-2">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full"
              />
            </div>
            <div className="text-start flex flex-col items-start ">
              <h3 className="text-sm    font-bold text-gray-800">
                {feature.title}
              </h3>
              {feature.url && (
                <a
                  href="#"
                  className="text-xs  text-[#ff5a00] hover:text-[#ff5a00]/80 transition-colors"
                >
                  Узнать больше →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default IconsBox;
