<template>
  <div
    id="container"
    class="flex flex-col flex-grow subpixel-antialiased overscroll-none"
  >
    <div class="flex flex-row flex-grow">
      <div
        class="hidden p-5 bg-white border-r border-gray-200 w-96 sm:block dark:border-carbone-700 dark:bg-carbone-800"
      >
        <div class="flex flex-col space-y-4" v-if="!itemSelected">
          <!-- Editor canvas -->

          <!-- Testi -->

          <p class="dark:text-carbone-100 ">Testi</p>
          <div
            v-bind:id="index"
            v-for="(text, index) in texts"
            v-bind:key="index"
            class="flex flex-row items-center justify-between"
          >
            <div
              v-on:click="selectObject(index)"
              class="flex-grow px-4 py-3 mr-2 text-gray-800 truncate transition-all duration-300 transform scale-100 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer dark:border-gray-700 dark:text-gray-100 hover:scale-95 dark:bg-carbone-700 focus:outline-none"
            >
              <h1>{{ text.text }}</h1>
            </div>
            <div
              v-on:click="deleteObject(index)"
              class="px-4 py-3 text-gray-800 transition-all duration-300 transform scale-100 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:text-red-500 dark:text-gray-100 hover:scale-95 dark:hover:bg-red-900 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
          </div>
          <button
            v-on:click="createText"
            class="flex flex-row items-center justify-center w-full px-4 py-3 text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-carbone-800 dark:border-gray-700 dark:text-carbone-300 focus:outline-none"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Aggiungi testo</span>
          </button>

          <!-- Forme -->

          <p class="dark:text-carbone-100">Forme</p>
          <div
            v-bind:id="'shape' + index"
            v-for="(shape, index) in shapes"
            v-bind:key="'shape' + index"
            class="flex flex-row items-center justify-between"
          >
            <div
              v-on:click="selectObject(index)"
              class="flex-grow px-4 py-3 mr-2 text-gray-800 truncate transition-all duration-300 transform scale-100 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer dark:bg-carbone-800 dark:border-gray-700 dark:text-gray-100 hover:scale-95dark:bg-carbone-700 focus:outline-none"
            >
              <h1>{{ "Shape " + index }}</h1>
            </div>
            <div
              v-on:click="deleteShape(index)"
              class="px-4 py-3 text-gray-800 transition-all duration-300 transform scale-100 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:text-red-500 dark:text-gray-100 hover:scale-95 dark:hover:bg-red-900 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
          </div>
          <button
            v-on:click="createShapes"
            class="flex flex-row items-center justify-center w-full px-4 py-3 text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-carbone-300 focus:outline-none"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Aggiungi forma</span>
          </button>

          <!-- Generali -->

          <p class="dark:text-carbone-100">Generali</p>
          <div class="flex flex-row space-x-2">
            <input
              id="themeColorInput"
              v-on:change="changeThemeColor"
              type="text"
              class="w-1/2 px-4 py-3 text-gray-800 transition duration-200 bg-white border border-gray-200 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 ring-yellow-500 ring-opacity-30 dark:text-gray-100 dark:placeholder-carbone-400 dark:bg-carbone-700 focus:outline-none"
              placeholder="Colore tema"
            />
            <input
              type="text"
              class="w-1/2 px-4 py-3 text-gray-800 transition duration-200 bg-white border border-gray-200 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 ring-yellow-500 ring-opacity-30 dark:text-gray-100 dark:placeholder-carbone-400 dark:bg-carbone-700 focus:outline-none"
              placeholder="Scurezza tema"
            />
          </div>

          <div v-if="error" class="p-5 m-5 alert alert-error">
            <div class="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-6 h-6 mx-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                ></path>
              </svg>
              <label>{{ error_text }}</label>
            </div>
          </div>

          <!-- Sfondo -->

          <p class="dark:text-carbone-100">Sfondo</p>
          <div class="flex flex-row items-center">
            <input
              v-model="backgroundImage"
              v-on:change="changeBackgroundImage"
              type="text"
              class="justify-between w-5/6 px-4 py-3 mr-2 text-gray-800 transition duration-200 bg-white border border-gray-200 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 ring-yellow-500 ring-opacity-30 dark:text-gray-100 dark:placeholder-carbone-400 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
              placeholder="Link immagine di sfondo"
            />
            <button
              @click="toggleImageLock"
              class="w-1/6 py-3 mx-auto text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm x-4 dark:text-gray-100 dark:placeholder-carbone-400 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                v-if="backgroundImageLocked"
                class="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              <svg
                v-if="!backgroundImageLocked"
                class="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                ></path>
              </svg>
            </button>
          </div>

          <!-- <button v-on:click="saveImage">download</button> -->
        </div>

        <!-- Editor del testo -->

        <div
          v-if="itemSelected && typeSelected == 0"
          class="flex flex-col space-y-4 dark:text-carbone-100"
        >
          <!-- Testo  -->

          <p class="dark:text-carbone-100">Testo</p>
          <textarea
            class="px-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-lg dark:text-gray-100 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
            type="text"
            name="text"
            id="text"
            v-on:change="changeText('text')"
            v-bind:value="selectedText.text"
          ></textarea>

          <!-- Colore testo  -->
          <p class="dark:text-carbone-100">Font</p>
          <div class="flex flex-row items-center space-x-2">
            <select
              v-on:change="changeText('font')"
              name="font-type"
              class="w-1/2 px-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-lg dark:text-gray-100 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
              id="fontSelect"
            >
              <option value="" disabled selected>Seleziona font</option>
              <option v-for="font in fonts" v-bind:key="font">{{
                font
              }}</option>
            </select>
            <select
              v-on:change="changeText('style')"
              name="font-type"
              class="w-1/2 px-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-lg dark:text-gray-100 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
              id="styleSelect"
            >
              <option value="" disabled selected>Seleziona stile</option>
              <option v-for="type in fontType" v-bind:key="type">{{
                type
              }}</option>
            </select>
          </div>
          <div
            class="flex flex-row justify-around space-x-4 border border-gray-200 rounded-lg dark:border-carbone-600 dark:bg-carbone-700"
          >
            <button
              class="px-4 py-3 text-gray-800 bg-white dark:text-gray-100 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </button>
            <button
              class="px-4 py-3 text-gray-800 bg-white dark:text-gray-100 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <button
              class="px-4 py-3 text-gray-800 bg-white dark:text-gray-100 dark:bg-carbone-700 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <p class="dark:text-carbone-100">Colore</p>
          <input
            class="px-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-lg dark:text-gray-100 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
            type="text"
            name="color"
            id="text-color"
            v-bind:value="selectedText.fill"
          />
        </div>

        <div
          v-if="itemSelected && typeSelected == 1"
          class="flex flex-col space-y-4 dark:text-carbone-100"
        >
          <p class="dark:text-carbone-100">Colore</p>
          <input
            class="px-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-lg dark:text-gray-100 dark:border-carbone-600 dark:bg-carbone-700 focus:outline-none"
            type="text"
            name="color"
            id="text-color"
            v-bind:value="selectedShape.fill"
          />
        </div>
      </div>
      <div
        class="flex items-center flex-grow mx-auto bg-gray-100 dark:bg-carbone-900"
      >
        <canvas
          id="image"
          class="mx-auto rounded-lg"
          width="500"
          height="500"
        ></canvas>
        <img
          src="overlap.svg"
          crossorigin="anonymous"
          id="logo_overlap"
          class="hidden"
        />
      </div>
    </div>
    <ul
      class="flex flex-row items-center justify-around px-3 bg-white border-t shadow-lg sm:hidden dark:text-gray-100 h-14 menu dark:bg-carbone-800 border-carbone-700"
    >
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
    <p class="hidden montserrat">test</p>
    <p class="hidden lato">test</p>
  </div>
