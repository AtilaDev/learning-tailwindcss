export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white px-6 shadow-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          <button className="-ml-1 rounded p-1 text-slate-500 transition-colors hover:bg-sky-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="-mr-4 flex items-center">
            <a className="text-sky-500 duration-200 hover:rotate-6" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </a>
            <div className="ml-8 hidden space-x-8 md:flex">
              <a className="px-3 py-2 text-sky-500" href="#">
                Home
              </a>
              <a
                className="px-3 py-2 text-slate-600 transition-colors hover:text-sky-500"
                href="#"
              >
                About
              </a>
              <a
                className="px-3 py-2 text-slate-600 transition-colors hover:text-sky-500"
                href="#"
              >
                Blog
              </a>
              <a
                className="px-3 py-2 text-slate-600 transition-colors hover:text-sky-500"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex">
            <button className="rounded-full text-slate-500 transition-colors hover:text-sky-500 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
            <button className="ml-4 rounded-full text-slate-500 transition-colors hover:text-sky-500 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-6 w-6 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
            </button>
          </div>
        </div>
        <div className="hidden space-y-1 border-t pb-3 pt-2 md:hidden">
          <a
            className="block rounded-md bg-sky-500 px-3 py-2 text-white"
            href="#"
          >
            Home
          </a>
          <a
            className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white"
            href="#"
          >
            About
          </a>
          <a
            className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white"
            href="#"
          >
            Blog
          </a>
          <a
            className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white"
            href="#"
          >
            Contact
          </a>
        </div>
      </header>
      <main className="mt-20 p-4">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="flex-1 space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae id similique cumque eaque ex quos odit, illum est.
                Tempore vero consequatur repudiandae recusandae delectus
                voluptatem placeat nostrum incidunt odit quasi?
              </p>
            </div>
            <div className="flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae id similique cumque eaque ex quos odit, illum est.
                Tempore vero consequatur repudiandae recusandae delectus
                voluptatem placeat nostrum incidunt odit quasi?
              </p>
            </div>
            <div className="flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae id similique cumque eaque ex quos odit, illum est.
                Tempore vero consequatur repudiandae recusandae delectus
                voluptatem placeat nostrum incidunt odit quasi?
              </p>
            </div>
            <div className="flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae id similique cumque eaque ex quos odit, illum est.
                Tempore vero consequatur repudiandae recusandae delectus
                voluptatem placeat nostrum incidunt odit quasi?
              </p>
            </div>
            <div className="pointer-events-none flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
          <article className="overflow-hidden rounded bg-white shadow">
            <div className="h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-full w-full object-cover object-center"
                src="http://unsplash.it/500/300?random&gravity=center"
                alt="algo"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold leading-tight text-slate-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>
              <p className="hidden text-slate-500 md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae id similique cumque eaque ex quos odit, illum est.
                Tempore vero consequatur repudiandae recusandae delectus
                voluptatem placeat nostrum incidunt odit quasi?
              </p>
            </div>
            <div className="flex space-x-2 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=John+Doe"
                alt="John Doe"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold leading-4 text-slate-600">
                  John Doe
                </span>
                <span className="text-sm text-slate-500">Feb 18, 2024</span>
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer className="py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 px-2 md:flex-row md:justify-between md:space-y-0">
          <div className="text-center text-sm text-slate-500">
            (R) 2024 Learning Tailwind All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <svg
                className="w-6 fill-current text-slate-600 hover:text-[#1877f2]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 fill-current text-slate-600 hover:text-[#1da1f2]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 fill-current text-slate-600 hover:text-[#e4405f]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 fill-current text-slate-600 hover:text-[#181717]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 fill-current text-slate-600 hover:text-[#25d366]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
