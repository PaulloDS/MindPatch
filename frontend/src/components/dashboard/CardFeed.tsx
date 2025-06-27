import Image from "next/image";
import { Badge } from "../ui/badge";
import { Clock, Trophy } from "lucide-react";

export default function CardFeed() {
  return (
    <div className="w-full bg-gray-200/70 p-3 border-l-4 border-l-blue-400 rounded-lg">
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className="flex items-center gap-3">
            <div className="border-4 border-white rounded-full w-[60px] h-[60px] overflow-hidden shadow-2xl">
              <Image
                src="/ghost.webp"
                width={100}
                height={100}
                alt="Ícone Avatar"
              />
            </div>
            <div className="space-y-2">
              <div className="flex gap-3 items-center">
                <p className="font-bold text-lg">Paulo Douglas</p>
                <Badge className="rounded-full font-medium bg-blue-300 text-blue-800 text-[10px] border-blue-500">
                  Verificado
                </Badge>
              </div>
              <div className="flex gap-3">
                <Badge className="rounded-full font-medium bg-purple-300 text-purple-800 text-[10px] border-purple-500">
                  Nível 99
                </Badge>
                <Badge className="rounded-full font-medium bg-orange-300 text-orange-800 text-[10px] border-orange-500">
                  Expert
                </Badge>
                <span className="flex items-center text-xs gap-1 text-gray-500">
                  <Clock size={13} />
                  28 min
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Badge className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full border-none">
            <Trophy />
            Conquista
          </Badge>
        </div>
      </div>
      <p className="font-medium text-sm">Acabei de resolver o desafio de algoritmos de ordenação! A solução com merge sort foi incrível! 🎉</p>
    </div>
  );
}
