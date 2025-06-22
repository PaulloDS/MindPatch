import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { ArrowUp, Code, Heart, Plus, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

export default function HeroSection() {
  return (
    <section className="mt-5">
      <div className="container w-full flex flex-col items-center justify-center">
        <h1 className="text-7xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent max-w-[1000px] pb-10 text-center">
          Elevando Seu Aprendizado e Sua{" "}
          <p className="inline-block bg-gradient-to-r from-green-700 to-green-400 shadow-md outline-2 outline-green-800 px-8 py-1 mb-[-8px] mr-3 rounded-full">
            <img src="/pc.png" alt="" className="w-[50px]" />
          </p>
          Jornada Dev
        </h1>
        <div className="flex justify-between gap-5 px-10 relative">
          <div>
            <Card className="bg-gradient-to-br from-[#DFE2EC] via-[#DCDFEC] to-[#F1F2F6] backdrop-blur w-[300px] h-[350px] rounded-[40px] flex flex-col items-center mt-5 shadow-xl border-b-4 border-b-white/30 border-l-2 border-l-indigo-50 border-t-2 border-t-indigo-50">
              <div className="border-4 border-dashed border-yellow-300 rounded-full w-[170px] h-[170px] flex items-center justify-center mt-[-100px]">
                <div className="bg-[#EEF0F6] border-2 border-white m-1 text-gray-900 rounded-full w-[150px] h-[150px] flex items-center justify-center shadow-xl">
                  <p className="text-4xl font-extrabold text-gray-800 flex items-center gap-2">UP <ArrowUp/> </p>
                </div>
              </div>
              <CardContent className="flex flex-col items-center ">
                <img src="/trofeu.png" alt="Troféu" className="w-[120px]"/>
                <div className="absolute bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-xl ml-[-50px] mt-[-15px]"><Plus className="font-extrabold text-yellow-500"/></div>
                <p className="text-4xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent pb-2">Ranking</p>
                <p className="text-center text-gray-500">Sistema de ranking, para elevar sua experiência</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-[70%]">
            <Image src="/dev.png" alt="Devoloper" width={550} height={0} className=""/>
            {/* <Image src="/linha.png" alt="Devoloper" width={150} height={0}/> */}
          </div>
          <div>
            <p className="text-xl text-gray-500 text-left max-w-[800px]">
              Descubra recursos valiosos, participe de discussões e encontre
              inspiração para seus projetos. Sua jornada de aprendizado começa
              aqui!
            </p>
            <Card className="mt-20 z-50">
              <CardHeader className="flex justify-between">
                <p className="text-gray-600 font-extrabold text-xl">Implementação de Builder Pattern</p>
                <div className="bg-gradient-to-r from-red-500 to-red-300 w-[100px] h-[50px] rounded-full flex items-center justify-center gap-2">
                  <img src="/coracao.png" alt="Coração 3D" className="w-[25px]" />
                  <span className="font-bold text-red-800">99+</span>
                </div>
              </CardHeader>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 border-none rounded-full ml-5 p-2 shadow-2xl"> <Zap/> Intermediário</Badge>
              <CardContent className="bg-gray-100 mx-5 rounded-lg border-1 border-gray-300 py-5">
                <div className="flex gap-3 items-center">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 w-[40px] h-[40px] flex items-center justify-center rounded-lg">
                    <img src="/logo-java.png" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-800">Java Code</p>
                    <p className="text-xs text-gray-600">Snippet Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
