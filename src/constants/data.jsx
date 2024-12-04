import {
  AiFillFileText,
  AiFillProduct,
  AiFillSignal,
  AiOutlineProduct,
  AiOutlineSend,
  AiOutlineUser,
} from "react-icons/ai"
import {
  BiSolidCommentCheck,
  BiSolidDetail,
  BiSolidMessageAlt,
  BiSolidOffer,
} from "react-icons/bi"
import {
  CiFacebook,
  CiLinkedin,
  CiMail,
  CiRead,
  CiSettings,
  CiTwitter,
  CiUnread,
} from "react-icons/ci"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRegImage,
  FaRegStar,
  FaUserAlt,
  FaUserPlus,
  FaVideo,
} from "react-icons/fa"
import { FaSquareWhatsapp } from "react-icons/fa6"
import { FcSupport } from "react-icons/fc"
import {
  HiArchive,
  HiOutlineArrowDown,
  HiOutlineArrowUp,
  HiOutlineUserAdd,
  HiUserAdd,
} from "react-icons/hi"
import { HiMiniReceiptRefund } from "react-icons/hi2"
import { IoIosAnalytics } from "react-icons/io"
import {
  IoCart,
  IoCartSharp,
  IoFilterOutline,
  IoLanguageOutline,
  IoLogIn,
  IoMailOpenOutline,
  IoTrashOutline,
} from "react-icons/io5"
import {
  MdChat,
  MdDelete,
  MdError,
  MdLabelImportantOutline,
  MdNotificationsActive,
  MdOutlineLocalShipping,
  MdViewKanban,
} from "react-icons/md"
import {
  PiPhoneCallFill,
  PiSpeakerSimpleNoneLight,
  PiUsersFourThin,
} from "react-icons/pi"
import {
  RiFolderSettingsLine,
  RiLockPasswordFill,
  RiSpam2Fill,
  RiSpam2Line,
} from "react-icons/ri"
import { SiGooglemeet, SiMicrosoftexcel, SiReacthookform } from "react-icons/si"
import {
  TbFileTypeDocx,
  TbMailFilled,
  TbPasswordFingerprint,
  TbRosetteDiscountCheck,
  TbSteam,
} from "react-icons/tb"
import increase from "../assets/increase.png"
import decrease from "../assets/decrease.png"
import sales from "../assets/sales.png"
import expenses from "../assets/expense.png"
import orders from "../assets/order.png"
import profit from "../assets/profit.png"
import battery from "../assets/battery.png"
import engineOil from "../assets/engine-oil.png"
import engine from "../assets/engine.png"
import gearBox from "../assets/gear-box.png"
import headlight from "../assets/headlights.png"
import steeringWheel from "../assets/steering-wheel.png"
import wheels from "../assets/wheels.png"
import rayhan from "../assets/rayhan.png"
import sakib from "../assets/sakib.png"
import xmcAutomobiles from "../assets/xmc_automobiles.png"
import rainBBCAuto from "../assets/rain_bbc_auto.png"
import hybridCarZone from "../assets/hybrid_car_zone.png"
import driverBehaviorAnalysis from "../assets/driver_behavior_analysis.jpg"
import fuelEfficiencyTracker from "../assets/fuel_efficiency_tracker.jpg"
import routeOptimizationAndNavigation from "../assets/route_optimization_navigation.jpg"
import safetyAlerts from "../assets/safety_alerts.jpg"

import { BsFillFileEarmarkPdfFill, BsPeopleFill } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { GoGift, GoMute, GoTasklist } from "react-icons/go"
import { GrAttachment } from "react-icons/gr"
import { DiGithubBadge } from "react-icons/di"
import { GiEternalLove } from "react-icons/gi"

export const socialLinks = [
  { icon: <FaLinkedin />, title: "Linkedin" },
  {
    icon: <FaFacebookSquare />,
    title: "Facebook",
  },
  {
    icon: <FaSquareWhatsapp />,
    title: "Whatsapp",
  },
  {
    icon: <SiGooglemeet />,
    title: "Google Meet",
  },
  {
    icon: <FaInstagramSquare />,
    title: "Instagram",
  },
]

export const cartItemsData = [
  {
    productName: "Engine oil",
    id: "dsfj435d909wer0435",
    productImg: engineOil,
    description: "High-performance engine oil for protection and efficiency",
    price: 150,
    quantity: 2,
  },
  {
    productName: "Gearbox Hybrid Car",
    id: "dsfj4359derws090435",
    productImg: gearBox,
    description: "Gearbox oil for smooth, efficient hybrid car performance.",
    price: 2400,
    quantity: 1,
  },
  {
    productName: "headlight electroinc car",
    id: "dsfj43590wre9sa0435",
    productImg: headlight,
    description: "Headlight fluid for clear, bright lighting in electric cars.",
    price: 84,
    quantity: 4,
  },
  {
    productName: "wheel",
    id: "dsfj43590wg904sdfw5",
    productImg: wheels,
    description: "Wheel cleaner for shine and protection.",
    price: 920,
    quantity: 4,
  },
  {
    productName: "steering wheel",
    id: "dsfj435909sev0435",
    productImg: steeringWheel,
    description: "Steering wheel cleaner for a smooth, comfortable grip.",
    price: 120,
    quantity: 5,
  },
]

