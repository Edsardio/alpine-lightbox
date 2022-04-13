export default function (Alpine) {
    document.addEventListener('alpine:init', () => {
        let body = document.querySelector('body');
        body.innerHTML = `<div style="display: none;" x-bind:class="$store.lightbox.show ? '' : 'hidden'" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" x-show="$store.lightbox.show">
                      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <div x-on:click="$store.lightbox.toggle()" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"
                              x-transition:enter="ease-out duration-300"
                              x-transition:enter-start="opacity-0"
                              x-transition:enter-end="opacity-100"
                              x-transition:leave="ease-in duration-200"
                              x-transition:leave-start="opacity-100"
                              x-transition:leave-end="opacity-0"></div>
                          <!-- This element is to trick the browser into centering the modal contents. -->
                          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                          <div class="relative inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle max-w-7xl sm:w-full sm:p-6"
                              x-transition:enter="transition ease-out duration-300"
                              x-transition:enter-start="transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              x-transition:enter-end="transform opacity-100 translate-y-0 sm:scale-100"
                              x-transition:leave="transition ease-in duration-200"
                              x-transition:leave-start="transform opacity-100 translate-y-0 sm:scale-100"
                              x-transition:leave-end="transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                              <div class="hidden sm:block absolute top-0 right-0">
                                  <button x-on:click="$store.lightbox.toggle()" type="button" class="rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-none">
                                      <span class="sr-only">Close</span>
                                      <!-- Heroicon name: outline/x -->
                                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                  </button>
                              </div>
                              <img class="shadow-xl" x-bind:src="$store.lightbox.src">
                          </div>
                      </div>
                  </div>
        ` + body.innerHTML;

        Alpine.store('lightbox', {
            show: false,
            src: null,
            toggle() {
                this.show = !this.show;
            }
        });

        Alpine.directive('lightbox', (el, { expression }) => {
            el.addEventListener('click', () => {
                Alpine.store('lightbox').toggle();
                Alpine.store('lightbox').src = expression;
            });
        });
    });
}
