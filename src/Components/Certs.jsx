/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import GD from "./CourseraCert.pdf";
import EX from "./Excel.pdf";
import NISM from './NISM.pdf'
import WD from '../assets/WD.pdf'
import PY from '../assets/PY.pdf'
const certs = [
  {
    name: "Udemy - Advanced Agentic AI",
    certlink: "#",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Udemy_logo.svg",
    by: "Udemy",
    desc: "Comprehensive course on building autonomous AI agents and complex agentic workflows.",
  },
  {
    name: "CFI - Financial Modelling & Valuation Analyst (FMVA)",
    certlink: "#",
    img: "https://corporatefinanceinstitute.com/wp-content/themes/cfi/assets/img/cfi-logo.png",
    by: "CFI",
    desc: "Advanced training in financial modeling, valuation, and investment analysis.",
  },
  {
    name: "CFI - Business Analytics Certificate",
    certlink: "#",
    img: "https://corporatefinanceinstitute.com/wp-content/themes/cfi/assets/img/cfi-logo.png",
    by: "CFI",
    desc: "Mastering data-driven decision making and business intelligence tools.",
  },
  {
    name: "Accenture - Data Analysis Specialist",
    certlink:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_J82cdHtinaEtqsvZi_1686398607335_completion_certificate.pdf",
    img: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_J82cdHtinaEtqsvZi_1686398607335_completion_certificate.pdf",
    by: "Accenture",
    desc: "Learned about Data cleaning, Modelling, Visualization and communication to the clients.",
  },
];
const Certs = () => {
  return (
    <div>
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mb-4">
        Certifications
      </h2>
      <div className="flex flex-wrap justify-center ">
        <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>NISM</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span></span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <iframe
              alt="Guitar"
              src={NISM}
              className=" h-full w-full object-cover"
            ></iframe>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-gray-900">
                NISM Research Analyst Certification
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Learned about the financial markets, research analysis and equity report making.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://drive.google.com/file/d/1wlZuV9wZiOKHHvULvqgSIC1y78CY0DCE/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                See Certificate
              </a>
            </div>
          </div>
        </article>
        <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Google</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span></span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <iframe
              alt="Guitar"
              src={GD}
              className=" h-full w-full object-cover"
            ></iframe>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-gray-900">
                Google Data Analytics
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Learned about the various tools - R, Tableau, Power BI, Advance
                Excel - Over 200 hours - learned end to end about data analysis
                and data inspection.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://coursera.org/share/23c86dbe3eab15b0b765c2f17f0686d7"
                target="_blank"
                rel="noreferrer"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                See Certificate
              </a>
            </div>
          </div>
        </article>
        <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Mithibai College</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span></span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <iframe
              alt="Guitar"
              src={EX}
              className=" h-full w-full object-cover"
            ></iframe>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-gray-900">
                Advanced Excel
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Basic to Advanced excel training. The functions I learned -
                sumproduct, transpose, aggregate, xlookup, textjoin,
                getpivotdata, etc. - over 30 hours
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://drive.google.com/file/d/13WC_o-6lePUdKq7jiI3cu5qG9YT_p8Js/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                See Certificate
              </a>
            </div>
          </div>
        </article>

        {certs.map((item) => {
          return (
            <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>{item.by}</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span></span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <iframe
                  alt="Guitar"
                  src={item.img}
                  className=" h-full w-full object-cover"
                ></iframe>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <h3 className="font-bold uppercase text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    {item.desc}
                  </p>
                </div>
                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href={item.certlink}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    See Certificate
                  </a>
                </div>
              </div>
            </article>
          );
        })}
        <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Udemy</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span></span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <iframe
              alt="Guitar"
              src={WD}
              className=" h-full w-full object-cover"
            ></iframe>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-gray-900">
                Python Specialist
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Learned about the basic and advanced python modules and applications.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://drive.google.com/file/d/1kFWFm9ZG7PGPaBBmApagB-M3aBxy1liL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                See Certificate
              </a>
            </div>
          </div>
        </article>
        <article className="max-w-[50rem] rounded-lg m-5 flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Udemy</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span></span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <iframe
              alt="Guitar"
              src={PY}
              className=" h-full w-full object-cover"
            ></iframe>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 className="font-bold uppercase text-gray-900">
                Full stack developer certification
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Learned about the front end web design, backend design, databases and web3.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://drive.google.com/file/d/1TOu50ZD_qK7mAFy1Nuj4VbM_4nEvXJ2H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                See Certificate
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Certs;
