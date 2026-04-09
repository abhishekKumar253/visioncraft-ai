"use client";

import {
  CraftWorkbenchProvider,
  useCraftWorkbench,
} from "@/context/CraftWorkbenchContext";
import { CraftWorkbenchProps } from "@/lib/types";
import { CraftControlsPanel } from "./controls-panel";
import { CraftPreviewPanel } from "./preview-panel";
import { HistoryPreviewDialog } from "./history-preview-dialog";

function CraftWorkbench({
  clerkUserId,
  initialHistory,
  initialQuota,
}: CraftWorkbenchProps) {
  return (
    <CraftWorkbenchProvider
      clerkUserId={clerkUserId}
      initialHistory={initialHistory}
      initialQuota={initialQuota}
    >
      <CraftWorkbenchForm />
    </CraftWorkbenchProvider>
  );
}

function CraftWorkbenchForm() {
  const { handleSubmit, viewedHistoryItem, closeHistoryPreview } =
    useCraftWorkbench();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 items-start lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-8"
    >
      <CraftControlsPanel />
      <CraftPreviewPanel />

      {viewedHistoryItem && (
        <HistoryPreviewDialog
          item={viewedHistoryItem}
          onClose={closeHistoryPreview}
        />
      )}
    </form>
  );
}

export default CraftWorkbench;
