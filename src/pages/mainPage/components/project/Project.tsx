import { project } from "../../../../data/projects";

export const Project = () => {
  return (
    <>
      {project.map((p) => {
        return (
          <div
            key={p.id}
            className="border border-emerald-600 flex justify-center flex-col w-[80%]"
          >
            {/* IMAGE */}
            <div className="flex justify-center border border-red-600">
              <img
                className="object-cover"
                src={p.image}
                alt={`${p.title} image`}
              />
            </div>
            {/* TEXT */}
            <div className="border border-blue-700 flex justify-between">
              <div 
              >
                <h1>{p.title}</h1>
                <p>{p.desc}</p>
              </div>
              <div>
                <a href="">See More</a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
