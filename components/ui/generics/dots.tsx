const inactiveDot = (key: string | number) => <span key={key} className="border-3 border-gray-50 w-3 h-3 bg-gray-100 rounded-full">&nbsp;</span>;
const activeDot = (key: string | number) => <span key={key} className="border-3 border-violet-900 w-3 h-3 bg-violet-500 rounded-full">&nbsp;</span>;

export {inactiveDot, activeDot};
