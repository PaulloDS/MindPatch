// components/PatchCreateDialog.tsx
"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { Switch } from "../ui/switch";

type Tag = {
  id: number;
  nome: string;
};

export function CreatePatche({ onCreated }: { onCreated: () => void }) {
  const [tagsDisponiveis, setTagsDisponiveis] = useState<Tag[]>([]);
  const [tagsSelecionadas, setTagsSelecionadas] = useState<number[]>([]);
  const [visibilidade, setVisibilidade] = useState<"PUBLICO" | "PRIVADO">(
    "PRIVADO"
  );
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    codigo: "",
    aprendizado: "",
  });

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await api.get("/tags", { withCredentials: true });
        setTagsDisponiveis(res.data);
      } catch (err) {
        toast.error("Erro ao carregar tags");
      }
    };
    fetchTags();
  }, []);

  const handleSubmit = async () => {
    try {
      await api.post(
        "/patches",
        { ...form, visibilidade, tags: tagsSelecionadas },
        { withCredentials: true }
      );
      toast.success("Patch criado com sucesso!");
      onCreated(); // para recarregar a lista
      setOpen(false);
    } catch (err) {
      console.log(tagsSelecionadas);
      toast.error("Erro ao criar patch");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-200 hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
          ➕ Novo Patche
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            placeholder="Título"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Descrição"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <textarea
            className="w-full border p-2 rounded font-mono"
            placeholder="Código"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Aprendizado"
            value={form.aprendizado}
            onChange={(e) => setForm({ ...form, aprendizado: e.target.value })}
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tags disponíveis:
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
          <div className="flex items-center space-x-2">
            <Switch
              id="visibilidade"
              checked={visibilidade === "PUBLICO"}
              onCheckedChange={(checked) =>
                setVisibilidade(checked ? "PUBLICO" : "PRIVADO")
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
            Salvar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
