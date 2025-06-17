export interface AppointmentData {
  id: number
  customerName: string
  service: string
  time: string
  duration: string
  status: "Confirmed" | "Pending"
  borderColor: string
  iconBgColor: string
  iconColor: string
  badgeVariant: "secondary" | "outline"
}

export const APPOINTMENT_DATA: AppointmentData[] = [
  {
    id: 1,
    customerName: "Sarah Johnson",
    service: "Hair Cut & Styling",
    time: "9:00 AM",
    duration: "1.5 hours",
    status: "Confirmed",
    borderColor: "border-l-green-500",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-500",
    badgeVariant: "secondary",
  },
  {
    id: 2,
    customerName: "Michael Brown",
    service: "Beard Trim",
    time: "11:00 AM",
    duration: "30 minutes",
    status: "Confirmed",
    borderColor: "border-l-blue-500",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    badgeVariant: "secondary",
  },
  {
    id: 3,
    customerName: "Emma Wilson",
    service: "Full Service",
    time: "2:00 PM",
    duration: "2 hours",
    status: "Pending",
    borderColor: "border-l-orange-500",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    badgeVariant: "outline",
  },
  {
    id: 4,
    customerName: "David Lee",
    service: "Hair Wash & Cut",
    time: "4:30 PM",
    duration: "1 hour",
    status: "Confirmed",
    borderColor: "border-l-purple-500",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    badgeVariant: "secondary",
  },
  {
    id: 5,
    customerName: "Lisa Anderson",
    service: "Color Treatment",
    time: "6:00 PM",
    duration: "2.5 hours",
    status: "Confirmed",
    borderColor: "border-l-teal-500",
    iconBgColor: "bg-teal-100",
    iconColor: "text-teal-500",
    badgeVariant: "secondary",
  },
  {
    id: 6,
    customerName: "James Wilson",
    service: "Shampoo & Style",
    time: "10:00 AM",
    duration: "45 minutes",
    status: "Pending",
    borderColor: "border-l-red-500",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-500",
    badgeVariant: "outline",
  },
  {
    id: 7,
    customerName: "Maria Garcia",
    service: "Highlights & Cut",
    time: "1:00 PM",
    duration: "3 hours",
    status: "Confirmed",
    borderColor: "border-l-pink-500",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-500",
    badgeVariant: "secondary",
  },
  {
    id: 8,
    customerName: "Robert Taylor",
    service: "Classic Cut",
    time: "3:30 PM",
    duration: "45 minutes",
    status: "Confirmed",
    borderColor: "border-l-indigo-500",
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-500",
    badgeVariant: "secondary",
  },
]
