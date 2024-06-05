import React from 'react';
import Button from "./Button.tsx";

function ProjectsSidebar({ onstartAddProject }) {
    return (
        <>  <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" >
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <Button onClick={onstartAddProject}>+ Add Project</Button>
        </aside>
        </>
    )
}

export default ProjectsSidebar;