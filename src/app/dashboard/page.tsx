"use client"

import { useState } from "react"
import { LayoutDashboard , Calendar, Clock, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { dashboardStats } from "@/constants/card-data"
import { NOTIFICATION_DATA } from "@/constants/notification-data"
import { APPOINTMENT_DATA } from "@/constants/appointment-data"

interface NotificationFilters {
  types: string[]
  status: string[]
  timeRange: string[]
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("notifications")
  const [notificationFilters, setNotificationFilters] = useState<NotificationFilters>({
    types: ["booking", "payment", "customer", "reminder"],
    status: ["new", "read"],
    timeRange: ["today", "yesterday", "week"],
  })

  // Calculate counts
  const unreadNotifications = NOTIFICATION_DATA.filter((n) => n.hasNewBadge).length
  const todayBookings = APPOINTMENT_DATA.length

  // Filter notifications based on selected filters
  const filteredNotifications = NOTIFICATION_DATA.filter((notification) => {
    const typeMatch = notificationFilters.types.includes(notification.type)
    const statusMatch = notificationFilters.status.includes(notification.hasNewBadge ? "new" : "read")
    return typeMatch && statusMatch
  })

  const handleBellClick = () => {
    setActiveTab("notifications")
  }

  const handleFilterChange = (filterType: keyof NotificationFilters, value: string, checked: boolean) => {
    setNotificationFilters((prev) => ({
      ...prev,
      [filterType]: checked ? [...prev[filterType], value] : prev[filterType].filter((item) => item !== value),
    }))
  }

  const filterOptions = {
    types: [
      { value: "booking", label: "Bookings", count: NOTIFICATION_DATA.filter((n) => n.type === "booking").length },
      { value: "payment", label: "Payments", count: NOTIFICATION_DATA.filter((n) => n.type === "payment").length },
      { value: "customer", label: "Customers", count: NOTIFICATION_DATA.filter((n) => n.type === "customer").length },
      { value: "reminder", label: "Reminders", count: NOTIFICATION_DATA.filter((n) => n.type === "reminder").length },
    ],
    status: [
      { value: "new", label: "Unread", count: unreadNotifications },
      { value: "read", label: "Read", count: NOTIFICATION_DATA.length - unreadNotifications },
    ],
    timeRange: [
      { value: "today", label: "Today", count: NOTIFICATION_DATA.filter((n) => n.timeRange === "today").length },
      {
        value: "yesterday",
        label: "Yesterday",
        count: NOTIFICATION_DATA.filter((n) => n.timeRange === "yesterday").length,
      },
      { value: "week", label: "This Week", count: NOTIFICATION_DATA.filter((n) => n.timeRange === "week").length },
    ],
  }

  return (
    <div className="flex-1 overflow-hidden">
      <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              < LayoutDashboard className="h-4 w-4" />
              <span>{unreadNotifications} notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{todayBookings} bookings today</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handleBellClick}
        >
          < LayoutDashboard className="h-5 w-5" />
          {unreadNotifications > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadNotifications}
            </Badge>
          )}
        </Button>
      </header>

      <main className="p-4 h-full overflow-hidden">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
          {dashboardStats.map((start) => {
            const IconComponent = start.icon
            return (
              <div key={start.id} className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium">{start.title}</h2>
                  <IconComponent className={`h-5 w-5 ${start.iconColor}`} />
                </div>
                <p className="mt-2 text-2xl font-bold">{start.value}</p>
                <p className="text-sm text-gray-500">{start.description}</p>
              </div>
            )
          })}
        </div>

        {/* Tabs Section */}
        <div className="space-y-4 h-full">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 w-[400px] bg-gray-200">
              <TabsTrigger value="notifications" className="relative">
                Notifications
                {unreadNotifications > 0 && (
                  <Badge
                    variant="destructive"
                    className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {unreadNotifications}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="bookings" className="relative">
                {"Today's Bookings"}
                <Badge
                  variant="secondary"
                  className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {todayBookings}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                  {activeTab === "notifications" && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-2">
                          <Filter className="h-4 w-4" />
                          Filter
                          <Badge
                            variant="secondary"
                            className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                          >
                            {filteredNotifications.length}
                          </Badge>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80" align="end">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Filter Notifications</h4>
                            <p className="text-sm text-muted-foreground">Choose which notifications to display</p>
                          </div>

                          <Separator />

                          {/* Type Filters */}
                          <div className="space-y-3">
                            <h5 className="text-sm font-medium">Type</h5>
                            <div className="space-y-2">
                              {filterOptions.types.map((option) => (
                                <div key={option.value} className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox
                                      id={`type-${option.value}`}
                                      checked={notificationFilters.types.includes(option.value)}
                                      onCheckedChange={(checked) =>
                                        handleFilterChange("types", option.value, checked as boolean)
                                      }
                                    />
                                    <label
                                      htmlFor={`type-${option.value}`}
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {option.count}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          {/* Status Filters */}
                          <div className="space-y-3">
                            <h5 className="text-sm font-medium">Status</h5>
                            <div className="space-y-2">
                              {filterOptions.status.map((option) => (
                                <div key={option.value} className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox
                                      id={`status-${option.value}`}
                                      checked={notificationFilters.status.includes(option.value)}
                                      onCheckedChange={(checked) =>
                                        handleFilterChange("status", option.value, checked as boolean)
                                      }
                                    />
                                    <label
                                      htmlFor={`status-${option.value}`}
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {option.count}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          {/* Quick Actions */}
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setNotificationFilters({
                                  types: ["booking", "payment", "customer", "reminder"],
                                  status: ["new", "read"],
                                  timeRange: ["today", "yesterday", "week"],
                                })
                              }
                              className="flex-1"
                            >
                              Select All
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setNotificationFilters({
                                  types: [],
                                  status: [],
                                  timeRange: [],
                                })
                              }
                              className="flex-1"
                            >
                              Clear All
                            </Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                {/* Notifications */}
                <TabsContent value="notifications" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      Showing {filteredNotifications.length} of {NOTIFICATION_DATA.length} notifications
                    </p>
                  </div>
                  <ScrollArea className="h-[800px] px-6">
                    <div className="space-y-2">
                      {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => {
                          const IconComponent = notification.icon
                          return (
                            <Card
                              key={notification.id}
                              className={`h-[80px] flex justify-center border-l-6 ${notification.borderColor}`}
                            >
                              <CardContent className="px-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex gap-3">
                                    <div
                                      className={`flex h-8 w-8 items-center justify-center rounded-full ${notification.iconBgColor}`}
                                    >
                                      <IconComponent className={`h-4 w-4 ${notification.iconColor}`} />
                                    </div>
                                    <div className="space-y-0.5">
                                      <h3 className="font-medium text-sm">{notification.title}</h3>
                                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                                    </div>
                                  </div>
                                  {notification.hasNewBadge && <Badge className="text-xs my-auto">New</Badge>}
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })
                      ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <Filter className="h-12 w-12 text-muted-foreground mb-4" />
                          <h3 className="font-medium text-lg mb-2">No notifications match your filters</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Try adjusting your filter settings to see more notifications
                          </p>
                          <Button
                            variant="outline"
                            onClick={() =>
                              setNotificationFilters({
                                types: ["booking", "payment", "customer", "reminder"],
                                status: ["new", "read"],
                                timeRange: ["today", "yesterday", "week"],
                              })
                            }
                          >
                            Reset Filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Today's Bookings */}
                <TabsContent value="bookings" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      {"You have " + todayBookings + " bookings scheduled for today"}
                    </p>
                  </div>
                  <ScrollArea className="h-[800px] px-6">
                    <div className="space-y-2 pb-4">
                      {APPOINTMENT_DATA.map((appointment) => {
                        return (
                          <Card
                            key={appointment.id}
                            className={`h-[80px] flex justify-center border-l-6 ${appointment.borderColor}`}
                          >
                            <CardContent className="p-3">
                              <div className="flex items-start justify-between">
                                <div className="flex gap-2">
                                  <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full ${appointment.iconBgColor}`}
                                  >
                                    <Clock className={`h-4 w-4 ${appointment.iconColor}`} />
                                  </div>
                                  <div className="space-y-0.5">
                                    <h3 className="font-medium text-sm">{appointment.customerName}</h3>
                                    <p className="text-xs text-muted-foreground">
                                      {appointment.service} - {appointment.time}
                                    </p>
                                    <p className="text-xs text-muted-foreground">Duration: {appointment.duration}</p>
                                  </div>
                                </div>
                                <Badge variant={appointment.badgeVariant} className="text-xs">
                                  {appointment.status}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
















// import {
//   BarChart3,
//   Bell,
//   Calendar,
//   CreditCard,
//   DollarSign,
//   Settings,
//   Users,
//   Clock,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Badge } from "@/components/ui/badge";
// import { dashboardStats } from "@/constants/card-data"
// import { NOTIFICATION_DATA } from "@/constants/notification-data";
// import { APPOINTMENT_DATA, AppointmentData } from "@/constants/appointment-data";





// export default function DashboardPage() {
//   return (
//     <div className="flex-1 overflow-hidden">
//       <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
//         <h1 className="text-2xl font-semibold">Dashboard</h1>
//         <button className="rounded-full bg-gray-100 p-2">
//           <Bell className="h-5 w-5" />
//         </button>
//       </header>

//       <main className="p-4 h-full overflow-hidden">
//         {/* Stats Cards */}
//         {/* ------------------top section------------------- */}
//          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
//       {dashboardStats.map((start) => {
//         const IconComponent = start.icon

//         return (
//           <div key={start.id} className="rounded-lg border bg-white p-4 shadow-sm">
//             <div className="flex items-center justify-between">
//               <h2 className="font-medium">{start.title}</h2>
//               <IconComponent className={`h-5 w-5 ${start.iconColor}`} />
//             </div>
//             <p className="mt-2 text-2xl font-bold">{start.value}</p>
//             <p className="text-sm text-gray-500">{start.description}</p>
//           </div>
//         )
//      })}
//     </div>


//         {/* Tabs Section */}
//         <div className="space-y-4 h-full">
//           <Tabs defaultValue="notifications">
//             <TabsList className="grid grid-cols-2 w-[400px] bg-gray-200">
//               <TabsTrigger value="notifications">Notifications</TabsTrigger>
//               <TabsTrigger value="bookings">{"Today's Bookings"}</TabsTrigger>
//             </TabsList>

//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle className="text-xl">Recent Activity</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 {/* Notifications */}
//                 <TabsContent value="notifications" className="h-full m-0">
//                   <div className="px-6 pb-2">
//                     <p className="text-sm text-muted-foreground">
//                       You have 4 unread notifications
//                     </p>
//                   </div>
//                   <ScrollArea className="h-[800px] px-6">
//                     <div className="space-y-2">
//                       {/* --------------------notification cards------------------- */}
//                        {NOTIFICATION_DATA.map((notification) => {
//                         const IconComponent = notification.icon
//                         return (
                           
//     <Card 
//      key={notification.id}
//     className={`h-[80px] flex justify-center border-l-6 ${notification.borderColor}`}>
//       <CardContent className="px-4">
//         <div className="flex items-start justify-between">
//           <div className="flex gap-3">
//             <div className={`flex h-8 w-8 items-center justify-center rounded-full ${notification.iconBgColor}`}>
//               <IconComponent className={`h-4 w-4 ${notification.iconColor}`} />
//             </div>
//             <div className="space-y-0.5">
//               <h3 className="font-medium text-sm">{notification.title}</h3>
//               <p className="text-xs text-muted-foreground">{notification.description}</p>
//               <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
//             </div>
//           </div>
//           {notification.hasNewBadge && <Badge className="text-xs my-auto">New</Badge>}
//         </div>
//       </CardContent>
//     </Card>
//   )
// })}

//                     </div>
//                   </ScrollArea>
//                 </TabsContent>

//                 {/* Today's Bookings */}
//                 <TabsContent value="bookings" className="h-full m-0">
//                   <div className="px-6 pb-2">
//                     <p className="text-sm text-muted-foreground">
//                       {"You have 5 bookings scheduled for today"}
//                     </p>
//                   </div>
//                   <ScrollArea className="h-[800px] px-6">
//     <div className="space-y-2 pb-4">
//        {APPOINTMENT_DATA.map((appointment) =>{
        
//         return (
//          <Card
//          key={appointment.id}
//          className={`h-[80px] flex justify-center border-l-6 ${appointment.borderColor}`}>
//       <CardContent className="p-3">
//         <div className="flex items-start justify-between">
//           <div className="flex gap-2">
//             <div className={`flex h-8 w-8 items-center justify-center rounded-full ${appointment.iconBgColor}`}>
//               <Clock className={`h-4 w-4 ${appointment.iconColor}`} />
//             </div>
//             <div className="space-y-0.5">
//               <h3 className="font-medium text-sm">{appointment.customerName}</h3>
//               <p className="text-xs text-muted-foreground">
//                 {appointment.service} - {appointment.time}
//               </p>
//               <p className="text-xs text-muted-foreground">Duration: {appointment.duration}</p>
//             </div>
//           </div>
//           <Badge variant={appointment.badgeVariant} className="text-xs">
//             {appointment.status}
//           </Badge>
//         </div>
//       </CardContent>
//     </Card>
  
    
//       )
//     })}
//        </div>
    
//                   </ScrollArea>
//                 </TabsContent>
//               </CardContent>
//             </Card>
//           </Tabs>
//         </div>
//       </main>
//     </div>
//   );
// }


