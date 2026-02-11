/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {
  return (
    <div>
      <h2 className="title text-3xl font-bold sm:text-4xl text-center text-white mt-[1rem] sm:mt-[1rem] mb-[2rem] sm:mb-[4rem]">
        My Education
      </h2>
      <div className="flex flex-wrap justify-center ">
        <article className="max-w-[20rem] rounded-lg m-5 border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 max-w-[20rem]">
          <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>

          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Mithibai College - Bachelor Of Management Studies
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {" "}
            <b><strong>GPA 8.45</strong> </b>
          </p>
          <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
            {" "}
            Courses - Production Management, Cost and Financial Accounts, IT in
            business management, Marketing, Financial Markets, PR, Strategic
            Management
          </p>
        </article>
        <article className="rounded-lg max-w-[20rem] m-5  border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>

          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Holy Angels Jr College - XIIth Standard - <b><strong>92%</strong> </b>
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Learned about the field of commerce and economics also the basics of
            statistical analysis
          </p>
        </article>
        <article className="rounded-lg max-w-[20rem] m-5  border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>

          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Holy Angels School - Xth Standard - <b><strong>94%</strong> </b>
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Interact Club Treasurer, Debate competition runner up
          </p>
        </article>
      </div>
    </div>
  );
};

export default Education;