export const notifications = [
  {
    name: "Exclusive offers",
    icon: <BiSolidOffer />,
    message: "Enjoy exclusive offers with up to 20% off on your next purchase!",
    time: "40 minutes ago",
    color: "#C0229E",
  },
  {
    name: "New Follow Request",
    icon: <BiSolidCommentCheck />,
    message: (
      <span>
        <span style={{ color: "#B016A8" }}>Maria Khan</span> has sent you the
        request
      </span>
    ),
    time: "1 hour ago",
    color: "#C4A000",
  },
  {
    name: "Post Reaction Notification",
    icon: <GiEternalLove />,
    message: "Rayhan reacted to your recent post",
    time: "12:01 AM",
    color: "#22C0B1",
  },

  {
    name: "Shipping Update",
    icon: <IoCartSharp />,
    message: (
      <span>
        Order <span style={{ color: "#3D49D7" }}>#54321</span> has been shipped
        and is heading your way!
      </span>
    ),
    time: "06:05 AM",
    color: "#00D341",
  },
]

export const NavUserProfileData = [
  {
    title: "profile",
    icon: <AiOutlineUser />,
  },
  { title: "my inbox", icon: <CiMail /> },
  { title: "billing", icon: <PiSpeakerSimpleNoneLight /> },
  { title: "settings", icon: <CiSettings /> },
  { title: "keyboard shortcuts", icon: <IoLanguageOutline /> },
  { title: "team", icon: <TbSteam /> },
  { title: "invite user", icon: <HiOutlineUserAdd /> },
  { title: "support", icon: <FcSupport /> },
]

export const themeColors = [
  "#0CD7B1",
  "#1FC35B",
  "#63A9EC",
  "#4955D6",
  "#9F46DD",
  "#DD46C0",
  "#DD4655",
  "#DDB446",
  "#AFCED0",
  "#72314F",
  "#95898F",
  "#685F8B",
  "#C8B918",
  "#576B38",
  "#142590",
  "#45183E",
]

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <IoCart />,
        path: "/ecommerce",
      },
      {
        name: "analytics",
        icon: <IoIosAnalytics />,
        path: "/analytics",
      },
    ],
  },

  {
    title: "Application",
    links: [
      {
        name: "chat",
        icon: <MdChat />,
        path: "/chat",
      },
      {
        name: "email",
        icon: <TbMailFilled />,
        path: "/email",
      },
      {
        name: "kanban",
        icon: <MdViewKanban />,
        path: "/kanban",
      },
    ],
  },
  {
    title: "pages",
    links: [
      {
        name: "products",
        icon: <AiFillProduct />,
        path: "/products",
      },
      {
        name: "Product detail",
        icon: <BiSolidDetail />,
        path: "/product-detail",
      },
      {
        name: "user profile",
        icon: <FaUserAlt />,
        path: "/user-profile",
      },
    ],
  },
  {
    title: "authentication",
    links: [
      {
        name: "login",
        icon: <IoLogIn />,
        path: "/auth/login",
      },
      {
        name: "register",
        icon: <FaUserPlus />,
        path: "/auth/register",
      },
      {
        name: "create password",
        icon: <TbPasswordFingerprint />,
        path: "/auth/create-password",
      },
      {
        name: "forgot password",
        icon: <RiLockPasswordFill />,
        path: "/auth/forgot",
      },
      {
        name: "error",
        icon: <MdError />,
        path: "/error",
      },
    ],
  },
]

export const analyticsTopSections = [
  {
    name: "customers",
    icon: <PiUsersFourThin />,
    number: "4,702",
    up: "21%",
    text: "Since last month",
    bgColor: "rgba(159, 70, 221, 0.2)",
    color: "#9F46DD",
    increaseIncon: increase,
  },
  {
    name: "products",
    icon: <AiOutlineProduct />,
    number: "1,200",
    down: "0.15%",
    text: "Since last month",
    bgColor: "rgba(214, 159, 72, 0.2)",
    color: "#D69F48",
    decreaseIcon: decrease,
  },
  {
    name: "sales",
    icon: <AiFillSignal />,
    number: "$767K",
    up: "27%",
    text: "Than last month",
    bgColor: "rgba(11, 189, 80, 0.2)",
    color: "#0BBD1D",
    increaseIncon: increase,
  },
  {
    name: "refunds",
    icon: <HiMiniReceiptRefund />,
    number: "$108",
    down: "0.85%",
    text: "Since last month",
    bgColor: "rgba(221, 70, 192, 0.2)",
    color: "#DD46C0",
    decreaseIcon: decrease,
  },
]

export const recentOrders = [
  {
    title: "name",
    name: "Rayhan",
    email: "rayhan4850@example.com",
    date: "2 March 2024",
    invoice: "#45H02BO3",
    amount: "500",
    status: "completed",
  },
  {
    title: "invoice",
    name: "Chen Hui",
    email: "chenhui4022@example.com",
    date: "4 March 2024",
    invoice: "#104068",
    amount: "1000",
    status: "pending",
  },
  {
    name: "Xu Tao",
    email: "xutao1204@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "pending",
  },
  {
    name: "Abdul Hamid",
    email: "abdulhamid5000@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "pending",
  },
  {
    name: "Rayhan Ahmed",
    email: "rayhanahmed3x00@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "completed",
  },
  {
    name: "Xu Tao",
    email: "xutao1204@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "completed",
  },
  {
    name: "Chen Hui",
    email: "chenhui4022@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "pending",
  },
  {
    name: "Monir Khan",
    email: "monirkhan1000@example.com",
    date: "4 March 2024",
    invoice: "#104090",
    amount: "700",
    status: "completed",
  },
  {
    name: "Mizan Khan",
    email: "mizankhan5000@example.com",
    date: "4 March 2024",
    invoice: "#104070",
    amount: "650",
    status: "completed",
  },
]

