import ChatInput from "../components/ChatInput/ChatInput";
import Navbar from "../components/Navbar/Navbar";
import ProjectList from "../components/ProjectList/ProjectList";
import WelcomeBanner from "../components/ProjectList/WelcomeBanner";

const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <div>
                <WelcomeBanner />
                <ProjectList />
            </div>
            <ChatInput />
        </>
    )
}
export default ProjectsPage;