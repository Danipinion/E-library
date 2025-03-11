const sidebarLogo = document.createElement("aside");
sidebarLogo.id = "logo-sidebar";
sidebarLogo.className =
  "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#AD7866] border-r border-gray-200 sm:translate-x-0";
sidebarLogo.innerHTML = `
      <div class="h-full px-3 py-4 overflow-y-auto bg-[#AD7866] text-white">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/pages/dashboard.html"
              class="flex items-center p-2 text-white rounded-lg  hover:text-gray-900 hover:bg-gray-100  group"
            >
              <svg
                class="w-5 h-5 text-white transition duration-75  group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-white hover:text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                class="shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Peminjaman</span
              >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="/pages/pengajuan.html"
                  class="flex items-center p-2 text-white hover:text-gray-900 rounded-lghover:bg-gray-100  group"
                >
                  <svg
                    class="shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-900 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="flex-1 ms-3 whitespace-nowrap">Pengajuan</span>
                  <span
                    class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full "
                    >3</span
                  >
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg hover:bg-gray-100  group"
                >
                  <svg
                    class="shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="flex-1 ms-3 whitespace-nowrap"
                    >Perpanjangan</span
                  >
                  <span
                    class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >3</span
                  >
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
        >
          <li>
            <a
              href="/pages/my-books.html"
              class="flex items-center p-2 text-white hover:text-gray-900 rounded-lg hover:bg-gray-100  group"
            >
              <svg
                class="w-5 h-5 text-white transition duration-75  group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">My Books</span>
            </a>
          </li>
          <li>
            <a
              href="/pages/pinjam-buku.html"
              class="flex items-center p-2 text-white hover:text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group"
            >
              <svg
                class="shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path
                  d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"
                />
              </svg>
              <span class="ms-3">Pinjam Buku</span>
            </a>
          </li>
        </ul>
      </div>
  `;

const sidebarCustom = document.getElementById("sidebar-custom");
sidebarCustom.append(sidebarLogo);