export const topProducts = [
  {
    productName: "High-Performance Engine Oil",
    productImg: engineOil,
    totalRaters: 754,
    quantity: 650,
    totalSales: "2798",
    productPrice: 290.45,
  },
  {
    productName: "Heavy-Duty Vehicle Gear Box",
    productImg: gearBox,
    totalRaters: 980,
    quantity: 3800,
    totalSales: "98000",
    productPrice: 199.36,
  },
  {
    productName: "Luxury Sports Steering Wheel",
    productImg: steeringWheel,
    totalRaters: 620,
    quantity: 3200,
    totalSales: "78050",
    productPrice: 149.72,
  },
  {
    productName: "LiFePO4 Battery Power Pack",
    productImg: battery,
    totalRaters: 890,
    quantity: 3080,
    totalSales: "78000",
    productPrice: 499.58,
  },
  {
    productName: "EVE Premium Auto Engine",
    productImg: engine,
    totalRaters: 1020,
    quantity: 4150,
    totalSales: "17800",
    productPrice: 999.63,
  },
]

export const topSellers = [
  {
    sellerName: "xu tao",
    img: "",
    location: "United States",
    category: "electric vehicle",
    amount: 2690,
    totalAmount: 782000,
    growth: "56%",
  },
  {
    sellerName: "rayhan ahamed",
    img: rayhan,
    location: "Canada",
    category: "electric car",
    amount: 2110,
    totalAmount: 882520,
    growth: "79%",
  },
  {
    sellerName: "sakib",
    img: sakib,
    location: "UAE",
    category: "hybrid vehicle",
    amount: 1510,
    totalAmount: 952520,
    growth: "95%",
  },
  {
    sellerName: "fatima khan",
    img: "",
    location: "United knigdom",
    category: "luxury car",
    amount: 751,
    totalAmount: 952520,
    growth: "95%",
  },
  {
    sellerName: "maria khan",
    img: "",
    location: "China",
    category: "sports car",
    amount: 510,
    totalAmount: 72520,
    growth: "95%",
  },
  {
    sellerName: "chen hui",
    img: "",
    location: "China",
    category: "lubricants",
    amount: 785,
    totalAmount: 42890,
    growth: "95%",
  },
]

export const recentlyAddedProdcuts = [
  {
    productName: "High-Performance Engine Oil",
    brand: "ABC",
    productImg: engineOil,
    category: "lubricants",
    status: "400 in stock",
    addedDate: "14 dec 2024",
    quantity: 7800,
    quantityPrice: 290,
    productId: "#1WB45DS",
  },
  {
    productName: "Heavy-Duty Vehicle Gear Box",
    brand: "CMBDC",
    productImg: gearBox,
    category: "Hybrid vehicle",
    status: "951 in stock",
    addedDate: "20 dec 2024",
    quantity: 1820,
    quantityPrice: 980,
    productId: "#2M345DS",
  },
  {
    productName: "Luxury Sports Steering Wheel",
    brand: "china auto",
    productImg: steeringWheel,
    category: "sports car",
    status: "1252 in stock",
    addedDate: "6 dec 2024",
    quantity: 2900,
    quantityPrice: 370,
    productId: "#7CB15DS",
  },
  {
    productName: "Headlights",
    brand: "CM",
    productImg: headlight,
    category: "Hybrid car",
    status: "780 in stock",
    addedDate: "5 dec 2024",
    quantity: 1000,
    quantityPrice: 120,
    productId: "#3FB45DS",
  },
  {
    productName: "EVE Premium Auto Engine",
    brand: "ABC",
    productImg: engine,
    category: "Electric car",
    status: "600 in stock",
    addedDate: "22 dec 2024",
    quantity: 1200,
    quantityPrice: 500,
    productId: "#75B45DS",
  },
]

export const ecommerceTopSections = [
  {
    name: "total sales",
    number: "24,345M",
    up: "0.90%",
    icon: sales,
    increase: <HiOutlineArrowUp />,
    text: "last 7 days",
    bgColor: "rgba(143, 32, 183, 0.1)",
  },
  {
    name: "total expenses",
    number: "$271K",
    down: "0.12%",
    icon: expenses,
    decrease: <HiOutlineArrowDown />,
    text: "last 7 days",
    bgColor: "rgba(21, 196, 74, 0.1)",
  },
  {
    name: "total orders",
    number: "2,250",
    up: "0.45%",
    icon: orders,
    increase: <HiOutlineArrowUp />,
    text: "last 7 days",
    bgColor: "rgba(239, 41, 109, 0.1)",
  },
  {
    name: "total profit",
    number: "$967K",
    up: "4.45%",
    icon: profit,
    increase: <HiOutlineArrowUp />,
    text: "last 7 days",
    bgColor: "rgba(41, 187, 133, 0.1)",
  },
]

