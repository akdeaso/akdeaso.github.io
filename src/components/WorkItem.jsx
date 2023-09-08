const WorkItem = ({ imgUrl, title, tech, linkUrl, demoUrl }) => {
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
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
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
          <p className="flex flex-wrap gap-2 flex-row items-center justify-end text-xs md:text-sm pt-2">
            {isLinkAvailable ? (
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <span className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                  Link
                </span>
              </a>
            ) : (
              <span className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-md cursor-not-allowed">
                Link
              </span>
            )}
            {isDemoAvailable ? (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <span className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                  Demo
                </span>
              </a>
            ) : (
              <span className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-md cursor-not-allowed">
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
