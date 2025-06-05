import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

import { BarChart3, Package, Users2, ShoppingCart } from "lucide-react";
import Button from "@/ui/button/Button";



 function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl shadow-md border bg-white ${className}`}>
      {children}
    </div>
  );
}


 function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}



export default function AdminDashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-10 bg-[#F9FAF9] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B4332] mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-[#EAF2EF]">
          <CardContent className="p-4 flex items-center gap-4">
            <Package className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">240</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="p-4 flex items-center gap-4">
            <Users2 className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Users</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">1,029</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="p-4 flex items-center gap-4">
            <ShoppingCart className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Orders</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">312</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#EAF2EF]">
          <CardContent className="p-4 flex items-center gap-4">
            <BarChart3 className="text-[#006039]" />
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <h2 className="text-xl font-semibold text-[#1B4332]">₹45,890</h2>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold text-[#1B4332] mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Add Product
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Manage Orders
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            View Users
          </Button>
          <Button className="bg-[#1B4332] text-[#A37E2C] hover:bg-[#163326]">
            Update Banner
          </Button>
        </div>
      </div>
    </div>
  );
}