export const recentOrderStatus = [
  {
    product: "Engine Oil",
    category: "lubricants",
    customer: "tariq",
    orderedDate: "4 july 2024",
    orderedID: "#809D20",
    status: "processing",
    quantity: "10",
    quantityPrice: "$182.45",
    totalPrice: "$1,824.50",
    mail: "tariq40s@gmail.com",
    brand: "ABC",
    img: engineOil,
  },
  {
    product: "grear box",
    category: "Luxury Vehicles",
    customer: "Chen Hui",
    orderedDate: "5 july 2024",
    orderedID: "#459D20",
    status: "pending",
    quantity: "120",
    quantityPrice: "$150.40",
    totalPrice: "$18,048",
    mail: "hui4s20@info.com",
    brand: "EVE",
    img: gearBox,
  },
  {
    product: "Engine",
    category: "Vehicles",
    customer: "CKK Auto",
    orderedDate: "5 july 2024",
    orderedID: "#45SB25",
    status: "shipped",
    quantity: "100",
    quantityPrice: "$1500.00",
    totalPrice: "$150,000",
    mail: "ckkamdin4w@gmail.com",
    brand: "China Auto",
    img: engine,
  },
  {
    product: "Wheels",
    category: "Sports Cars",
    customer: "Xu tao",
    orderedDate: "5 july 2024",
    orderedID: "#809CE2",
    status: "paused",
    quantity: "70",
    quantityPrice: "$8000.00",
    totalPrice: "$56,000",
    mail: "xu21ya@gmail.com",
    brand: "Tao mecahnics",
    img: wheels,
  },
  {
    product: "steering wheel",
    category: "Electric Vehicles",
    customer: "Khan Vehicals",
    orderedDate: "6 july 2024",
    orderedID: "#859D21",
    status: "cancelled",
    quantity: "12",
    quantityPrice: "$850.00",
    totalPrice: "$10,200",
    mail: "khan489s2@info.com",
    brand: "CM",
    img: steeringWheel,
  },
  {
    product: "Headlights",
    category: "Hybrid Vehicles",
    customer: "Mizan",
    orderedDate: "6 july 2024",
    orderedID: "#39D202",
    status: "delivered",
    quantity: "200",
    quantityPrice: "$720.00",
    totalPrice: "$144,000",
    mail: "mizan4kcc.info@gmail.com",
    brand: "ABC",
    img: headlight,
  },
  {
    product: "battery LiFePO4",
    category: "Hybrid Vehicles",
    customer: "Jamal khan",
    orderedDate: "7 july 2024",
    orderedID: "#80BU02",
    status: "processing",
    quantity: "100",
    quantityPrice: "$120.00",
    totalPrice: "$120,000",
    mail: "jmw2dl.info@gmail.com",
    brand: "ABC",
    img: battery,
  },
]

export const messagesData = [
  { name: "rayhan", text: "Hi", time: "11:50 am", img: rayhan },
  { name: "sakib", text: "Hello", time: "10:40 am", img: sakib },
  {
    name: "sakib",
    text: "How are you?",
    time: "11:20 pm",
    img: sakib,
  },
  {
    name: "rayhan",
    text: "I'm good, how about you?",
    time: "12:50 pm",
    img: rayhan,
  },
  {
    name: "sakib",
    text: "I'm fine, thank you!",
    time: "07:50 pm",
    img: sakib,
  },
  {
    name: "rayhan",
    text: "Could you provide me with details of my recent transactions?",
    time: "09:30 am",
    img: rayhan,
  },
  {
    name: "sakib",
    text: "Sure, Could you confirm the date range or any specific transactions you're interested in?",
    time: "10:50 am",
    img: sakib,
  },
  {
    name: "rayhan",
    text: "I'm particularly interested in the order made on June 25th for the hybrid vehicles",
    time: "11:50 pm",
    img: rayhan,
  },
  {
    name: "sakib",
    text: "Got it. I see the order here for hybrid vehicles on June 25th. Everything was processed and shipped on time.",
    time: "10:11 pm",
    img: sakib,
  },
  {
    name: "rayhan",
    text: "Thanks for the update, Sakib. Can you also let me know the expected delivery date for the hybrid vehicles?",
    time: "11:50 am",
    img: rayhan,
  },
  {
    name: "sakib",
    text: " Sure, Rayhan. The expected delivery date for the hybrid vehicles is July 10th. If there are any changes or updates, I will let you know immediately!",
    time: "12:00 am",
    img: sakib,
  },
]

export const chatActionItems = [
  { icon: <PiPhoneCallFill />, name: "Audio Call" },
  { icon: <FaVideo />, name: "Voice Call" },
  { icon: <HiUserAdd />, name: "Add User" },
  { icon: <MdDelete />, name: "Delete" },
]

export const conversationSections = [
  { name: "Messages", icon: <BiSolidMessageAlt /> },
  { name: "Groups", icon: <BsPeopleFill /> },
  { name: "Notifications", icon: <MdNotificationsActive /> },
]

