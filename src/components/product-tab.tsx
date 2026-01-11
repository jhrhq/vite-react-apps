"use cliet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductTab() {
  return (
    <div className="w-full bg-white rounded-xl border overflow-hidden mt-4">
      <Tabs
        defaultValue="details"
        className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex-none bg-white"
      >
        <TabsList className="border-b p-0 w-full rounded-none inline-block bg-white group-data-[orientation=horizontal]/tabs:h-fit space-x-2.5 ">
          <TabsTrigger value={"details"}>Details</TabsTrigger>
          <TabsTrigger value={"attachment"}>
            Attachments{" "}
            <span className="text-v6  bg-v1 py-[1.5px] px-2 rounded-full ml-2">
              3
            </span>{" "}
          </TabsTrigger>
          <TabsTrigger value={"activity"}>Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-v9">
                Product Information
              </h3>
              <div className="space-y-3">
                <DataRow label="Brand" value="Sony" />
                <DataRow label="Model" value="WH-1000XM4" />
                <DataRow label="Color" value="Black" />
                <DataRow label="Condition" value="Excellent" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">
                Additional Details
              </h3>
              <div className="space-y-3">
                <DataRow label="Serial Number" value="1234567890" />
                <DataRow label="Purchased From" value="Best Buy" />
                <DataRow label="Last Updated" value="Today, 2:30 PM" />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="attachment" className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">
                Product Information
              </h3>
              <div className="space-y-3">
                <DataRow label="Brand" value="Sony" />
                <DataRow label="Model" value="WH-1000XM4" />
                <DataRow label="Color" value="Black" />
                <DataRow label="Condition" value="Excellent" />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="activity" className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">
                Product Information
              </h3>
              <div className="space-y-3">
                <DataRow label="Brand" value="Sony" />
                <DataRow label="Model" value="WH-1000XM4" />
                <DataRow label="Color" value="Black" />
                <DataRow label="Condition" value="Excellent" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductTab;

// Helper component for the key-value rows
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-v6">{label}</span>
      <span className="font-medium text-sm text-v9">{value}</span>
    </div>
  );
}
