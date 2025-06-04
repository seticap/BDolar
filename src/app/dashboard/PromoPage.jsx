const PromoPage = () => {
  return (
    <>
      <div className="bg-backgroundtwo h-180 flex flex-col items-center py-10">
        {/* Titulo */}
        <div className="w-full bg-blue-950 py-4">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white">Nuestros Planes</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center py-5">
          {/* Subtítulo */}
          <p className="text-3xl font-bold text-white mb-2 mt-2">
            Tenemos un plan,
          </p>
          <p className="text-3xl font-bold text-white mb-12">
            pensamos en ti y tu futuro
          </p>
        </div>

        {/* Contenedor de tarjetas */}
        <div className="w-full px-4 ">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-0 justify-evenly items-center">
              {/* Tarjeta Trimestral */}
              <div className="group relative overflow-hidden h-[400px] w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="images/companeros-trabajo-negocios-dandose-mano-reunion-oficina-foco-hombre-negocios-1-scaled.jpg"
                  alt="PlanTrimestral"
                />

                <div className="absolute inset-0 bg-card-color bg-opacity-40 flex flex-col justify-center items-center p-6 transition-opacity duration-500 group-hover:opacity-0 rounded-lg ">
                  <h3 className="text-3xl font-bold text-white mb-2">PLAN</h3>
                  <p className="text-2xl font-semibold text-white">
                    TRIMESTRAL
                  </p>
                </div>

                {/* hover */}
                <div className="absolute inset-0 bg-black flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Beneficios Trimestrales
                  </h3>
                  <ul className="text-left space-y-5 ">
                    <li>✦ Acceso Básico a plataforma</li>
                    <li>✦ Soporte por email</li>
                    <li>✦ Actualizaciones mensuales</li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta Semestral */}
              <div className="group relative overflow-hidden h-[400px] w-[300px] bg-white rounded-2xl shadow-2xl border border-amber-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="images/ms-finance-1024x640.jpg"
                  alt="PlanTrimestral"
                />

                <div className="absolute inset-0 bg-card-color bg-opacity-40 flex flex-col justify-center items-center p-6 transition-opacity duration-500 group-hover:opacity-0 rounded-lg ">
                  <h3 className="text-3xl font-bold text-amber-300 mb-2">
                    PLAN
                  </h3>
                  <p className="text-2xl font-bold text-amber-300">SEMESTRAL</p>
                </div>

                {/* hover */}
                <div className="absolute inset-0 bg-black flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                  <h3 className="text-3xl font-bold mb-4 text-amber-500 text-center">
                    Beneficios Semestral
                  </h3>
                  <ul className="text-left text-2xl space-y-5">
                    <li>✦ Todos los beneficios trimestrales</li>
                    <li>✦ Soporte prioritario</li>
                    <li>✦ Descuentos del 15%</li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta Anual */}
              <div className="group relative overflow-hidden h-[400px] w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="images/negocios-que-funcionan-solos-y-requieren-poca-inversion-01.jpg"
                  alt="PlanTrimestral"
                />

                <div className="absolute inset-0 bg-card-color bg-opacity-40 flex flex-col justify-center items-center p-6 transition-opacity duration-500 group-hover:opacity-0 rounded-lg ">
                  <h3 className="text-3xl font-bold text-white mb-2">PLAN</h3>
                  <p className="text-2xl font-semibold text-white">ANUAL</p>
                </div>

                {/* hover */}
                <div className="absolute inset-0 bg-black flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Beneficios Anuales
                  </h3>
                  <ul className="text-left space-y-5 ">
                    <li>✦ Todos los benedicios anteriores</li>
                    <li>✦ Descuentod del 30%</li>
                    <li>✦ Asesoría personalizada</li>
                    <li>✦ Acceso VIP</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="border-b text-center mt-4"></div>
            <div className="text-center text-white font-bold text-2xl">
              SUSCRIPCIONES DÓLAR SET-FX
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPage;
