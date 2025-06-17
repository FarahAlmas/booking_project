import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Settings,
  Users,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { dashboardStats } from "@/constants/card-data"
import { NOTIFICATION_DATA } from "@/constants/notification-data";
import { APPOINTMENT_DATA, AppointmentData } from "@/constants/appointment-data";





export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button className="rounded-full bg-gray-100 p-2">
          <Bell className="h-5 w-5" />
        </button>
      </header>

      <main className="p-4 h-full overflow-hidden">
        {/* Stats Cards */}
        {/* ------------------top section------------------- */}
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
          <Tabs defaultValue="notifications">
            <TabsList className="grid grid-cols-2 w-[400px] bg-gray-200">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="bookings">{"Today's Bookings"}</TabsTrigger>
            </TabsList>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>

              <CardContent>
                {/* Notifications */}
                <TabsContent value="notifications" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      You have 4 unread notifications
                    </p>
                  </div>
                  <ScrollArea className="h-[800px] px-6">
                    <div className="space-y-2">
                      {/* --------------------notification cards------------------- */}
                       {NOTIFICATION_DATA.map((notification) => {
                        const IconComponent = notification.icon
                        return (
                           
    <Card 
     key={notification.id}
    className={`h-[80px] flex justify-center border-l-6 ${notification.borderColor}`}>
      <CardContent className="px-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${notification.iconBgColor}`}>
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
})}

                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Today's Bookings */}
                <TabsContent value="bookings" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      {"You have 5 bookings scheduled for today"}
                    </p>
                  </div>
                  <ScrollArea className="h-[350px] px-6">
    <div className="space-y-2 pb-4">
       {APPOINTMENT_DATA.map((appointment) =>{
        
        return (
         <Card
         key={appointment.id}
         className={`h-[80px] flex justify-center border-l-6 ${appointment.borderColor}`}>
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${appointment.iconBgColor}`}>
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
  );
}


