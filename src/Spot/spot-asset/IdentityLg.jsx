import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path
        fill="#000"
        d="M77 73H23a2 2 0 00-2 2v16a3 3 0 003 3h51a5 5 0 005-5V76a3 3 0 00-3-3z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        d="M32.5 81a1.5 1.5 0 000 3H60a1.5 1.5 0 000-3H32.5zM38 76.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14a1.5 1.5 0 01-1.5-1.5z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M33.571 1.322a1.5 1.5 0 012.107.25l3.512 4.453h14.204l2.852-4.348a1.5 1.5 0 012.508 1.646l-1.772 2.702H72.5a4.5 4.5 0 014.5 4.5V86.5a4.5 4.5 0 01-4.5 4.5h-53a4.5 4.5 0 01-4.5-4.5V10.525a4.5 4.5 0 014.5-4.5h15.87L33.322 3.43a1.5 1.5 0 01.25-2.107zM54.17 9.025H41.556l2.233 2.832a7 7 0 11-2.595 1.554l-3.458-4.386H19.5a1.5 1.5 0 00-1.5 1.5V67h7.024c.12-3.18 1.923-5.422 3.827-6.93 1.468-1.164 3.143-2.006 4.844-2.768 1.908-.855 3.87-1.605 5.762-2.491.203-.095.462-.227.711-.384.844-.529.562-1.426.567-2.349a13.08 13.08 0 01-2.924-3.811c-.38-.757-.617-1.628-.754-2.527a1.5 1.5 0 01-.118-.266c-.134-.401-.325-.778-.584-1.244l-.156-.277c-.22-.391-.482-.854-.72-1.36-.633-1.34-1.131-3.017-1.131-5.579 0-3.382 1.363-5.97 3.48-7.665 2.077-1.663 4.776-2.39 7.393-2.33 5.152.121 10.803 3.44 10.803 9.995 0 2.446-.28 3.804-.825 4.924-.206.422-.45.803-.65 1.118a33.73 33.73 0 00-.12.187 8.63 8.63 0 00-.68 1.277c-.022.05-.046.098-.072.145a12.908 12.908 0 01-.286 1.67 14.784 14.784 0 01-1.402 3.64c.178 1.703-.2 4.071 1.317 5.151 1.755 1.25 3.937 1.709 5.918 2.472 2.165.749 4.127 1.721 5.55 3.218 1.535 1.616 2.39 3.95 2.256 6.184H74V10.525a1.5 1.5 0 00-1.5-1.5H54.169zM37.447 38.708c.165-.72.362-1.402.585-2.012.195-.536.42-1.043.675-1.483.245-.423.567-.871.99-1.203.224-.176.646-.49 1.189-.57a1.76 1.76 0 011.024.154c.312.15.518.363.64.513.176.217.324.502.39.628l.02.04c.086.162.163.3.266.442.324.448 1.288 1.49 4.968 1.824 2.17.197 3.71 1.214 4.606 2.72.13-.573.224-1.41.224-2.747 0-4.334-3.687-6.897-7.873-6.995-2.052-.048-4.022.53-5.448 1.672-1.384 1.109-2.355 2.823-2.355 5.323 0 .64.036 1.198.1 1.694zM64.036 67c-.093-1.547-.327-2.95-1.437-4.117-.94-.989-2.379-1.768-4.379-2.458a1.513 1.513 0 01-.05-.018l-3.085-1.189a5.087 5.087 0 01-.818 1.662c-.664.889-1.56 1.489-2.496 1.896-1.83.797-4.063.964-5.867.964-1.88 0-3.906-.591-5.56-1.642-1.2-.762-2.288-1.824-2.936-3.163-.836.361-1.665.736-2.496 1.11-1.154.52-2.776 1.25-4.198 2.376-1.483 1.175-2.572 2.643-2.686 4.579h36.008zm-11.76-8.967c-1.073-.642-2.172-1.482-2.671-2.66a1.5 1.5 0 01-.111-.43l-.178-1.692c-.882.681-1.912 1.15-3.053 1.15a7.197 7.197 0 01-2.528-.468v.21c0 .836-.43 1.471-.785 1.862-.368.407-.813.729-1.187.964a9.781 9.781 0 01-1.583.797c.36.669.963 1.286 1.772 1.8 1.185.752 2.655 1.174 3.952 1.174 1.709 0 3.427-.174 4.67-.715.6-.262 1.02-.58 1.289-.94.195-.261.35-.596.412-1.052zM18 70v16.5a1.5 1.5 0 001.5 1.5h53a1.5 1.5 0 001.5-1.5V70H18zm24-51.5a4 4 0 106.916-2.738l-.046.066-.907 1.233c-.449.61-1.147 1.015-1.945 1.015-.788 0-1.478-.395-1.927-.991l-1.026-1.302A3.986 3.986 0 0042 18.5zm4-4c.04 0 .08 0 .121.002l-.119.161-.127-.161L46 14.5zm-5.15 23.224c-.309.847-.578 1.937-.751 3.112-.173 1.173-.243 2.388-.177 3.485.068 1.116.272 2.006.57 2.598.537 1.069 1.397 2.226 2.448 3.099 1.053.875 2.193 1.383 3.323 1.383.51 0 1.332-.403 2.245-1.569.867-1.105 1.593-2.632 1.965-4.192.377-1.583.342-3-.067-3.977-.357-.852-1.042-1.503-2.483-1.634-3.915-.356-5.842-1.494-6.895-2.755a8.65 8.65 0 00-.178.45z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
