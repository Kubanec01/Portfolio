export const About = () => {
  return (
    <div className="flex justify-center items-center mb-[120px]">
      <div className="w-[1300px] flex justify-between gap-10">
        <div
        className="bg-[#ECD4FF] w-[50%] h-[300px] flex flex-col items-center rounded-3xl">
          <h1 className="text-5xl font-semibold mt-[30px] text-secondary">Developer</h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-secondary">
            I have a passion for creating clean, responsive websites with unique
            designs and engaging functionality. I transform ideas into smooth
            digital experiences, turning websites into works of art.
          </p>
        </div>
        <div className="bg-[#125943cf] w-[50%] h-[300px] flex flex-col items-center rounded-3xl">
          <h1 className="text-5xl font-semibold mt-[30px] text-[#8fdcc2]">UX/UI Designer</h1>
          <p className="text-center text-xl font-semibold w-[80%] mt-[20px] text-[#eef9ed]">
            I’m passionate about learning how to create simple, user-friendly
            designs. I focus on understanding user needs and building interfaces
            that feel intuitive and easy to navigate. Every project is a chance
            to improve and grow in delivering meaningful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};
