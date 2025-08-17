"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditPatche } from "./EditPatche";
import { DeletePatche } from "./DeletePatche";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

type Patch = {
  id: number;
  titulo: string;
  descricao: string;
  codigo: string;
  aprendizado: string;
  autor: {
    id: number;
    nome: string;
  };
  tags: { id: number; nome: string }[];
  comentarios?: {
    id: number;
    texto: string;
    autorNome: string;
    criadoEm: string;
  }[];
  criadoEm: string;
  atualizadoEm: string;
  visibilidade: string;
};

interface CardPatchesProps {
  patch?: Patch;
}

export default function CardPatches({ patch }: CardPatchesProps) {
  const [patches, setPatches] = useState<Patch[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalAbertoId, setModalAbertoId] = useState<number | null>(null);

  const fetchPatches = async () => {
    try {
      const res = await api.get("/patches/meus", { withCredentials: true });
      setPatches(res.data);
    } catch (error) {
      console.error("Erro ao buscar patches: ", error);
      toast.error("Erro ao buscar patches.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (patch) {
      setPatches([patch]); // mostra apenas o patch da busca
      setLoading(false);
    } else {
      fetchPatches(); // mostra todos se não for busca
    }
  }, [patch]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Carregando patches...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 my-5 w-full">
      {patches.map((item) => (
        <Card
          key={item.id}
          className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-3">
              {item.comentarios?.length && item.comentarios.length > 3 && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                  <Flame className="w-3 h-3 mr-1" />
                  Em alta
                </Badge>
              )}
              <div className="flex gap-2">
                <EditPatche patch={item} onUpdated={fetchPatches} />
                <DeletePatche patchId={item.id} onDeleted={fetchPatches} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-800 text-lg">{item.titulo}</h3>
              <p className="text-sm text-gray-600">{item.descricao}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  className="text-xs bg-emerald-200 text-green-800"
                >
                  {tag.nome}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {item.codigo && (
              <div
                onClick={() => setModalAbertoId(item.id)}
                className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-2xl p-6 mb-4 border border-gray-700 shadow-2xl overflow-hidden cursor-pointer hover:ring-2 ring-green-500"
              >
                <pre className="text-green-400 text-sm font-mono overflow-y-scroll mt-8 leading-relaxed h-[200px]">
                  <code>{item.codigo}</code>
                </pre>
              </div>
            )}

            {modalAbertoId === item.id && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="bg-gray-900 rounded-2xl shadow-lg max-w-4xl w-full p-6 relative">
                  <button
                    onClick={() => setModalAbertoId(null)}
                    className="absolute top-3 right-3 text-gray-300 hover:text-white"
                  >
                    ✖
                  </button>
                  <pre className="text-green-400 text-sm font-mono overflow-auto max-h-[70vh] rounded-md">
                    <code>{item.codigo}</code>
                  </pre>
                </div>
              </div>
            )}

            <div className="text-blue-950 font-semibold text-sm">
              {item.aprendizado}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-100 rounded-lg p-3 text-center">
                <span className="font-bold text-green-600">
                  {new Date(item.criadoEm).toLocaleDateString("pt-BR")}
                </span>
                <div className="text-xs text-gray-600">Criado em</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <span className="font-bold text-green-600">
                  {new Date(item.atualizadoEm).toLocaleDateString("pt-BR")}
                </span>
                <div className="text-xs text-gray-600">Atualizado em</div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-sm text-gray-700">
                👤 <strong>Autor:</strong> {item.autor.nome}
              </div>
              <div className="font-semibold text-gray-700 text-sm">
                {item.visibilidade === "PUBLICO" ? "🌎 Público" : "🔒 Privado"}
              </div>
            </div>

            {item.comentarios?.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-lg font-bold text-gray-700">
                  💬 Comentários:
                </h4>
                <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                  {item.comentarios.map((comentario, index) => {
                    let textoFinal = comentario.texto;
                    let isHtml = false;

                    try {
                      const parsed = JSON.parse(comentario.texto);
                      if (parsed.texto) {
                        textoFinal = parsed.texto;
                      }
                    } catch (_) {
                      // se não for JSON, pode ser HTML ou texto normal
                    }

                    // checa se parece HTML (bem simples)
                    if (/<[a-z][\s\S]*>/i.test(textoFinal)) {
                      isHtml = true;
                    }

                    return (
                      <div key={index} className="bg-gray-100 rounded-md p-2">
                        {isHtml ? (
                          <p
                            className="text-sm text-gray-800"
                            dangerouslySetInnerHTML={{ __html: textoFinal }}
                          />
                        ) : (
                          <p className="text-sm text-gray-800">{textoFinal}</p>
                        )}
                        <div className="text-xs text-gray-500 mt-1 flex justify-between">
                          <span>👤 {comentario.autorNome}</span>
                          <span>
                            {new Date(comentario.criadoEm).toLocaleDateString(
                              "pt-BR"
                            )}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
