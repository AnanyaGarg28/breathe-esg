import SideBar from "../../components/sidebar";
import UserHeader from "../../components/user-header";
import sections from "./sections";
export default function Home() {
    const { Header, Content } = sections[2];
    return (
        <div className="home">
            <SideBar />
            <div className="content">
                <div className="header">
                    <UserHeader />
                    {
                        Header && <Header />
                    }
                </div>
                <div className="main">
                    {
                        Content && <Content />
                    }
                </div>
            </div>
        </div>
    );
}