export const conversationsPeople = [
  {
    name: "XMC automobiles",
    img: xmcAutomobiles,
    time: "Wed",
    text: "Thank you for the special offer. It was a great deal!",
    notifications: "7",
  },
  {
    name: "Rain BBC Auto",
    img: rainBBCAuto,
    time: "Mon",
    text: "I had a fantastic experience at your dealership.",
    notifications: "",
  },
  {
    name: "Maria",
    img: "",
    time: "Thu",
    text: "Thank you for the fast shipping!",
    notifications: "5",
  },
  {
    name: "fatima khan",
    img: "",
    time: "Mon",
    text: "The car's performance exceeded my expectations.",
    notifications: "4",
  },
  {
    name: "sakib",
    img: sakib,
    time: "Tue",
    text: "I need to change my shipping address.",
    notifications: "",
  },
  {
    name: "rayhan",
    img: "",
    time: "Tue",
    text: "How can I apply a discount code?",
    notifications: "1",
  },
  {
    name: "xu tao",
    img: "",
    time: "Sat",
    text: "I'm very happy with my purchase. Thank you!",
    notifications: "",
  },

  {
    name: "CCBC Auto",
    img: sakib,
    time: "Fri",
    text: "Can you help me with a return?",
    notifications: "",
  },
]

export const emailCategories = [
  {
    name: "all mail",
    path: "all-mail",
    icon: <IoMailOpenOutline />,
    number: "15",
    color: "#CB36C0",
  },
  {
    name: "inbox",
    path: "inbox",
    icon: <FiMail />,
    number: "5",
    color: "#B2E77E",
  },
  {
    name: "starred",
    path: "starred",
    icon: <FaRegStar />,
    number: "8",
    color: "#A86488",
  },
  {
    name: "importants",
    path: "importants",
    icon: <MdLabelImportantOutline />,
    number: "",
  },
  {
    name: "sent mail",
    path: "sent-mail",
    icon: <AiOutlineSend />,
    number: "",
  },
  {
    name: "spam",
    path: "spam",
    icon: <RiSpam2Line />,
    number: "4",
  },
  {
    name: "trash",
    path: "trash",
    icon: <IoTrashOutline />,
    number: "5",
  },
]

export const emailLabels = [
  { name: "Dealership", color: "#CA08B5" },
  { name: "Work", color: "#FCAF3E" },
  { name: "Company", color: "#3465A4" },
  { name: "Private", color: "#AD7FA8" },
  { name: "Group", color: "green" },
]

export const emailActions = [
  { name: "archive", tooltip: "Archive", icon: <HiArchive /> },
  { name: "spam", tooltip: "Report spam", icon: <RiSpam2Fill /> },
  { name: "delete", tooltip: "Delete", icon: <MdDelete /> },
]

export const emailsShowMoreOptions = [
  { name: "mark as read", icon: <CiRead /> },
  { name: "mark as unread", icon: <CiUnread /> },
  { name: "filter message", icon: <IoFilterOutline /> },
  { name: "mute", icon: <GoMute /> },
  { name: "add to task", icon: <GoTasklist /> },
  { name: "forward as attachment", icon: <GrAttachment /> },
]

export const emails = [
  {
    id: "346456hx4mdps4562523",
    subject: "Inquiry Regarding Electric Vehicle Purchase and Collaboration",
    body: "I hope this message finds you in good health. My name is Xu Tao, and I am interested in purchasing electric vehicles from your esteemed company.",
    sender: "Xu tao",
    senderEmail: "xutao45034@info.com",
    senderImg: null,
    starred: false,
    date: "05:10 pm",
    read: false,
  },
  {
    id: "346456hx4md4562523",
    subject: "Exploring Electric Vehicle Options and Partnership Potential",
    body: "Could we schedule a time to connect and discuss further?",
    sender: "Chen Hui XC",
    senderEmail: "hui2390dfn4r@info.com",
    senderImg: null,
    starred: true,
    date: "12:20 pm",
    read: true,
  },
  {
    id: "46456hx4ms2td4562523",
    subject: "Congratulations on Your Recent Achievement",
    body: "I wanted to extend my heartfelt congratulations to you and your team on your recent achievement.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "12:40 am",
    read: true,
  },
  {
    id: "36456hx4md21gni4562523",
    subject: "Positive Feedback and Future Plans",
    body: "The progress we've made together has been inspiring, and it's clear that our collaborative efforts are driving us towards our shared goals.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "12 July 2024",
    read: true,
  },
  {
    id: "34656hx4md21gni4562523",
    subject: "Sharing Positive Developments with You",
    body: "This accomplishment is a testament to our hard work and dedication.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: true,
    date: "10 July 2024",
    read: false,
  },
  {
    id: "346456hx4md21gni562523",
    subject: "Appreciating Your Team's Efforts",
    body: "I look forward to celebrating our continued success together and exploring new opportunities",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: true,
    date: "9 July 2024",
    read: true,
  },
  {
    id: "346456hx4md21gni4s4562523",
    subject: "Discussing New Business Opportunities",
    body: "Here are a few potential areas where we envision collaborating:",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "5 July 2024",
    read: true,
  },
  {
    id: "346hd56hx4md21gni4s4562",
    subject: "Proposal for Strategic Partnership",
    body: "We are eager to discuss this proposal further and explore how our partnership can drive innovation and enhance market competitiveness.",
    sender: "Rayhan",
    senderEmail: "rahyhan45902dl46@info.com",
    senderImg: null,
    starred: false,
    date: "3 July 2024",
    read: true,
  },
  {
    id: "346456h45th5x4md4562523",
    subject: "Invitation to Discuss Business Growth",
    body: "I hope this message finds you in good health. My name is Xu Tao, and I am interested in purchasing electric vehicles from your esteemed company.",
    sender: "Xu tao",
    senderEmail: "xutao45034@info.com",
    senderImg: null,
    starred: false,
    date: "05:10 pm",
    read: false,
  },
  {
    id: "34456hx45tfd43d4562523",
    subject: "Exploring Electric Vehicle Options and Partnership Potential",
    body: "Could we schedule a time to connect and discuss further?",
    sender: "Chen Hui XC",
    senderEmail: "hui2390dfn4r@info.com",
    senderImg: null,
    starred: true,
    date: "12:20 pm",
    read: true,
  },
  {
    id: "4456hx4mfdg4fgs2td456253",
    subject: "Congratulations on Your Recent Achievement",
    body: "I wanted to extend my heartfelt congratulations to you and your team on your recent achievement.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "12:40 am",
    read: true,
  },
  {
    id: "3646hx4mdd435j672gni462523",
    subject: "Positive Feedback and Future Plans",
    body: "The progress we've made together has been inspiring, and it's clear that our collaborative efforts are driving us towards our shared goals.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "12 July 2024",
    read: true,
  },
  {
    id: "4656h4md2erwer454yeg1gni456223",
    subject: "Sharing Positive Developments with You",
    body: "This accomplishment is a testament to our hard work and dedication.",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: true,
    date: "10 July 2024",
    read: false,
  },
  {
    id: "3464asdfsdfx4md21gni562523",
    subject: "Appreciating Your Team's Efforts",
    body: "I look forward to celebrating our continued success together and exploring new opportunities",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: true,
    date: "9 July 2024",
    read: true,
  },
  {
    id: "3456hx4mdfg4et21gni4s4562523",
    subject: "Discussing New Business Opportunities",
    body: "Here are a few potential areas where we envision collaborating:",
    sender: "Li Ming",
    senderEmail: "mi2n493udl46@info.com",
    senderImg: null,
    starred: false,
    date: "5 July 2024",
    read: true,
  },
]

