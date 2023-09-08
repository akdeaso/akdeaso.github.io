const SkillItem = ({ skill, icon }) => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-2 transition p-5 rounded-lg flex items-center gap-4">
      <span className="w-6 h-6 text-gray-800 dark:text-gray-300">{icon}</span>
      <p className="text-md text-gray-600 dark:text-gray-300">{skill}</p>
    </div>
  );
};

export default SkillItem;