</template>
<style scoped>
html {
  overflow: hidden;
}
.paper-dark {
  background-color: #f3f4f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.paper-light {
  background-color: #f3f4f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
<script>
import { fabric } from "fabric";

var canvas;

function isHTMLColor(str) {
  var s = new Option().style;
  s.color = str;
  return s.color == str;
}

function isHEXColor(str) {
  return str.match(/^#[a-f0-9]{6}$/i) !== null;
}

export default {
  name: "Editor",
  data: function() {
    return {
      texts: [],
      shapes: [],
      itemSelected: false,
      typeSelected: 0,
      selectedText: null,
      selectedTextIndex: null,
      selectedShape: null,
      selectedShapeIndex: null,
      error: false,
      error_text: "",
      indexItem: 0,
      backgroundImage:
        "https://images.wired.it/wp-content/uploads/2021/02/15111044/GettyImages-1231136309.jpg",
      backgroundImageLocked: true,
      fonts: ["Montserrat", "Lato", "Helvetica"],
      fontType: ["normal", "italic"],
      zoomLevel: 0,
      zoomLevelMin: 0,
      zoomLevelMax: 2,
    };
  },

  /* -------------------------------------------------------------------------- */
  /*                           Operazioni preliminari                           */
  /* -------------------------------------------------------------------------- */

  mounted() {
    var app = this;

    /* ------------------- Imposto canvas e il suo background ------------------- */

    canvas = new fabric.Canvas("image", { preserveObjectStacking: true });
    canvas.backgroundColor = "rgba(0,0,0,1)";

    fabric.Canvas.prototype.getItemByName = function(name) {
      var object = null,
        objects = this.getObjects();

      for (var i = 0, len = this.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
          object = objects[i];
          break;
        }
      }
      return object;
    };

    fabric.Image.fromURL(this.backgroundImage, function(img) {
      var background = img.set({
        left: 0,
        top: 0,
        selectable: false,
        evented: false,
        crossOrigin: "Anonymous",
      });
      background.name = "background";
      canvas.add(background);
      canvas.sendToBack(background);
    });

    /* ----------------------------- Gradiente nero ----------------------------- */

    var gradient_rectangle = new fabric.Rect({
      left: 0,
      right: 0,
      bottom: 0,
      fill: "red",
      height: canvas.height,
      width: canvas.width,
      selectable: false,
      evented: false,
    });
    var gradient = new fabric.Gradient({
      type: "linear",
      gradientUnits: "pixels", // or 'percentage'
      coords: { x1: 0, y1: 0, x2: 0, y2: gradient_rectangle.height },
      colorStops: [
        { offset: 0, color: "RGBA(0,0,0,0.4)" },
        { offset: 1, color: "RGBA(0,0,0,0.8)" },
      ],
    });
    gradient_rectangle.set("fill", gradient);
    canvas.add(gradient_rectangle);

    /* ----------------------------- Loghi e social ----------------------------- */

    var bottom_rectangle = new fabric.Rect({
      absolutePositioned: true,
      top: canvas.height - 38,
      fill: "#920E7B",
      height: 38,
      width: canvas.width,
      selectable: false,
      evented: false,
    });
    bottom_rectangle.toObject = (function(toObject) {
      return function() {
        return fabric.util.object.extend(toObject.call(this), {
          name: this.name,
        });
      };
    })(bottom_rectangle.toObject);

    bottom_rectangle.name = "bottom_rectangle";
    canvas.add(bottom_rectangle);

    var image_dom = document.getElementById("logo_overlap");
    var image = new fabric.Image(image_dom, {
      selectable: false,
      evented: false,
      top: 0,
      left: 0,
      scaleX: canvas.width / image_dom.width,
      scaleY: canvas.height / image_dom.height,
    });
    canvas.add(image).renderAll();

    /* -------------------------- Reattività del canvas ------------------------- */

    canvas.on({
      "selection:created": function(e) {
        if (e.target.name != "background") {
          if (e.target.name == "shape") {
            app.selectedShape = e.target;
            app.selectedShapeIndex = canvas.getObjects().indexOf(e.target);
            app.itemSelected = true;
            app.typeSelected = 1;
          } else {
            app.selectedText = e.target;
            app.selectedTextIndex = canvas.getObjects().indexOf(e.target);
            app.itemSelected = true;
            app.typeSelected = 0;
          }
        }
        console.log(app.typeSelected);
      },
    });
    canvas.on("selection:cleared", function() {
      app.selectedText = null;
      app.itemSelected = false;
    });
    canvas.on("mouse:wheel", function(options) {
      console.log("wheel");
      var delta = options.e.wheelDelta;
      if (delta != 0) {
        var pointer = canvas.getPointer(options.e, true);
        var point = new fabric.Point(pointer.x, pointer.y);
        //canvas.setHeight(canvas.getHeight() * app.zoomLevel + 1);
        //canvas.setWidth(canvas.getWidth() * app.zoomLevel + 1);
        if (delta > 0) {
          app.zoomIn(point);
        } else if (delta < 0) {
          app.zoomOut(point);
        }
      }
    });
  },

  /* -------------------------------------------------------------------------- */
  /*                                   Metodi                                   */
  /* -------------------------------------------------------------------------- */

  methods: {
    createText() {
      var text = new fabric.Text("Lorem", {
        //fontWeight: "normal",
        //fontStyle: "italic",
        fontFamily: "Montserrat",
        fill: "white",
        shadow: "rgba(0,0,0,0.2) 0 0 5px",
      });
      text.name = "text";
      this.texts.push(text);
      canvas.add(text);
    },
    createShapes() {
      var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: "red",
        width: 20,
        height: 20,
      });
      rect.name = "shape";
      this.shapes.push(rect);
      canvas.add(rect);
    },
    changeText(type) {
      var object = canvas.getObjects()[this.selectedTextIndex];
      var input_text;
      switch (type) {
        case "text":
          input_text = document.getElementById("text").value;
          object.set("text", input_text);
          break;
        case "font":
          input_text = document.getElementById("fontSelect").value;
          object.set("fontFamily", input_text);
          canvas.renderAll();
          break;
        case "style":
          input_text = document.getElementById("styleSelect").value;
          object.set("fontStyle", input_text);
          canvas.renderAll();
      }
    },
    deleteObject(index) {
      var canvas_index = canvas.getObjects().indexOf(this.texts[index]);
      canvas.remove(canvas.getObjects()[canvas_index]);
      canvas.renderAll();
      this.texts.splice(index, 1);
    },
    deleteShape(index) {
      var canvas_index = canvas.getObjects().indexOf(this.shapes[index]);
      canvas.remove(canvas.getObjects()[canvas_index]);
      canvas.renderAll();
      this.shapes.splice(index, 1);
    },
    selectObject(index) {
      var canvas_index = canvas.getObjects().indexOf(this.texts[index]);
      canvas.setActiveObject(canvas.getObjects()[canvas_index]);
      canvas.renderAll();
      console.log(canvas.getObjects()[canvas_index]);
      this.itemSelected = true;
      this.selectedText = this.texts[index];
    },

    showError(text) {
      this.error_text = text;
      this.error = true;
      //setTimeout(this.hideError(), 3000);
    },
    hideError() {
      this.error = false;
    },

    changeThemeColor() {
      var input_text = document.getElementById("themeColorInput").value;
      if (isHTMLColor(input_text) || isHEXColor(input_text)) {
        canvas.getItemByName("bottom_rectangle").set("fill", input_text);
        canvas.renderAll();
        this.hideError();
      } else {
        this.showError("Colore non valido!");
      }
    },
    toggleImageLock() {
      this.backgroundImageLocked = !this.backgroundImageLocked;
      canvas
        .getItemByName("background")
        .set("selectable", !this.backgroundImageLocked)
        .set("evented", !this.backgroundImageLocked);
    },

    changeBackgroundImage() {
      canvas.remove(canvas.getItemByName("background"));
      fabric.Image.fromURL(this.backgroundImage, function(img) {
        var background = img.set({
          left: 0,
          top: 0,
          selectable: false,
          evented: false,
        });
        background.name = "background";
        canvas.add(background);
        canvas.sendToBack(background);
      });
    },
    zoomIn(point) {
      if (this.zoomLevel < this.zoomLevelMax) {
        this.zoomLevel += 0.05;
        canvas.zoomToPoint(point, Math.pow(2, this.zoomLevel));
        this.keepPositionInBounds(canvas);
      }
    },

    zoomOut(point) {
      if (this.zoomLevel > this.zoomLevelMin) {
        this.zoomLevel -= 0.05;
        canvas.zoomToPoint(point, Math.pow(2, this.zoomLevel));
        this.keepPositionInBounds(canvas);
      }
    },
    keepPositionInBounds() {
      var zoom = canvas.getZoom();
      var xMin = ((2 - zoom) * canvas.getWidth()) / 2;
      var xMax = (zoom * canvas.getWidth()) / 2;
      var yMin = ((2 - zoom) * canvas.getHeight()) / 2;
      var yMax = (zoom * canvas.getHeight()) / 2;

      var point = new fabric.Point(
        canvas.getWidth() / 2,
        canvas.getHeight() / 2
      );
      var center = fabric.util.transformPoint(point, canvas.viewportTransform);

      var clampedCenterX = this.clamp(center.x, xMin, xMax);
      var clampedCenterY = this.clamp(center.y, yMin, yMax);

      var diffX = clampedCenterX - center.x;
      var diffY = clampedCenterY - center.y;

      if (diffX != 0 || diffY != 0) {
        canvas.relativePan(new fabric.Point(diffX, diffY));
      }
    },
    clamp(value, min, max) {
      return Math.max(min, Math.min(value, max));
    },
    saveImage() {
      var link = document.createElement("a");
      var imgData = canvas.toDataURL({ format: "png", multiplier: 4 });
      var blob = this.dataURLtoBlob(imgData);
      var objurl = URL.createObjectURL(blob);

      link.download = "helloWorld.png";
      link.href = objurl;
      link.click();
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
  },
};
</script>