export const products = [
  {
    id: "450bah445b3dsb0",
    name: "engine oil",
    category: "lubricants",
    price: 500,
    company: "ABC",
    madeIn: "made in china",
    productImg: engineOil,
    desc: "Very good products quality that's come from china. 1000 millages support. Better fuel efficiency",
  },
  {
    id: "450bah445b3dsb1",
    name: "engine oil",
    category: "lubricants",
    price: 500,
    company: "ABC",
    madeIn: "made in china",
    productImg: engineOil,
    desc: "Very good products quality that's come from china. 1000 millages support. Better fuel efficiency",
  },
  {
    id: "450bah445b3dsb2",
    name: "engine oil",
    category: "lubricants",
    price: 500,
    company: "ABC",
    madeIn: "made in china",
    productImg: engineOil,
    desc: "Very good products quality that's come from china. 1000 millages support. Better fuel efficiency",
  },
  {
    id: "450bah445b3dsb3",
    name: "engine oil",
    category: "lubricants",
    price: 500,
    company: "ABC",
    madeIn: "made in china",
    productImg: engineOil,
    desc: "Very good products quality that's come from china. 1000 millages support. Better fuel efficiency",
  },
]

export const kanbanInitialData = {
  newTask: [
    {
      id: "99043032485",
      taskName: "Update Inventory Levels",
      desc: "Adjust stock levels to reflect sales and restocks.",
      color: "#4869C9",
      assignedTo: "Xu Tao, Rayhan",
      assignedDate: "26 June 2024, 10:40 am",
      priority: "low",
    },
    {
      id: "1904319032485",
      taskName: "Track Order Shipments",
      desc: "Monitor outgoing shipments and provide tracking info.",
      color: "#F5DD00",
      assignedTo: "Xu Tao, Abdul Azim",
      assignedDate: "27 June 2024, 10:30 pm",
      priority: "medium",
    },
    {
      id: "354319032485",
      taskName: "Implement Quality Control Checks",
      desc: "Check products for quality before shipping.",
      color: "#EF2929",
      assignedTo: "Farjana khan",
      assignedDate: "27 June 2024, 12:31 pm",
      priority: "high",
    },
  ],
  workingTask: [
    {
      id: "32849732894",
      taskName: "Analyze Shipping Costs",
      desc: "Review shipping costs to find savings opportunities.",
      color: "#BB2525",
      assignedTo: "Marzana",
      assignedDate: "26 June 2024, 12:40 am",
      priority: "high",
    },
    {
      id: "189732894",
      taskName: "Verify Shipping Addresses",
      desc: "Confirm the accuracy of customer shipping addresses.",
      color: "#3B3CED",
      assignedTo: "Farjana khan",
      assignedDate: "25 June 2024, 11:10 pm",
      priority: "medium",
    },
  ],
  completedTask: [
    {
      id: "842007908345901",
      taskName: "Maintain Packing Supplies",
      desc: "Ensure sufficient stock of packing materials.",
      color: "#3B3CED",
      assignedTo: "Mariya Ahamed",
      assignedDate: "20 June 2024, 9:21 pm",
      priority: "medium",
    },
    {
      id: "200700908345901",
      taskName: "Schedule Courier Pickups",
      desc: "Arrange daily pickups with courier services.",
      color: "#1F9EA0",
      assignedTo: "Farjana Ahamed",
      assignedDate: "21 June 2024, 12:01 pm",
      priority: "high",
    },
    {
      id: "890438503485",
      taskName: "Analyze Shipping Costs",
      desc: "Regularly review and analyze shipping costs to identify opportunities for cost savings and improved efficiency.",
      color: "#C70A0A",
      assignedTo: "Rayhan Ahmed",
      assignedDate: "26 June 2024, 10:30 pm",
      priority: "high",
    },
    {
      id: "8968438503485",
      taskName: "Update Shipping Policies",
      desc: "Revise shipping policies to improve efficiency and customer satisfaction.",
      color: "#D8AA39",
      assignedTo: "Sarikah",
      assignedDate: "26 June 2024, 10:30 pm",
      priority: "low",
    },
  ],
}

