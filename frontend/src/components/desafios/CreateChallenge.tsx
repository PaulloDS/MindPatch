"use client";

import { useState } from "react";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Props = {
  onCreated: () => void;
};

export function CreateChallenge({ onCreated }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    pontos: 0,
    dificuldade: "Fácil",
    linguagem: "",
    tempoEstimado: 0.0,
    tags: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post(
        "/challenges",
        {
          ...form,
          pontos: Number(form.pontos),
          tempoEstimado: Number(form.tempoEstimado),
          tagsDesafio: form.tags.split(",").map((t) => t.trim),
        },
        { withCredentials: true }
      );

      toast.success("Desafio criado com sucesso!");
      setOpen(false);
      onCreated();
    } catch (err) {
      console.error(err);
      toast.error("Erro ao criar desafio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-200 hover:scale-110 transition-transform duration-300">
          ➕ Novo Desafio
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Criar novo desafio</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="titulo">Título</Label>
            <Input
              id="titulo"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pontos">Pontos</Label>
              <Input
                id="pontos"
                name="pontos"
                type="number"
                value={form.pontos}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="dificuldade">Dificuldade</Label>
              <select
                id="dificuldade"
                name="dificuldade"
                value={form.dificuldade}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option>Fácil</option>
                <option>Médio</option>
                <option>Difícil</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linguagem">Linguagem</Label>
              <Input
                id="linguagem"
                name="linguagem"
                value={form.linguagem}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="tempoEstimado">Tempo Estimado (min)</Label>
              <Input
                id="tempoEstimado"
                name="tempoEstimado"
                type="number"
                value={form.tempoEstimado}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
            <Input
              id="tags"
              name="tags"
              value={form.tags}
              onChange={handleChange}
            />
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Criando..." : "Criar Desafio"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
