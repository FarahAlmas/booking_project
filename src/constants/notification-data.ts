import { Bell, Calendar, CreditCard, Users } from "lucide-react"

export const NOTIFICATION_DATA = [
  {
    id: 1,
    title: "New booking received",
    description: "John Doe booked a haircut appointment",
    timestamp: "2 minutes ago",
    icon: Calendar,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
    borderColor: "border-l-blue-500",
    hasNewBadge: true,
    type: "booking",
    timeRange: "today",
  },
  {
    id: 2,
    title: "Payment received",
    description: "Payment of $50 received from Sarah Wilson",
    timestamp: "1 hour ago",
    icon: CreditCard,
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100",
    borderColor: "border-l-green-500",
    hasNewBadge: true,
    type: "payment",
    timeRange: "today",
  },
  {
    id: 3,
    title: "New customer registered",
    description: "Mike Johnson created a new account",
    timestamp: "3 hours ago",
    icon: Users,
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
    borderColor: "border-l-purple-500",
    hasNewBadge: false,
    type: "customer",
    timeRange: "today",
  },
  {
    id: 4,
    title: "Appointment reminder",
    description: "Reminder: Emma Davis appointment in 30 minutes",
    timestamp: "5 hours ago",
    icon: Bell,
    iconColor: "text-orange-600",
    iconBgColor: "bg-orange-100",
    borderColor: "border-l-orange-500",
    hasNewBadge: true,
    type: "reminder",
    timeRange: "today",
  },
  {
    id: 5,
    title: "Booking cancelled",
    description: "Tom Brown cancelled his appointment",
    timestamp: "Yesterday",
    icon: Calendar,
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100",
    borderColor: "border-l-red-500",
    hasNewBadge: false,
    type: "booking",
    timeRange: "yesterday",
  },
  {
    id: 6,
    title: "Weekly report ready",
    description: "Your weekly business report is available",
    timestamp: "2 days ago",
    icon: Bell,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
    borderColor: "border-l-blue-500",
    hasNewBadge: false,
    type: "reminder",
    timeRange: "week",
  },
]
























// import { Calendar, CreditCard, Users, Bell } from "lucide-react"



// export const NOTIFICATION_DATA = [
//   {
//     id: 1,
//     type: "cancellation",
//     title: "Booking Cancellation",
//     description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
//     timestamp: "10 minutes ago",
//     icon: Calendar,
//     borderColor: "border-l-red-500",
//     iconBgColor: "bg-red-100",
//     iconColor: "text-red-500",
//   },
//   {
//     id: 2,
//     type: "booking",
//     title: "New Booking",
//     description: "Sarah Johnson has made a new booking on Friday 10:00 AM",
//     timestamp: "1 hour ago",
//     icon: Calendar,
//     borderColor: "border-l-green-500",
//     iconBgColor: "bg-green-100",
//     iconColor: "text-green-500",
//   },
//   {
//     id: 3,
//     type: "payment",
//     title: "Payment Received",
//     description: "You've received a payment of $150 from Michael Brown",
//     timestamp: "3 hours ago",
//     icon: CreditCard,
//     borderColor: "border-l-yellow-500",
//     iconBgColor: "bg-yellow-100",
//     iconColor: "text-yellow-500",
//     hasNewBadge: true,
//   },
//   {
//     id: 4,
//     type: "customer",
//     title: "New Customer",
//     description: "Emma Wilson has created a new account",
//     timestamp: "5 hours ago",
//     icon: Users,
//     borderColor: "border-l-blue-500",
//     iconBgColor: "bg-blue-100",
//     iconColor: "text-blue-500",
//     hasNewBadge: true,
//   },
//   {
//     id: 5,
//     type: "system",
//     title: "System Update",
//     description: "System maintenance completed successfully",
//     timestamp: "1 day ago",
//     icon: Bell,
//     borderColor: "border-l-purple-500",
//     iconBgColor: "bg-purple-100",
//     iconColor: "text-purple-500",
//   },
//   {
//     id: 6,
//     type: "cancellation",
//     title: "Booking Cancellation",
//     description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
//     timestamp: "10 minutes ago",
//     icon: Calendar,
//     borderColor: "border-l-red-500",
//     iconBgColor: "bg-red-100",
//     iconColor: "text-red-500",
//     hasNewBadge: true,
//   },
//   {
//     id: 7,
//     type: "payment",
//     title: "Payment Received",
//     description: "You've received a payment of $150 from Michael Brown",
//     timestamp: "3 hours ago",
//     icon: CreditCard,
//     borderColor: "border-l-yellow-500",
//     iconBgColor: "bg-yellow-100",
//     iconColor: "text-yellow-500",
//     hasNewBadge: true,
//   },
//   {
//     id: 8,
//     type: "customer",
//     title: "New Customer",
//     description: "Emma Wilson has created a new account",
//     timestamp: "5 hours ago",
//     icon: Users,
//     borderColor: "border-l-blue-500",
//     iconBgColor: "bg-blue-100",
//     iconColor: "text-blue-500",
//     hasNewBadge: true,
//   },
//   {
//     id: 9,
//     type: "system",
//     title: "System Update",
//     description: "System maintenance completed successfully",
//     timestamp: "1 day ago",
//     icon: Bell,
//     borderColor: "border-l-purple-500",
//     iconBgColor: "bg-purple-100",
//     iconColor: "text-purple-500",
//   },
//   {
//     id: 10,
//     type: "cancellation",
//     title: "Booking Cancellation",
//     description: "John Smith has canceled their booking for tomorrow at 2:00 PM",
//     timestamp: "10 minutes ago",
//     icon: Calendar,
//     borderColor: "border-l-red-500",
//     iconBgColor: "bg-red-100",
//     iconColor: "text-red-500",
//     hasNewBadge: true,
//   },
// ]