export const productsList = [
  {
    productName: "Engine Oil",
    price: 3080,
    ratings: 4,
    productImg: engineOil,
  },
  {
    productName: "Gearbox Hybrid Car",
    price: 1800,
    ratings: 5,
    productImg: gearBox,
  },
  {
    productName: "headlight electroinc car",
    price: 2900,
    ratings: 4,
    productImg: headlight,
  },
  {
    productName: "Lithium Battery",
    price: 3100,
    ratings: 5,
    productImg: battery,
  },
  {
    productName: "Steering wheel",
    price: 1600,
    ratings: 3,
    productImg: steeringWheel,
  },
  {
    productName: "Wheels",
    price: 1610,
    ratings: 5,
    productImg: wheels,
  },
]

export const customerBenefits = [
  {
    title: "Special Discounts Tailored for You!",
    icon: <TbRosetteDiscountCheck />,
    subtitle: "Limited time offer - Up to $100 off",
  },
  {
    title: "Get Free Shipping on $200+ Orders!",
    icon: <MdOutlineLocalShipping />,
    subtitle: "Only for this week",
  },
  {
    title: "Dedicated Customer Support!",
    icon: <RiFolderSettingsLine />,
    subtitle: "Available 7 days a week - 8 AM to 8 PM",
  },
  {
    title: "Free Gift Wrapping Available",
    icon: <GoGift />,
    subtitle: "With 100 custom note options",
  },
]

export const productSpecifications = [
  {
    label: "Model Name",
    value: "EcoDrive X5",
  },
  {
    label: "Vehicle Type",
    value: "Hybrid Crossover",
  },
  {
    label: "Engine Type",
    value: "Dual-Motor Hybrid (Electric + Gasoline)",
  },
  {
    label: "Fuel Efficiency",
    value: "Up to 60 MPG (highway)",
  },
  {
    label: "Transmission",
    value: "Automatic, 6-speed with Smart Energy Management",
  },
  {
    label: "Seating Capacity",
    value: "5 Passengers",
  },
  {
    label: "Battery Type",
    value: "Lithium-Ion, Rechargeable",
  },
  {
    label: "Charging Time",
    value: "3 hours (fast charging), 8 hours (standard charging)",
  },
  {
    label: "Safety Rating",
    value: "5-Star NCAP Rating",
  },
  {
    label: "Dimensions (L x W x H)",
    value: "182 x 72 x 65 inches",
  },
  {
    label: "Warranty",
    value: "5-Year/60,000-Mile Powertrain Warranty",
  },
  {
    label: "Available Colors",
    value: "Silver, Midnight Black, Sky Blue, Pearl White",
  },
  {
    label: "Technology Features",
    value: "Touchscreen Infotainment, Adaptive Cruise Control, Lane Assist",
  },
  {
    label: "Towing Capacity",
    value: "1,500 lbs",
  },
  {
    label: "Emissions",
    value: "Low Emission Vehicle (LEV) certified",
  },
]

export const customerFeedback = [
  {
    name: "Rayhan",
    ratings: 5,
    img: rayhan,
    review:
      "The EcoDrive X5 exceeded my expectations. The Smart Energy Management really shines during long trips, providing smooth performance and exceptional fuel efficiency.",
    feedbackTitle: "Excellent Hybrid Performance",
    reviewDetails: "15 September 2024, USA",
  },
  {
    name: "Fatima",
    ratings: 4,
    img: sakib,
    review:
      "I've been driving the EcoDrive X5 for a few months now, and it has made city driving so much easier. The seamless transition between electric and gas modes is impressive.",
    feedbackTitle: "Impressive City Driving",
    reviewDetails: "18 September 2024, UAE",
  },
  {
    name: "Xu Tao",
    ratings: 5,
    img: rayhan,
    review:
      "The EcoDrive X5 is perfect for long drives. The cabin is quiet, and the hybrid engine is incredibly responsive. It offers excellent fuel savings on highways.",
    feedbackTitle: "Great for Long Drives",
    reviewDetails: "20 September 2024, China",
  },
  {
    name: "Maria",
    ratings: 4,
    img: sakib,
    review:
      "I've noticed a significant improvement in fuel economy since switching to the EcoDrive X5. The interior is spacious and comfortable, making it a pleasure to drive every day.",
    feedbackTitle: "Fuel Efficient & Comfortable",
    reviewDetails: "22 September 2024, Canada",
  },
]

export const userSkills = [
  "Project Management",
  "Data Analysis",
  "User Support",
  "Team Leadership",
  "Technical Troubleshooting",
  "Team Building",
  "Decison Making",
  "Problem Solving",
  "Communication",
  "Marketing",
]

