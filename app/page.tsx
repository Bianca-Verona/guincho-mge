import Image from "next/image";

const WHATSAPP =
  "https://wa.me/5511983352997?text=Ol%C3%A1!%20Preciso%20de%20um%20guincho.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.guinchomge.com.br/#business",

  name: "Guincho M.G.E",

  description:
    "Guincho 24 horas em Itaquaquecetuba - SP para carros, motos e remoção de veículos.",

  telephone: "+55 11 98335-2997",

  url: "https://www.guinchomge.com.br",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Itaquaquecetuba",
    addressRegion: "SP",
    addressCountry: "BR",
  },

  areaServed: {
    "@type": "City",
    name: "Itaquaquecetuba",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  serviceType: [
    "Guincho para carros",
    "Guincho para motos",
    "Remoção de veículos",
  ],

  image: "https://www.guinchomge.com.br/images/logo-mge.png",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* ================= SEO LOCAL ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ================= HEADER ================= */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">

          <a
            href="#inicio"
            className="relative h-12 w-32 shrink-0 sm:h-16 sm:w-44"
          >
            <Image
              src="/images/logo-mge.png"
              alt="Guincho M.G.E"
              fill
              priority
              className="object-contain object-left"
            />
          </a>


          <nav className="hidden items-center gap-10 text-sm font-semibold text-zinc-300 md:flex">

            <a
              href="#inicio"
              className="transition hover:text-white"
            >
              Início
            </a>

            <a
              href="#atendimento"
              className="transition hover:text-white"
            >
              Atendimento
            </a>

            <a
              href="#solicitar"
              className="transition hover:text-white"
            >
              Solicitar guincho
            </a>

            <a
              href="#contato"
              className="transition hover:text-white"
            >
              Contato
            </a>

          </nav>


          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-[#ed1c24] px-3 py-3 text-[10px] font-extrabold tracking-wide transition hover:bg-red-600 sm:px-5 sm:text-xs"
          >
            CHAMAR AGORA
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        {/* Fundo */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,#242424_0%,#101010_25%,#050505_62%)]" />


        {/* Linhas decorativas */}

        <div className="absolute inset-0 opacity-[0.06]">

          <div className="absolute -left-20 top-32 h-px w-[700px] rotate-[25deg] bg-white" />

          <div className="absolute -left-20 top-52 h-px w-[700px] rotate-[25deg] bg-white" />

          <div className="absolute right-[-100px] top-40 h-px w-[700px] rotate-[-25deg] bg-[#ed1c24]" />

          <div className="absolute right-[-100px] top-60 h-px w-[700px] rotate-[-25deg] bg-[#ed1c24]" />

        </div>


        {/* 24H gigante */}

        <div className="pointer-events-none absolute right-[-30px] top-24 select-none font-black leading-none text-transparent opacity-20 [-webkit-text-stroke:2px_#5f1013]">

          <span className="text-[180px] sm:text-[240px] lg:text-[380px]">
            24H
          </span>

        </div>


        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:px-10 lg:pt-24">

          {/* ================= HERO TEXTO ================= */}

          <div className="min-w-0">

            <p className="mb-4 text-xs font-extrabold tracking-[0.35em] text-[#ed1c24] sm:text-sm sm:tracking-[0.45em]">
              ATENDIMENTO 24 HORAS
            </p>


            <h1 className="min-w-0 overflow-hidden font-black uppercase leading-[0.82] tracking-[-0.04em]">

              <span className="block whitespace-nowrap text-[58px] leading-[0.9] sm:text-[100px] lg:text-[125px]">
                GUINCHO
              </span>

              <span className="block whitespace-nowrap text-[58px] leading-[0.9] text-[#ed1c24] sm:text-[100px] lg:text-[125px]">
                M.G.E
              </span>

            </h1>


            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Seu veículo parou? A gente busca para você, com atendimento
              rápido, segurança e transporte responsável.
            </p>


            {/* Serviços */}

            <div className="mt-6 flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-zinc-200 sm:text-sm">

              <span>
                🚗 Guincho para carros
              </span>

              <span>
                🏍️ Guincho para motos
              </span>

              <span>
                🚨 Remoção de veículo
              </span>

            </div>


            {/* Botões */}

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md bg-[#ed1c24] px-6 py-4 text-xs font-extrabold transition hover:-translate-y-1 hover:bg-red-600 sm:px-7 sm:text-sm"
              >
                SOLICITAR GUINCHO

                <span className="text-lg">
                  →
                </span>

              </a>


              <a
                href="tel:+5511983352997"
                className="flex items-center gap-3 rounded-md border border-zinc-600 bg-black/30 px-6 py-4 text-xs font-extrabold transition hover:border-white hover:bg-white hover:text-black sm:px-7 sm:text-sm"
              >
                <span>
                  ☎
                </span>

                LIGAR AGORA
              </a>

            </div>


            {/* Diferenciais */}

            <div className="mt-10 flex flex-wrap gap-6 border-t border-zinc-800 pt-6 sm:gap-8">

              <div>

                <strong className="block text-xs font-extrabold sm:text-sm">
                  24 HORAS
                </strong>

                <span className="text-[10px] text-zinc-500 sm:text-xs">
                  Atendimento
                </span>

              </div>


              <div>

                <strong className="block text-xs font-extrabold sm:text-sm">
                  RÁPIDO
                </strong>

                <span className="text-[10px] text-zinc-500 sm:text-xs">
                  Resposta
                </span>

              </div>


              <div>

                <strong className="block text-xs font-extrabold sm:text-sm">
                  SEGURO
                </strong>

                <span className="text-[10px] text-zinc-500 sm:text-xs">
                  Transporte
                </span>

              </div>

            </div>

          </div>


          {/* ================= HERO LOGO ================= */}

          <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[380px] lg:min-h-[560px]">

            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#ed1c24]/10 blur-3xl sm:h-[330px] sm:w-[330px] lg:h-[500px] lg:w-[500px]" />

            <div className="relative w-full max-w-[620px]">

              <Image
                src="/images/logo-mge.png"
                alt="Guincho M.G.E em Itaquaquecetuba"
                width={1000}
                height={1000}
                priority
                className="relative z-10 w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]"
              />

              <div className="absolute bottom-4 left-1/2 h-5 w-[70%] -translate-x-1/2 rounded-full bg-black/80 blur-xl" />

            </div>

          </div>

        </div>


        {/* Indicador */}

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[10px] font-bold tracking-[0.4em] text-zinc-600 md:block">
          ROLE PARA CONTINUAR
        </div>

      </section>



      {/* ================= ATENDIMENTO ================= */}

      <section
        id="atendimento"
        className="relative overflow-hidden border-t border-zinc-900 bg-[#080808] py-20 sm:py-28"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">

          {/* Texto */}

          <div className="relative z-10">

            <p className="text-[10px] font-extrabold tracking-[0.4em] text-[#ed1c24] sm:text-xs sm:tracking-[0.45em]">
              ATENDIMENTO RÁPIDO E SEGURO
            </p>


            <h2 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-7xl">

              Precisou de
              <br />

              <span className="text-white">
                guincho?
              </span>

              <br />

              <span className="text-[#ed1c24]">
                Chame a M.G.E.
              </span>

            </h2>


            <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              Seu veículo parou no caminho? Conte com a M.G.E. para fazer a
              remoção e o transporte com agilidade, segurança e atendimento
              24 horas.
            </p>


            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-zinc-200 sm:text-sm">

              <span className="border-l-2 border-[#ed1c24] pl-3">
                Guincho para carros
              </span>

              <span className="border-l-2 border-[#ed1c24] pl-3">
                Guincho para motos
              </span>

              <span className="border-l-2 border-[#ed1c24] pl-3">
                Remoção de veículo
              </span>

            </div>


            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#ed1c24] px-7 py-4 text-xs font-extrabold transition hover:-translate-y-1 hover:bg-red-600 sm:text-sm"
            >
              SOLICITAR GUINCHO

              <span className="text-lg">
                →
              </span>
            </a>

          </div>



          {/* Visual */}

          <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[400px]">

            <div className="absolute h-[260px] w-[260px] rounded-full bg-[#ed1c24]/10 blur-[100px] sm:h-[300px] sm:w-[300px]" />

            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#ed1c24]/20 sm:h-[330px] sm:w-[330px] md:h-[440px] md:w-[440px]" />

            <div className="absolute h-[220px] w-[220px] rounded-full border border-zinc-800 sm:h-[260px] sm:w-[260px] md:h-[360px] md:w-[360px]" />


            <div className="relative z-10 text-center">

              <span className="block font-black leading-none text-white/5 text-[110px] sm:text-[150px] md:text-[210px]">
                24H
              </span>


              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <span className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl">
                  M.G.E
                </span>

                <span className="mt-2 text-[9px] font-bold tracking-[0.4em] text-[#ed1c24] sm:text-xs sm:tracking-[0.5em]">
                  GUINCHO
                </span>

              </div>

            </div>


            <div className="absolute right-0 top-1/2 hidden h-px w-32 bg-gradient-to-r from-transparent to-[#ed1c24] sm:block" />

            <div className="absolute left-0 top-1/2 hidden h-px w-32 bg-gradient-to-l from-transparent to-[#ed1c24] sm:block" />

          </div>

        </div>

      </section>



      {/* ================= SOLICITAÇÃO ================= */}

      <section
        id="solicitar"
        className="border-t border-zinc-900 bg-[#050505] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <p className="text-[10px] font-extrabold tracking-[0.4em] text-[#ed1c24] sm:text-xs sm:tracking-[0.45em]">
            SOLICITE SEU GUINCHO
          </p>


          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">

            Fale com a
            <br />

            <span className="text-[#ed1c24]">
              M.G.E.
            </span>

          </h2>


          <div className="mt-10 max-w-2xl">

            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              Para solicitar atendimento, entre em contato diretamente pelo
              WhatsApp. Informe sua localização, o tipo de veículo e o destino.
            </p>


            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ed1c24] px-7 py-4 text-xs font-extrabold transition hover:-translate-y-1 hover:bg-red-600 sm:px-8 sm:text-sm"
            >
              CHAMAR PELO WHATSAPP

              <span className="text-lg">
                →
              </span>

            </a>

          </div>

        </div>

      </section>



      {/* ================= CONTATO ================= */}

      <section
        id="contato"
        className="border-t border-red-800 bg-[#ed1c24] py-12 sm:py-14"
      >

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">

          <div>

            <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Precisou?
              <br />
              Chama o guincho.
            </h2>

            <p className="mt-2 text-xs text-red-100 sm:text-sm">
              Atendimento 24 horas pelo WhatsApp.
            </p>

          </div>


          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black px-6 py-4 text-xs font-extrabold transition hover:bg-zinc-900 sm:px-7 sm:text-sm"
          >
            WHATSAPP · 11 98335-2997
          </a>

        </div>

      </section>



      {/* ================= FOOTER ================= */}

      <footer className="bg-black py-7">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-[10px] text-zinc-600 sm:px-6 sm:text-xs md:flex-row md:items-center md:justify-between lg:px-10">

          <span>
            © 2026 Guincho M.G.E.
          </span>

          <span>
            Atendimento em Itaquaquecetuba - SP e região
          </span>

        </div>

      </footer>

    </main>
  );
}