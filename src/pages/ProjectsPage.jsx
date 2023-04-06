import Navbar from "../components/Navbar/Navbar";
import ProjectList from "../components/ProjectList/ProjectList";
import WelcomeBanner from "../components/ProjectList/WelcomeBanner";

const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <WelcomeBanner />
            <ProjectList />
        </>
    )
}
export default ProjectsPage;