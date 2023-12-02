import SideBar from "../../components/sidebar";
import UserHeader from "../../components/user-header";

export default function Home() {
    return (
        <div className="home">
            <SideBar />
            <div className="content">
                <div className="header">
                    <UserHeader />
                </div>
            </div>
        </div>
    );
}