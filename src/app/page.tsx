import { AudioLines, Database, Eye, FileText, Globe, Image, Lightbulb, Package, Paperclip, PencilLine } from "lucide-react";

const options: { icon: JSX.Element; text: string }[] = [
  {
    icon: <Image size={15} color="#35ae47" />,
    text: 'Crear una imagen'
  },
  {
    icon: <FileText size={15} color="#ea8444" />,
    text: 'Resume un texto'
  },
  {
    icon: <Lightbulb size={15} color="#e2c541" />,
    text: 'Realiza un plan'
  },
  {
    icon: <Database size={15} color="#76d0eb" />,
    text: 'Analiza datos'
  },
  {
    icon: <Eye size={15} color="#6c71ff" />,
    text: 'Analiza imágenes'
  },
  {
    icon: <PencilLine size={15} color="#cb8bd0" />,
    text: 'Ayudame a escribir'
  },
]

export default function Home() {
  return (
    <div className="bg-neutral-800/75 p-5 flex justify-center items-center">
      <div className="w-3/5 text-center space-y-7">
        <h1 className="text-3xl tracking-tight font-medium">¿Con qué puedo ayudarte?</h1>
        <div className="bg-neutral-700/50 rounded-3xl p-4 space-y-4">
          <input
            type="text"
            placeholder="Envía un mensaje a ChatGPT"
            className="bg-transparent w-full outline-none placeholder:text-neutral-400"
          />
          <div className="flex items-end justify-between">
            <div className="flex gap-3">
              <Paperclip size={22} />
              <Package size={22} />
              <Globe size={22} />
            </div>
            <button className="rounded-full bg-white text-black p-1 aspect-square">
              <AudioLines size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-stretch justify-center flex-wrap gap-2">
          {options.map((option, index) => (
            <div key={index} className="flex flex-shrink-0 items-center gap-2 border rounded-full border-neutral-700 py-2.5 px-4 group hover:bg-neutral-700/50 cursor-pointer">
              {option.icon}
              <p className="text-neutral-400 group-hover:text-white">{option.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
