import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { AtSymbolIcon } from "@heroicons/react/solid";
import { ButtonMailto } from "../helpers/emailLink";

const Contact = () => {
  return (
    <div className="container grid grid-cols-12 mx-auto content-center my-10">
      <div className="col-start-3 col-span-8 flex flex-col bg-gray-200 p-10 mb-10">
        <div className="flex items-center">
          <div className="w-1/6 flex justify-center">
            <QuestionMarkCircleIcon className="w-10 h-auto mr-2" />
          </div>
          <div className="w-5/6">
            <p>¿Necesitas ayuda? Por favor visita nuestra sección de Preguntas
            frecuentes , es probable que ya hayamos respondido a tu pregunta.</p>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-8 flex flex-col bg-gray-200 p-10">
        <div className="flex items-center">
          <div className="w-1/6 flex justify-center">
            <AtSymbolIcon className="w-10 h-auto mr-2" />
          </div>
          <div className="w-5/6">
            <p>Escríbenos Para cualquier consulta o aclaración por favor envíanos
            un correo electrónico a: <ButtonMailto label="contacto@geet.com" mailto="mailto:contacto@geet.com" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
