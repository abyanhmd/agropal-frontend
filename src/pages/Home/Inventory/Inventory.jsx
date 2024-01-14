import { useState } from "react";
import TopMenuInventory from "../../../components/ui/TopMenuInventory.jsx";
import ListView from "../../../components/ui/ListView.jsx";
import GridView from "../../../components/ui/GridView.jsx";
import inventorySampleData from "../../../data/InventorySampleData.js";

function Inventory() {
  const [viewType, setViewType] = useState("ListView");

  return (
    <>
      <TopMenuInventory viewType={viewType} setViewType={setViewType} />
      {viewType === "ListView" ? (
        <ListView data={inventorySampleData} />
      ) : (
        <GridView data={inventorySampleData} />
      )}
    </>
  );
}

export default Inventory;
