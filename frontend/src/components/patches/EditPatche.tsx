// components/PatchEditDialog.tsx
"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { Switch } from "../ui/switch";

export function EditPatche({
  patch,
  onUpdated,
}: {
  patch: any;
  onUpdated: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ ...patch });
  const [visibilidade, setVisibilidade] = useState<"PUBLICO" | "PRIVADO">(
    patch.visibilidade
  );

  const handleSubmit = async () => {
    try {
      await api.put(
        `/patches/${patch.id}`,
        { ...form, visibilidade },
        { withCredentials: true }
      );
      toast.success("Patch atualizado!");
      onUpdated();
      setOpen(false);
    } catch (err) {
      toast.error("Erro ao atualizar patch");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>✏️ Editar</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
          <textarea
            className="w-full border p-2 rounded"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <textarea
            className="w-full border p-2 rounded font-mono"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
          />
          <input
            className="w-full border p-2 rounded"
            value={form.aprendizado}
            onChange={(e) => setForm({ ...form, aprendizado: e.target.value })}
          />
          <div className="flex items-center space-x-2">
            <Switch
              id="visibilidade"
              checked={visibilidade === "PUBLICO"}
              onCheckedChange={(value) =>
                setVisibilidade(value ? "PUBLICO" : "PRIVADO")
              }
            />
            <label htmlFor="visibilidade" className="text-sm">
              {visibilidade === "PUBLICO" ? "🌎 Público" : "🔒 Privado"}
            </label>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Atualizar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
