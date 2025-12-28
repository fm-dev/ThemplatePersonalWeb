import { BarChartSquare02, Folder, HomeLine, LayoutAlt01, MessageChatCircle, PieChart03, Rows01, Settings01 } from "@untitledui/icons";
import type { NavItemDividerType, NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationSectionDividers } from "@/components/application/app-navigation/sidebar-navigation/sidebar-section-dividers";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";
import { ProgressBarCircle } from "@/components/base/progress-indicators/progress-circles";
import CustomizedTimeline from "@/components/self/CustomizedTimeline";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

interface AppProps {
  children: React.ReactNode;
}
const navItemsWithDividers: (NavItemType | NavItemDividerType)[] = [
    {
        label: "Introduction",
        href: "/",
        icon: HomeLine,
    },
    {
        label: "About Me",
        href: "/AboutMe",
        icon: BarChartSquare02,
    },
    {
        label: "Career Path",
        href: "/CarrerPath",
        icon: WorkOutlineIcon,
    },
    {
        label: "Education",
        href: "/education",
        icon: SchoolOutlinedIcon,
    },
    {
        label: "Projects",
        href: "/project",
        icon: Rows01,
    },
    
];
export function App({ children }: AppProps) {
    return(
        <div>
            <SidebarNavigationSectionDividers activeUrl="/" items={navItemsWithDividers}/>
                <div className=" xl:ml-80 min-h-dvh p-8">
                     {children}
                </div>
        </div>
    );
}