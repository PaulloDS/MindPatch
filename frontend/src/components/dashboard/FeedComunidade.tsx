"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { api } from "@/lib/axios";

interface PatchDTO {
  id: number;
  titulo: string;
  codigo: string;
  tag?: string;
  visibilidade: string;
  descricao?: string;
  autorNome: string;
  criadoEm: string; // string ISO
}

interface CommentDTO {
  id: number;
  texto: string;
  autorNome: string;
  autorId: number;
  criadoEm: string;
}

export default function FeedComunidade() {
  const [patches, setPatches] = useState<PatchDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Comentários por patch
  const [commentsMap, setCommentsMap] = useState<Record<number, CommentDTO[]>>(
    {}
  );
  // Controla se o form de comentário está aberto para um patch
  const [commentFormsOpen, setCommentFormsOpen] = useState<
    Record<number, boolean>
  >({});
  // Texto dos comentários sendo escritos
  const [newComments, setNewComments] = useState<Record<number, string>>({});

  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    carregarPatchesPublicos();
  }, []);

  async function carregarPatchesPublicos() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/patches/publicos");
      if (!res.data) throw new Error("Erro ao buscar patches públicos");
      setPatches(res.data);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  async function carregarComentarios(patchId: number) {
    if (commentsMap[patchId]) return; // Já carregado
    try {
      const res = await api.get(`/patches/${patchId}/comments`);
      if (!res.data) throw new Error("Erro ao carregar comentários");
      setCommentsMap((prev) => ({ ...prev, [patchId]: res.data }));
    } catch (err) {
      console.error(err);
    }
  }

  function toggleCommentForm(patchId: number) {
    setCommentFormsOpen((prev) => {
      const isOpen = !!prev[patchId];
      if (!isOpen) {
        carregarComentarios(patchId);
      }
      return { ...prev, [patchId]: !isOpen };
    });
  }

  async function enviarComentario(patchId: number) {
    const texto = newComments[patchId];
    if (!texto || texto.trim() === "") return alert("Comentário vazio");

    try {
      const res = await api.post(`/patches/${patchId}/comments`, { texto });
      // Axios já converte JSON automaticamente e já coloca header Content-Type

      const novoComentario = res.data;

      setCommentsMap((prev) => ({
        ...prev,
        [patchId]: prev[patchId]
          ? [...prev[patchId], novoComentario]
          : [novoComentario],
      }));

      setNewComments((prev) => ({ ...prev, [patchId]: "" }));
    } catch (err: any) {
      alert(
        err.response?.data?.message ||
          err.message ||
          "Erro desconhecido ao enviar comentário"
      );
    }
  }

  // Funções auxiliares para formatação de data
  function formatarData(isoString: string) {
    const dt = new Date(isoString);
    return dt.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <Card className="bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 max-w-4xl mx-auto my-8">
      <CardHeader className="border-b border-green-100/50">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
            <span className="text-2xl">
              <Image
                src="/comunidade.png"
                width={30}
                height={30}
                alt="Ícone Dev"
              />
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Feed da Comunidade
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Veja os patches públicos compartilhados
            </p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-8 mt-[-20px]">
        {loading && (
          <p className="text-center text-gray-600">Carregando patches...</p>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && patches.length === 0 && (
          <p className="text-center text-gray-600">
            Nenhum patch público encontrado.
          </p>
        )}

        {patches.map((patch) => (
          <div
            key={patch.id}
            className="relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-6 border border-gray-100/80 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Header Patch */}
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-14 h-14 border-4 border-white shadow-xl ring-2 ring-green-100">
                {/* Caso tenha avatar, usar AvatarImage, senão fallback com inicial */}
                <AvatarFallback className="bg-gradient-to-r from-green-400 to-emerald-400 text-white font-bold text-lg">
                  {patch.autorNome}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-lg">
                  {patch.titulo}
                </h4>
                <p className="text-sm text-gray-600">
                  Autor:{" "}
                  <span className="font-semibold">{patch.autorNome}</span> •{" "}
                  {formatarData(patch.criadoEm)}
                </p>
              </div>
            </div>

            {/* Código */}
            <pre className="bg-gray-900 text-green-400 text-sm font-mono rounded-xl p-4 overflow-auto max-h-48 mb-4 border border-gray-700 shadow-inner">
              {patch.codigo}
            </pre>

            {/* Descrição, tag e visibilidade */}
            <div className="flex flex-wrap gap-4 mb-4">
              {patch.tag && (
                <Badge className="bg-purple-100 text-purple-700 border border-purple-200 font-semibold">
                  #{patch.tag}
                </Badge>
              )}
              <Badge className="bg-blue-100 text-blue-700 border border-blue-200 font-semibold">
                Visibilidade: {patch.visibilidade}
              </Badge>
            </div>

            {/* Ações */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleCommentForm(patch.id)}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Comentários ({commentsMap[patch.id]?.length ?? 0})
              </Button>
            </div>

            {/* Comentários + Form */}
            {commentFormsOpen[patch.id] && (
              <div className="mt-4 space-y-4 max-h-80 overflow-y-auto border-t border-gray-200 pt-4">
                {(commentsMap[patch.id]?.length ?? 0) === 0 && (
                  <p className="text-sm text-gray-500">
                    Nenhum comentário ainda.
                  </p>
                )}
                {commentsMap[patch.id]?.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-100 rounded-xl p-3 shadow-sm"
                  >
                    <p className="text-gray-800 text-sm font-semibold">
                      {comment.autorNome}
                    </p>
                    <p className="text-gray-700 text-sm">{comment.texto}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {formatarData(comment.criadoEm)}
                    </p>
                  </div>
                ))}

                {/* Form comentário */}
                <div className="mt-2 flex gap-2">
                  <textarea
                    rows={2}
                    className="flex-1 rounded-xl border border-gray-300 p-2 resize-none text-sm"
                    placeholder="Escreva um comentário..."
                    value={newComments[patch.id] || ""}
                    onChange={(e) =>
                      setNewComments((prev) => ({
                        ...prev,
                        [patch.id]: e.target.value,
                      }))
                    }
                  />
                  <Button
                    onClick={() => enviarComentario(patch.id)}
                    disabled={
                      !newComments[patch.id] ||
                      newComments[patch.id].trim() === ""
                    }
                  >
                    Enviar
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
