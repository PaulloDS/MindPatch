// components/PatchEditDialog.tsx
"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { Switch } from "../ui/switch";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Tag = {
  id: number;
  nome: string;
};

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

  const [tagsDisponiveis, setTagsDisponiveis] = useState<Tag[]>([]);
  const [tagsSelecionadas, setTagsSelecionadas] = useState<number[]>(
    patch.tags?.map((t: any) => t.id) || []
  );

  useEffect(() => {
    if (open) {
      const fetchTags = async () => {
        try {
          const res = await api.get("/tags", { withCredentials: true });
          setTagsDisponiveis(res.data);
        } catch (err) {
          toast.error("Erro ao carregar tags");
        }
      };
      fetchTags();
    }
  }, [open]);

  const handleSubmit = async () => {
    try {
      await api.put(
        `/patches/${patch.id}`,
        { ...form, visibilidade, tagIds: tagsSelecionadas },
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
      <DialogContent className="bg-gradient-to-br from-gray-200 to-emerald-100">
        <VisuallyHidden>
          <DialogTitle>Editar Patch</DialogTitle>
        </VisuallyHidden>
        <div className="space-y-3 py-5">
          <input
            className="w-full border p-2 px-4 rounded-xl border-emerald-700"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
          <textarea
            className="w-full border p-2 px-4 rounded-xl border-emerald-700"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <textarea
            className="w-full border p-2 px-4 rounded-xl font-mono border-emerald-700"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
          />
          <input
            className="w-full border p-2 px-4 rounded-xl border-emerald-700"
            value={form.aprendizado}
            onChange={(e) => setForm({ ...form, aprendizado: e.target.value })}
          />
          <div className="space-y-2 flex justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags:
              </label>
              <div className="flex flex-wrap gap-2">
                {tagsDisponiveis.map((tag) => (
                  <label
                    key={tag.id}
                    className="flex items-center space-x-1 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={tagsSelecionadas.includes(tag.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTagsSelecionadas([...tagsSelecionadas, tag.id]);
                        } else {
                          setTagsSelecionadas(
                            tagsSelecionadas.filter((id) => id !== tag.id)
                          );
                        }
                      }}
                    />
                    <span>{tag.nome}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-300 px-3 rounded-full text-emerald-800">
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
