import { Box, Bulb, Database, Eye, FileText, Globe, Paperclip, PencilToLine, Picture } from "@gravity-ui/icons";


const options: { icon: JSX.Element; text: string }[] = [
  {
    icon: <Picture color="#35ae47" />,
    text: 'Crear una imagen'
  },
  {
    icon: <FileText color="#ea8444" />,
    text: 'Resume un texto'
  },
  {
    icon: <Bulb color="#e2c541" />,
    text: 'Realiza un plan'
  },
  {
    icon: <Database color="#76d0eb" />,
    text: 'Analiza datos'
  },
  {
    icon: <Eye color="#6c71ff" />,
    text: 'Analiza imágenes'
  },
  {
    icon: <PencilToLine color="#cb8bd0" />,
    text: 'Ayudame a escribir'
  },
]

export default function Home() {
  return (
    <div className="bg-neutral-800/75 p-5 flex justify-center items-center">
      <div className="w-3/5 text-center space-y-7">
        <h1 className="text-3xl">¿Con qué puedo ayudarte?</h1>
        <div className="bg-neutral-700/50 rounded-3xl p-4 space-y-4">
          <input
            type="text"
            placeholder="Envía un mensaje a ChatGPT"
            className="bg-transparent w-full outline-none placeholder:text-neutral-400"
          />
          <div className="flex items-end justify-between">
            <div className="flex gap-4">
              <Paperclip height={22} width={22} />
              <Box height={22} width={22} />
              <Globe height={22} width={22} />
            </div>
            <button className="rounded-full bg-white text-black p-1 aspect-square">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 4C8.67157 4 8 4.67157 8 5.5V18.5C8 19.3284 8.67157 20 9.5 20C10.3284 20 11 19.3284 11 18.5V5.5C11 4.67157 10.3284 4 9.5 4Z" fill="currentColor"></path>
                <path d="M13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V8.5Z" fill="currentColor"></path>
                <path d="M4.5 9C3.67157 9 3 9.67157 3 10.5V13.5C3 14.3284 3.67157 15 4.5 15C5.32843 15 6 14.3284 6 13.5V10.5C6 9.67157 5.32843 9 4.5 9Z" fill="currentColor"></path>
                <path d="M19.5 9C18.6716 9 18 9.67157 18 10.5V13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5V10.5C21 9.67157 20.3284 9 19.5 9Z" fill="currentColor"></path>
              </svg>
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
