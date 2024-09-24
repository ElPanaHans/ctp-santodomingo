import React from "react";
import CyS from "../../../JSON/Nocturno/CyS.json";

export default function CySModalN({ estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <section className=" rounded-xl h-[200vh] w-[100%] md:h-[100vh] bg-[rgba(0,0,0,.5)] absolute left-0 right-0">
          <div className="text-md h-[180vh] w-[90vw] md:h-[90vh] md:w-[90vw] m-auto bg-White absolute top-0 left-0 right-0 bottom-0 rounded-xl p-12 md:text-2xl">
            <h1 className=" text-3xl md:text-4xl text-center p-2 md:p-4 text-blue-diabg-Blue-Dianne border-white border-2 font-bold">
              {CyS.title}
            </h1>
            <div className="flex flex-col items-center justify-center lg:grid grid-cols-2 md:text-lg">
              <div>
                <table className="md:m-4 rounded-xl overflow-hidden">
                  <tr className="bg-Blue-Dianne">
                    <td className="text-White text-center md:py-2 md:px-12">
                      Sub-Área
                    </td>
                    <td className="text-White text-center py-1 px-6 md:py-2 md:px-12">X</td>
                    <td className="text-White text-center md:py-2 md:px-12">XI</td>
                    <td className="text-White text-center md:py-2 md:px-12">XII</td>
                  </tr>
                  <tbody className="text-center">
                    {CyS.Subarea.map((subarea, index) => (
                      <tr key={index}>
                        <td className="bg-Blue-Dianne border-white border-2 text-White md:px-6 py-1 md:p-2">
                        {subarea.TDIAALCySDRySO ||
                            subarea.FDP ||
                            subarea.AySALC ||
                            subarea.EeIAALCySDRySO ||
                            subarea.CySAR||
                            subarea.SALTDI||
                            subarea.EOTNCaOS}
                        </td>
                        <td className="bg-Blue-Dianne border-white border-2 text-White px-5 md:px-6 py-1 md:p-2">
                          {subarea.Horas.Decimo}
                        </td>
                        <td className="bg-Blue-Dianne border-white border-2 text-White px-5 md:px-6 py-1 md:p-2">
                          {subarea.Horas.Undecimo}
                        </td>
                        <td className="bg-Blue-Dianne border-white border-2 text-White px-5 md:px-6 py-1 md:p-2">
                          {subarea.Horas.Duodecimo}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tr className="text-center bg-Blue-Dianne text-white">
                    <td className="md:py-2 md:px-12">Horas totales</td>
                    <td className="md:py-2 md:px-12">{CyS.Total.Decimo} </td>
                    <td className="md:py-2 md:px-12">
                      {CyS.Total.Undecimo}{" "}
                    </td>
                    <td className="md:py-2 md:px-12">
                      {CyS.Total.Duodecimo}{" "}
                    </td>
                  </tr>
                </table>
              </div>

              <section className="flex flex-col gap-8 md:flex-row md:justify-evenly">
                <section>
                  <h2 className="font-bold text-blue-Diabg-Blue-Dianne text-2xl">
                    Posibles Puestos de Trabajo
                  </h2>
                  <ul>
                    {CyS.posiblesPuestos.map((puesto, index) => (
                      <li
                        className="bg-Blue-Dianne text-white rounded-xl px-6 py-1 md:p-2 my-4"
                        key={index}
                      >
                        {puesto}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-bold text-blue-Diabg-Blue-Dianne text-2xl">Posibles Empresas</h2>
                  <ul>
                    {CyS.posiblesEmpresas.map((empresa, index) => (
                      <li
                        className="bg-Blue-Dianne text-white rounded-xl px-6 py-1 md:p-2 my-4"
                        key={index}
                      >
                        {empresa}
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
              <i
                onClick={() => cambiarEstado(false)}
                class="fa-sharp fa-solid fa-xmark  text-4xl md:text-5xl absolute  top-1 right-1 md:top-4 md:right-12 hover:bg-Blue-Dianne hover:text-White px-6 py-1 md:p-2 rounded-full cursor-pointer"
              ></i>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