export const userLanguageSkills = [
  "English",
  "Mandarin Chinese",
  "Spanish",
  "French",
]

export const userPersonalInfo = [
  { label: "name", value: "Sakib Al Hassan" },
  { label: "website", value: "www.sakib-portfolio.com" },
  { label: "email", value: "jmdashboard@info.com" },
  { label: "designation", value: "Data Visualization Specialist" },
  { label: "availability", value: "Full Time" },
  { label: "joining date", value: "27 Oct 2022" },
  { label: "age", value: 25 },
  { label: "location", value: "Baker Street, Manchester, England" },
  { label: "experience", value: "06 Years" },
]

export const userSocialAccounts = [
  {
    name: "github",
    icon: <DiGithubBadge />,
    link: "github.com/sakib460",
  },
  {
    name: "twitter",
    icon: <CiTwitter />,
    link: "twitter.com/sakib460",
  },
  {
    name: "linkedin",
    icon: <CiLinkedin />,
    link: "linkedin.com/sakib460",
  },
  {
    name: "facebook",
    icon: <CiFacebook />,
    link: "facebook.com/sakib460",
  },
]

export const userDocuments = [
  {
    icon: <BsFillFileEarmarkPdfFill />,
    name: "Resume.pdf",
    size: "200 KB",
  },
  {
    icon: <SiMicrosoftexcel />,
    name: "Annual_Financial_Report_with_Quarterly_Breakdown.xlsx",
    size: "1.5 MB",
  },
  {
    icon: <TbFileTypeDocx />,
    name: "Project_Proposal.docx",
    size: "350 KB",
  },
  {
    icon: <BsFillFileEarmarkPdfFill />,
    name: "User_Manual.pdf",
    size: "1.2 MB",
  },
  {
    icon: <TbFileTypeDocx />,
    name: "Terms_and_Conditions.docx",
    size: "150 KB",
  },
  {
    icon: <FaRegImage />,
    name: "Design_Concepts.psd",
    size: "5.4 MB",
  },
  {
    icon: <AiFillFileText />,
    name: "Meeting_Notes.txt",
    size: "120 KB",
  },
  {
    icon: <BsFillFileEarmarkPdfFill />,
    name: "Event_Agenda.pdf",
    size: "500 KB",
  },
]

export const userFollowers = [
  { img: hybridCarZone, name: "Hybrid Car Zone", designation: "CEO" },
  { img: rayhan, name: "rayhan", designation: "Product Manager" },
  {
    img: rainBBCAuto,
    name: "Rain BBC auto",
    designation: "Marketing Director",
  },
  {
    img: xmcAutomobiles,
    name: "XMC automobiles",
    designation: "Sales Executive",
  },
]

export const userPosts = [
  {
    id: 1,
    title: "Real-Time Fuel Efficiency Tracker",
    description:
      "Track and improve fuel efficiency with insights directly from the automobile dashboard app. Our app provides detailed analytics on fuel consumption patterns, allowing drivers to identify how their driving habits affect fuel usage. Users can set goals for fuel efficiency and receive personalized tips to optimize their driving style, ultimately saving money and reducing carbon emissions.",
    img: fuelEfficiencyTracker,
  },
  {
    id: 2,
    title: "Advanced Safety Alerts",
    description:
      "Stay safe on the road with our advanced real-time alerts for potential hazards. The automobile dashboard app features collision warnings, blind-spot monitoring, and lane departure alerts, all designed to enhance the driving experience. By keeping drivers informed of their surroundings and possible dangers, we aim to significantly reduce the likelihood of accidents and ensure a safer journey for everyone.",
    img: safetyAlerts,
  },
  {
    id: 3,
    title: "Route Optimization and Navigation",
    description:
      "Navigate smarter with our route optimization feature that provides the most efficient paths based on real-time traffic updates. The app analyzes current road conditions, traffic patterns, and construction alerts to suggest alternate routes that save time and fuel. This functionality not only enhances the driving experience but also helps drivers reach their destinations faster and with less frustration.",
    img: routeOptimizationAndNavigation,
  },
  {
    id: 4,
    title: "Driver Behavior Analysis",
    description:
      "Gain insights into driving patterns with our comprehensive driver behavior analysis tool. The app tracks various metrics, such as acceleration, braking habits, and cornering techniques, to provide users with actionable feedback on how to improve their driving style. By understanding their driving behavior, users can adopt safer practices, reduce wear and tear on their vehicles, and potentially lower insurance costs.",
    img: driverBehaviorAnalysis,
  },
]

export const personalInfoInputFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your email" },
  {
    name: "website",
    label: "Website",
    type: "url",
    placeholder: "Your website (e.g., https://example.com)",
  },
  {
    name: "designation",
    label: "Designation",
    type: "text",
    placeholder: "Your designation",
  },
  {
    name: "availability",
    label: "Availability",
    type: "text",
    placeholder: "Your availability",
  },
  {
    name: "joiningDate",
    label: "Joining Date",
    type: "date",
    placeholder: "",
  },
  { name: "age", label: "Age", type: "number", placeholder: "Your age" },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Your location",
  },
  {
    name: "experience",
    label: "Experience",
    type: "text",
    placeholder: "Your experience",
  },
]
