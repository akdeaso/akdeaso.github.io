import { AiOutlineLink, AiOutlinePlayCircle } from "react-icons/ai";

const WorkItem = ({ imgUrl, title, desc, date, tech, linkUrl, demoUrl }) => {
  const isLinkAvailable = linkUrl !== "";
  const isDemoAvailable = demoUrl !== "";

  return (
    <div className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h4 className="text-xs">{date}</h4>
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-base mb-3">{desc}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <div>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-end text-xs md:text-sm pt-4 content-end">
            {isLinkAvailable ? (
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <span className="inline-block flex items-center px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                  <AiOutlineLink className="mr-1" />
                  Link
                </span>
              </a>
            ) : (
              <span className="inline-block flex items-center px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-md cursor-not-allowed">
                <AiOutlineLink className="mr-1" />
                Link
              </span>
            )}
            {isDemoAvailable ? (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <span className="inline-block flex items-center px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                  <AiOutlinePlayCircle className="mr-1" />
                  Demo
                </span>
              </a>
            ) : (
              <span className="inline-block flex items-center px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-md cursor-not-allowed">
                <AiOutlinePlayCircle className="mr-1" />
                Demo
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
