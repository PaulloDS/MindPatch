// components/PatchDeleteDialog.tsx
"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";

export function DeletePatche({
  patchId,
  onDeleted,
}: {
  patchId: number;
  onDeleted: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/patches/${patchId}`, { withCredentials: true });
      toast.success("Patch deletado!");
      onDeleted();
      setOpen(false);
    } catch (err) {
      toast.error("Erro ao deletar patch");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700">🗑️ Apagar</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-4">
          <p>Tem certeza que deseja apagar este patch?</p>
          <div className="flex justify-between">
            <Button onClick={() => setOpen(false)} variant="outline" className="bg-gray-400">
              Cancelar
            </Button>
            <Button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Confirmar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
