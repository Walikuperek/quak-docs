import {AngularTag} from "../../components/tags/angular";

export const AngularPosts = [
    {
        color: "angular",
        category: "frontend",
        link: "/learn/angular/state-management",
        tag: <AngularTag disabled={true} />,
        image: <section className="shadow-lg flex align-center justify-center gap-3 h-full overflow-hidden">
            <div className="flex flex-col bg-gray-800 h-40 w-40 p-1 mt-20 text-white font-bold">
                <p>Store</p>
                <p className="text-sm text-slate-400">  &middot; usersList</p>
                <p className="text-sm text-slate-400">  &middot; selectedUserID</p>
            </div>
        </section>,
        author: "Kacper Walczak",
        createdAt: "10-08-2023",
        title: "State management",
        description: "Learn how to manage state in Angular."
    },
];
