import React from "react";
import './LearningpathStyle.css'
import DrawerDasboard from "../../Modules/Drawer/DasboardDrawer";
const LearningPath = () => {
    return (
        <>
            <DrawerDasboard componentName={"Learning Path"} />
            <div className="learningpath-container">

                <h1>Learning Path</h1>
            </div>

        </>
    )
}
export default LearningPath;