import { useSelector } from "react-redux";
import SideBar from "../../components/sidebar";
import UserHeader from "../../components/user-header";
import sections from "./sections";
import { RootState } from "../../store";
/**
 * Renders the Home component.
 * 
 * @returns The rendered Home component.
 */
export default function Home() {
    const activeSectionId = useSelector(
        (state: RootState) => state.nav.currentSection
    );
    const activeSection = sections.find((item) => item.id === activeSectionId);
    const Header = activeSection?.Header;
    const Content = activeSection?.Content;
    return (
        <div className="home">
            <SideBar />
            <div className="content">
                <div className="header">
                    <UserHeader />
                    {Header && <Header />}
                </div>
                <div className="main">{Content && <Content />}</div>
            </div>
        </div>
    );
}
