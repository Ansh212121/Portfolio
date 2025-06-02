import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TbView360 } from "react-icons/tb";

const ProjectCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="project-card-view hover:bg-[#cd5ff8] flex flex-col flex-grow rounded-xl shadow-lg overflow-hidden">
        <img src={props.imgPath} alt="card--img" className="w-full h-48 object-cover" />

        <div className="card-body p-4 flex flex-col justify-between flex-grow">
          <div>
            <h5 className="card-title text-center text-2xl font-bold text-[#cd5ff8]">
              {props.title}
            </h5>

            <div className="py-3 px-0 flex flex-wrap justify-center">
              {props?.tech?.map((name, index) => (
                <button
                  key={index}
                  className="py-2 px-2 font-mono cursor-auto m-2 rounded-lg border hover:border-none hover:bg-[#cd5ff8]"
                >
                  {name}
                </button>
              ))}
            </div>

            {show ? (
              <p className="card-text p-1 sm:p-3 text-left sm:text-justify text-white">
                {props.desc}{" "}
                <span
                  className="text-[#6b1090] font-semibold cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  Read Less
                </span>
              </p>
            ) : (
              <p className="card-text p-1 sm:p-3 text-left sm:text-justify text-white">
                {props?.desc?.substring(0, 170)}......{" "}
                <span
                  className="text-[#6b1090] font-semibold cursor-pointer"
                  onClick={() => setShow(true)}
                >
                  Read More
                </span>
              </p>
            )}
          </div>

          <div className="pt-4 flex justify-around">
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="flex items-center justify-center py-2 px-3 rounded-lg bg-[#6b1090] hover:bg-[#cd5ff8]">
                <BsGithub className="text-2xl" />
                &nbsp;
                <span>GitHub</span>
              </button>
            </a>
            <a href={props.demo} target="_blank" rel="noreferrer">
              <button className="flex items-center justify-center py-2 px-3 rounded-lg bg-[#6b1090] hover:bg-[#cd5ff8]">
                <TbView360 className="text-2xl" />
                &nbsp;
                <span>Demo</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
