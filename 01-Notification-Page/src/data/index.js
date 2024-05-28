import {
  AvatarAngelaGray,
  AvatarAnnaKim,
  AvatarJacobThompson,
  AvatarMarkWebber,
  AvatarNathanPeterson,
  AvatarRizkyHasanuddin,
  AvatarKimberlySmith,
} from "../assets/index";

//  * { avatar: string, username: string, primary_action: string, time: string, status: "pending" | "read", messages: string[] }[]

const notifications = [
  {
    id: 1,
    avatar: AvatarMarkWebber,
    username: "Mark Webber",
    primary_action: "reacted to your recent post",
    sub_action: "My first tournament today!",
    time: "1m ago",
    status: "pending",
    messages: [],
  },
  {
    id: 2,
    avatar: AvatarAngelaGray,
    username: "Angela Gray",
    primary_action: "followed you",
    sub_action: "",
    time: "5m ago",
    status: "pending",
    messages: [],
  },
  {
    id: 3,
    avatar: AvatarJacobThompson,
    username: "Jacob Thompson",
    primary_action: "has joined your group",
    sub_action: "Chess Club",
    time: "1 day ago",
    status: "pending",
    messages: [],
  },
  {
    id: 4,
    avatar: AvatarRizkyHasanuddin,
    username: "Rizky Hasanuddin",
    primary_action: "sent you a private message",
    sub_action: "",
    time: "5 days ago",
    status: "read",
    messages: [
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    ],
  },
  {
    id: 5,
    avatar: AvatarKimberlySmith,
    username: "Kimberly Smith",
    primary_action: "commented on your picture",
    sub_action: "",
    time: "1 week ago",
    status: "read",
    messages: [],
  },
  {
    id: 6,
    avatar: AvatarNathanPeterson,
    username: "Nathan Peterson",
    primary_action: "reacted to your recent post",
    sub_action: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    status: "read",
    messages: [],
  },
  {
    id: 7,
    avatar: AvatarAnnaKim,
    username: "Anna Kim",
    primary_action: "left the group",
    sub_action: "Chess Club",
    time: "2 weeks ago",
    status: "read",
    messages: [],
  },
];

export { notifications };
