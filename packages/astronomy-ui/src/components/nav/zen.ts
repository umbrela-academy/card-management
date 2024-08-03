import ContactRound from "lucide-svelte/icons/contact-round";
import UsersRound from "lucide-svelte/icons/users-round";
import UserPen from "lucide-svelte/icons/user-pen";
import UserRoundPlus from "lucide-svelte/icons/user-round-plus";
import UserRoundCog from "lucide-svelte/icons/user-round-cog";
import WalletCards from "lucide-svelte/icons/wallet-cards";
import CreditCard from "lucide-svelte/icons/credit-card";
import SquareAsterisk from "lucide-svelte/icons/square-asterisk";
import Asterisk from "lucide-svelte/icons/asterisk";
import PackagePlus from "lucide-svelte/icons/package-plus";
import BadgeHelp from "lucide-svelte/icons/badge-help";
import AArrowUp from "lucide-svelte/icons/a-arrow-up";
import CopyX from "lucide-svelte/icons/copy-x";
import PhoneCall from "lucide-svelte/icons/phone-call";

export const sidebarPatientNav = [
  {
    title: "Patients",
    href: "/cliniq/patient-list",
    icon: ContactRound,
    items: [
      {
        title: "Patient Accounts",
        href: "/cliniq/patient-list",
        icon: UserRoundPlus,
      },
      {
        title: "Patient Details",
        href: "/cliniq/patient-detail-list",
        icon: UserPen,
      },
      {
        title: "Organizations",
        href: "/cliniq/patient-org-list",
        icon: UsersRound,
      },
      {
        title: "Memberships",
        href: "/cliniq/user-asset-list",
        icon: UserRoundCog,
      },
    ],
  },
  {
    title: "Appointments",
    href: "/cliniq/appointment-list",
    icon: WalletCards,
    items: [
      {
        title: "Clinic Visits",
        href: "/cliniq/clinic-appointment-list",
        icon: CreditCard,
      },
      {
        title: "Home Visits",
        href: "/cliniq/phone-appointment-list",
        icon: SquareAsterisk,
      },
      {
        title: "Telemed Calls",
        href: "/cliniq/card-limit-list",
        icon: PhoneCall,
      },
      {
        title: "Doctor Schedules",
        href: "/cliniq/card-limit-list",
        icon: Asterisk,
      },
    ],
  },
  {
    title: "Payments",
    href: "/cliniq/payment-list",
    icon: WalletCards,
    items: [
      {
        title: "Issue Request",
        href: "/cliniq/card-issuance-request-list",
        icon: PackagePlus,
      },
      {
        title: "Request Review",
        href: "/cliniq/card-application-review-list",
        icon: BadgeHelp,
      },
      {
        title: "Update Request",
        href: "/cliniq/card-update-request-list",
        icon: AArrowUp,
      },
      {
        title: "Closing Request",
        href: "/cliniq/card-closing-request-list",
        icon: CopyX,
      },
    ],
  },
  {
    title: "Packages",
    href: "/cliniq/payment-list",
    icon: WalletCards,
    items: [
      {
        title: "Issue Request",
        href: "/cliniq/card-issuance-request-list",
        icon: PackagePlus,
      },
      {
        title: "Request Review",
        href: "/cliniq/card-application-review-list",
        icon: BadgeHelp,
      },
      {
        title: "Update Request",
        href: "/cliniq/card-update-request-list",
        icon: AArrowUp,
      },
      {
        title: "Closing Request",
        href: "/cliniq/card-closing-request-list",
        icon: CopyX,
      },
    ],
  },
  {
    title: "Equipments",
    href: "/cliniq/payment-list",
    icon: WalletCards,
    items: [
      {
        title: "Issue Request",
        href: "/cliniq/card-issuance-request-list",
        icon: PackagePlus,
      },
      {
        title: "Request Review",
        href: "/cliniq/card-application-review-list",
        icon: BadgeHelp,
      },
      {
        title: "Update Request",
        href: "/cliniq/card-update-request-list",
        icon: AArrowUp,
      },
      {
        title: "Closing Request",
        href: "/cliniq/card-closing-request-list",
        icon: CopyX,
      },
    ],
  },
];

export const sidebarEmployeeNav = [
  {
    title: "User Accounts",
    href: "/cardman/user-list",
    icon: ContactRound,
    items: [
      {
        title: "Users",
        href: "/cardman/user-list",
        icon: UserRoundPlus,
      },
      {
        title: "User Profiles",
        href: "/cardman/user-profile-list",
        icon: UserPen,
      },
      {
        title: "User Groups",
        href: "/cardman/user-group-list",
        icon: UsersRound,
      },
      {
        title: "User Assets",
        href: "/cardman/user-asset-list",
        icon: UserRoundCog,
      },
    ],
  },
  {
    title: "Cards & Keys",
    href: "/cardman/card-list",
    icon: WalletCards,
    items: [
      {
        title: "Cards",
        href: "/cardman/card-list",
        icon: CreditCard,
      },
      {
        title: "Credit Scores",
        href: "/cardman/card-score-list",
        icon: SquareAsterisk,
      },
      {
        title: "Prepaid Limits",
        href: "/cardman/card-limit-list",
        icon: Asterisk,
      },
      {
        title: "Issue Request",
        href: "/cardman/card-issuance-request-list",
        icon: PackagePlus,
      },
      {
        title: "Request Review",
        href: "/cardman/card-application-review-list",
        icon: BadgeHelp,
      },
      {
        title: "Update Request",
        href: "/cardman/card-update-request-list",
        icon: AArrowUp,
      },
      {
        title: "Closing Request",
        href: "/cardman/card-closing-request-list",
        icon: CopyX,
      },
    ],
  },
];
