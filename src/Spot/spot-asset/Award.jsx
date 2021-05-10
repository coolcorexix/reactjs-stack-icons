import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M32.87 6.99c-.621-1.192-1.664-2.149-2.487-2.776a10.58 10.58 0 00-1.418-.928c-.225-.117-.491-.173-.734-.097-.458.143-.593.624-.711 1.036-.09.316-.196.76-.26 1.271-.123 1-.1 2.395.679 3.588l.005.008a7.824 7.824 0 002.615 2.46c.428.245.877.453 1.306.694 5.024 2.823 8.395 8.152 8.395 14.344 0 7.99-5.725 14.656-13.34 16.147a.85.85 0 00.326 1.668 18.233 18.233 0 002.886-.816c.225.184.694.553 1.32.94.857.531 2.077 1.143 3.376 1.287 1.322.147 2.478-.22 3.264-.607.49-.241 1.215-.601 1.428-1.151a.864.864 0 00-.043-.718c-.284-.534-.916-1.007-1.375-1.372-.67-.535-1.63-1.144-2.76-1.388.484-.398.946-.82 1.386-1.265.558.143 1.127.247 1.698.318 1.03.129 2.432.187 3.676-.196 1.28-.393 2.176-1.198 2.722-1.875.274-.34.473-.662.598-.912.119-.24.222-.53.174-.802a.863.863 0 00-.468-.625 9.136 9.136 0 00-1.64-.623c-.89-.24-2.113-.416-3.355-.081.321-.657.604-1.337.845-2.036.407 0 .814-.032 1.217-.097.918-.15 2.136-.526 3.13-1.47.965-.916 1.538-2.132 1.858-3.059a9.21 9.21 0 00.329-1.195c.064-.326.126-.684-.048-.988-.255-.445-.773-.443-1.223-.429-.313.01-.748.041-1.243.127-.893.153-2.054.495-3.038 1.271v-.053c0-.73-.043-1.449-.125-2.155.245-.116.599-.305.992-.582.71-.5 1.579-1.312 2.114-2.526.53-1.202.61-2.568.566-3.574a9.71 9.71 0 00-.136-1.28c-.06-.329-.134-.691-.402-.918a.859.859 0 00-.495-.201c-.3-.022-.595.146-.856.276-.28.14-.664.35-1.08.634-.781.535-1.744 1.379-2.302 2.575a17.996 17.996 0 00-1.26-2.24c1.037-.933 1.726-2.23 1.827-3.632.095-1.335-.284-2.687-.653-3.651a11.873 11.873 0 00-.531-1.194c-.213-.411-.465-.857-.996-.849-.258.004-.456.13-.642.293-.206.18-.65.595-1.113 1.194-.605.783-1.292 1.952-1.392 3.344a5.285 5.285 0 00-.01.57 18.288 18.288 0 00-2.27-1.62c.064-.228.13-.51.174-.833.119-.854.101-2.03-.494-3.218l-.006-.012zm-3.862-1.676c.923.648 1.823 1.445 2.35 2.456.358.716.441 1.654.292 2.44-.945-.48-1.694-1.167-2.29-2.058-.539-.83-.527-1.898-.352-2.838zm12.551 25.44c.175-.968.56-1.943 1.283-2.633.773-.694 1.82-1.012 2.835-1.13-.297.985-.767 1.976-1.522 2.692-.698.663-1.653.98-2.596 1.072zm-3.365 7.129c.559-.727 1.284-1.386 2.176-1.66 1.055-.338 2.174-.183 3.2.183-.39.51-1.05 1.125-1.967 1.407-1.092.335-2.294.25-3.409.07zm-6.193 4.978c.79-.447 1.747-.773 2.662-.671.884.098 1.723.585 2.38 1.108.145.115.277.23.395.337a4.542 4.542 0 01-.096.049c-.596.293-1.42.543-2.326.443-1.092-.121-2.114-.66-3.015-1.266zm6.412-33.308c.438 1.027.774 2.166.694 3.293-.076 1.056-.61 1.826-1.068 2.297-.552-.862-.941-1.881-.867-2.918.072-1.002.604-1.92 1.241-2.672zm5.374 7.926c.087 1.055.03 2.184-.402 3.163-.416.943-1.143 1.574-1.721 1.946-.262-.942-.343-1.996.059-2.91.402-.95 1.201-1.666 2.064-2.199z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M23.84 18.03l-1.846 5.346a1 1 0 01-.945.674h-5.713a.153.153 0 00-.005.024l4.603 3.477a1 1 0 01.35 1.102l-1.66 5.202 4.69-3.25a1 1 0 011.136-.002l4.608 3.167-1.66-5.202a1 1 0 01.35-1.102l4.522-3.417h-5.637a1 1 0 01-.945-.673L23.84 18.03zm-.031-2.093a2 2 0 011.88 1.315l1.656 4.797h5.044c1.813 0 2.62 2.278 1.258 3.464l-.054.044-4.074 3.078 1.503 4.71.005.016c.551 1.83-1.487 3.132-2.971 2.147l-.014-.009-4.156-2.857-4.243 2.94-.017.012c-1.485.985-3.522-.318-2.97-2.148l.004-.015 1.503-4.71-4.072-3.077c-.758-.568-.877-1.498-.666-2.183.218-.711.866-1.411 1.868-1.411h5.043l1.652-4.782c.278-.887 1.067-1.33 1.82-1.33z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M14.227 36.644a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM12.706 34.744a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM11.493 32.625a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM10.668 30.266a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM10.254 27.835a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM10.254 25.422a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM10.664 22.982a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM11.49 20.732a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM12.636 18.502a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM14.232 16.62a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM16.02 15.01a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM18.107 13.725a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM20.399 12.784a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM22.784 12.266a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM25.206 12.164a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM27.676 12.454a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM30.013 13.159a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM32.233 14.296a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM34.15 15.71a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM35.894 17.463a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM37.268 19.46a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM38.307 21.722a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM38.891 24.064a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM39.119 26.544a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM38.94 29.05a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM38.32 31.406a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM37.281 33.604a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM35.935 35.688a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM34.2 37.472a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM32.225 38.899a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM30.026 39.987a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM27.747 40.736a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM25.32 41.047a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM22.84 40.926a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM20.411 40.485a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM18.16 39.508a.825.825 0 11-1.65 0 .825.825 0 011.65 0zM15.909 38.337a.825.825 0 11-1.65 0 .825.825 0 011.65 0z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14.94 6.99c.621-1.192 1.664-2.149 2.487-2.776a10.58 10.58 0 011.418-.928c.225-.117.491-.173.734-.097.459.143.594.624.711 1.036.09.316.197.76.26 1.271.124 1 .101 2.395-.678 3.588l-.005.008a7.824 7.824 0 01-2.616 2.46c-.428.245-.877.453-1.306.694-5.024 2.823-8.395 8.152-8.395 14.344 0 7.99 5.725 14.656 13.34 16.147a.85.85 0 01-.326 1.668 18.233 18.233 0 01-2.886-.816c-.224.184-.694.553-1.32.94-.856.531-2.077 1.143-3.376 1.287-1.322.147-2.477-.22-3.264-.607-.49-.241-1.215-.601-1.427-1.151a.864.864 0 01.042-.718c.284-.534.916-1.007 1.375-1.372.671-.535 1.63-1.144 2.76-1.388a18.31 18.31 0 01-1.386-1.265c-.558.143-1.127.247-1.698.318-1.03.129-2.431.187-3.676-.196-1.28-.393-2.175-1.198-2.722-1.875a5.147 5.147 0 01-.597-.912c-.12-.24-.223-.53-.175-.802a.863.863 0 01.469-.625 9.134 9.134 0 011.64-.623c.889-.24 2.112-.416 3.354-.081a17.98 17.98 0 01-.844-2.036c-.408 0-.815-.032-1.217-.097-.919-.15-2.136-.526-3.13-1.47C1.52 30 .946 28.784.626 27.857a9.21 9.21 0 01-.328-1.195c-.065-.326-.127-.684.047-.988.255-.445.774-.443 1.224-.429.312.01.747.041 1.242.127.893.153 2.054.495 3.039 1.271v-.053c0-.73.042-1.449.125-2.155a6.82 6.82 0 01-.993-.582c-.71-.5-1.579-1.312-2.114-2.526-.529-1.202-.61-2.568-.566-3.574.022-.512.078-.957.137-1.28.06-.329.133-.691.402-.918a.859.859 0 01.494-.201c.3-.022.595.146.856.276.281.14.665.35 1.08.634.782.535 1.744 1.379 2.302 2.575.368-.779.79-1.527 1.26-2.24-1.036-.933-1.726-2.23-1.826-3.632-.096-1.335.283-2.687.652-3.651.188-.492.382-.904.531-1.194.213-.411.466-.857.997-.849.257.004.456.13.641.293.206.18.65.595 1.113 1.194.605.783 1.292 1.952 1.392 3.344.014.193.016.384.01.57a18.28 18.28 0 012.27-1.62 6.27 6.27 0 01-.174-.833c-.119-.854-.1-2.03.494-3.218l.006-.012zm3.862-1.676c-.923.648-1.822 1.445-2.35 2.456-.358.716-.44 1.654-.292 2.44.945-.48 1.695-1.167 2.29-2.058.54-.83.527-1.898.352-2.838zM6.251 30.754c-.175-.968-.56-1.943-1.283-2.633-.773-.694-1.82-1.012-2.835-1.13.298.985.767 1.976 1.522 2.692.698.663 1.653.98 2.596 1.072zm3.365 7.129c-.559-.727-1.284-1.386-2.175-1.66-1.056-.338-2.175-.183-3.201.183.39.51 1.05 1.125 1.967 1.407 1.092.335 2.294.25 3.41.07zm6.193 4.978c-.79-.447-1.747-.773-2.662-.671-.884.098-1.723.585-2.38 1.108-.145.115-.277.23-.395.337l.097.049c.595.293 1.42.543 2.326.443 1.091-.121 2.114-.66 3.014-1.266zM9.397 9.553c-.437 1.027-.774 2.166-.694 3.293.076 1.056.61 1.826 1.068 2.297.552-.862.941-1.881.867-2.918-.071-1.002-.604-1.92-1.24-2.672zm-5.374 7.926c-.086 1.055-.029 2.184.402 3.163.416.943 1.143 1.574 1.722 1.946.26-.942.343-1.996-.06-2.91-.402-.95-1.2-1.666-2.064-2.199z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;