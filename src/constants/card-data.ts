import { Calendar, CreditCard, DollarSign } from "lucide-react"

export const dashboardStats = [
  {
    id: 1,
    title: "Up coming bookings",
    value: "12",
    description: "+2 from yesterday",
    icon: Calendar,
    iconColor: "text-gray-400",
  },
  {
    id: 2,
    title: "Pending Payments",
    value: "$ 2,350",
    description: "3 payments awaiting",
    icon: CreditCard,
    iconColor: "text-gray-400",
  },
  {
    id: 3,
    title: "Total Revenue",
    value: "$ 12,234",
    description: "+8% from last month",
    icon: DollarSign,
    iconColor: "text-gray-400",
  },
]
