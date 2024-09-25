"use client";

export interface Certificate {
  title: string;
  issuer: string;
  dateIssued: string;
  imageUrls: string;
  url: string;
}

const certificate: Certificate[] = [
  {
    title: "Google Professional Data Analyst",
    issuer: "Coursera",
    dateIssued: "Aug 20, 2024",
    imageUrls: "/images/coursera-badge.png",
    url: "https://www.credly.com/badges/cd3f88bb-64bc-4e7c-9282-1221b32a8e2c/linked_in_profile",
  },
  {
    title: "Database Administrator",
    issuer: "BNSP",
    dateIssued: "Jul 9, 2024",
    imageUrls: "/images/coursera-badge.png",
    url: "/docs/dba-certificate.pdf",
  },
  {
    title: "The Introduction of the Personal Data Protection Law (UU PDP)",
    issuer: "Pijar Mahir",
    dateIssued: "May 17, 2024",
    imageUrls: "/images/coursera-badge.png",
    url: "/docs/uu-pdp-certificate.pdf",
  },
  {
    title: "Indonesia Scrum Master I",
    issuer: "Ekipa",
    dateIssued: "Apr 10, 2021",
    imageUrls: "/images/coursera-badge.png",
    url: "/docs/ism-i-certificate.pdf",
  },
  {
    title: "Indonesia Scrum Master II",
    issuer: "Ekipa",
    dateIssued: "Jun 26, 2021",
    imageUrls: "/images/coursera-badge.png",
    url: "/docs/ism-ii-certificate.pdf",
  },
];

export default function Certificate() {

  return (
    <section
      id="certificate"
      className="mb-16 pt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-40"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 left-0 p-4 w-screen bg-background/75 backdrop-blur z-50 lg:hidden">
        <h1 className="text-xl font-bold text-yellow-900">Certificate</h1>
      </div>
      <div className="px-4">
        <ul className="group/list">
          {certificate.map((certificate, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid items-center transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_0_1px_1px_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 text-xs font-semibold uppercase tracking-wide text-textPrimary sm:col-span-2"
                  aria-label={certificate.dateIssued}
                >
                  {certificate.dateIssued}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-textSecondary">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-textPrimary hover:text-yellow-900 focus-visible:text-yellow-900 group/link text-base"
                        href={certificate.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${certificate.title}, Accessibility at Medium (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {certificate.title}{" "}
                          <span className="inline-block">
                            {"· "+certificate.issuer}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* {selectedCertificate && (
        <ProjectModal certificate={selectedCertificate} onClose={handleCloseModal} />
      )} */}
    </section>
  );
}
