import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 185 37"
    >
      <path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9h22z"></path>
      <path
        fill="#F48024"
        d="M23.09 25.99l.694-2.949L7.68 19.687 7 23l16.09 2.99zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5zM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM7 30h16v-3H7v3z"
      ></path>
      <path
        fill="#222426"
        d="M75.513 13.192h-10c-.299 0-.499.2-.499.5v15.675c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-6.11h5.999c.3 0 .5-.2.5-.5v-2.154c0-.3-.2-.5-.5-.5h-6v-3.756h7.15c.3 0 .5-.2.5-.501v-2.153c-.05-.25-.3-.501-.55-.501zM89.599 16.698a5.023 5.023 0 00-1.15-1.803c-1.2-1.202-2.75-1.803-4.5-1.803s-3.249.6-4.449 1.803c-.4.4-.75.851-.95 1.302-.2.45-.4.951-.5 1.452-.1.5-.15 1.052-.2 1.602-.05.551-.05 1.352-.05 2.304 0 1.252.05 2.203.1 2.904.05.701.2 1.352.45 2.003s.65 1.202 1.15 1.803c1.2 1.202 2.7 1.803 4.45 1.803s3.25-.601 4.499-1.853c.5-.55.9-1.152 1.15-1.803.25-.6.35-1.302.4-2.003.05-.65.05-1.652.05-2.904s0-2.203-.05-2.905c0-.65-.15-1.302-.4-1.902zm-8.25 1.652c.1-.55.3-1.002.6-1.352.2-.25.5-.45.85-.601.35-.15.75-.2 1.1-.2.4 0 .75.1 1.1.2.35.15.65.35.85.6.3.352.5.752.6 1.303.1.6.15 1.703.15 3.205 0 1.001 0 1.803-.05 2.404-.05.55-.1 1.001-.25 1.302-.1.3-.25.55-.5.8-.5.552-1.15.802-1.95.802-.4 0-.75-.05-1.1-.2-.35-.15-.65-.35-.85-.551-.2-.2-.35-.4-.4-.601-.05-.1-.15-.35-.2-.751-.049-.35-.099-.751-.149-1.252 0-.501-.05-1.152-.05-1.953.1-1.452.15-2.554.25-3.155zM102.072 22.757c.75-.3 1.4-.802 1.95-1.453.65-.8.95-1.802.95-3.004 0-.951-.2-1.853-.65-2.604-.45-.751-1.1-1.402-1.9-1.803-.8-.45-1.75-.65-2.8-.65h-6.099c-.3 0-.5.2-.5.5v15.674c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-6.11h2.15l3.149 6.31c.1.15.25.3.45.3h2.75c.15 0 .35-.1.45-.25.1-.15.1-.35 0-.5l-3.3-6.41zm-5.65-6.41h3c.7 0 1.2.15 1.6.55.4.351.55.802.55 1.453 0 .6-.2 1.052-.55 1.402-.4.35-.9.551-1.6.551h-3v-3.956zM124.044 13.192h-10.998c-.3 0-.5.2-.5.5v2.154c0 .3.2.5.5.5h3.799v13.02c0 .301.2.502.5.502h2.35c.3 0 .5-.2.5-.501v-13.02h3.799c.3 0 .5-.2.5-.5v-2.154c.05-.25-.2-.5-.45-.5zM137.524 13.192h-9.999c-.3 0-.5.2-.5.5v15.675c0 .3.2.5.5.5h9.999c.3 0 .5-.2.5-.5v-2.153c0-.3-.2-.501-.5-.501h-7.149v-3.706h5.999c.3 0 .5-.2.5-.5v-2.104c0-.3-.2-.5-.5-.5h-5.999v-3.556h7.149c.3 0 .5-.2.5-.5v-2.154c0-.25-.25-.5-.5-.5zM147.942 13.543a.48.48 0 00-.45-.35h-1.9c-.2 0-.4.15-.45.35l-5.749 15.674c-.05.15-.05.3.05.45.1.15.25.2.4.2h2.549c.2 0 .4-.15.45-.35l.95-2.804h5.449l.95 2.804c.05.2.25.35.45.35h2.55c.15 0 .3-.1.4-.2.1-.15.1-.3.05-.45l-5.699-15.674zm.299 10.165h-3.399l1.75-4.907 1.649 4.907zM169.989 13.192h-2.4c-.2 0-.35.1-.45.3l-4 8.764-4.099-8.763c-.1-.2-.25-.3-.45-.3h-2.4c-.3 0-.5.2-.5.5v15.674c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-8.263l2.75 5.659c.1.15.25.3.45.3h1.749c.2 0 .35-.1.45-.3l2.65-5.609v8.263c0 .3.2.5.5.5h2.4c.3 0 .499-.2.499-.5V13.743c-.05-.3-.249-.55-.549-.55zM183.437 21.355c-.35-.351-.8-.601-1.3-.802-.5-.2-1.1-.35-1.85-.45l-1.8-.25c-.3-.05-.6-.1-.899-.251-.25-.1-.5-.25-.6-.35-.3-.251-.4-.602-.4-1.102 0-.4.1-.701.25-1.002.2-.3.45-.5.75-.65a3.33 3.33 0 011.299-.251c.45 0 .85.05 1.2.1s.7.2 1 .35c.3.15.6.351.9.652.2.2.5.2.7 0l1.55-1.503c.1-.1.15-.25.15-.35 0-.15-.05-.25-.15-.35-.7-.652-1.5-1.153-2.3-1.453-.8-.3-1.8-.45-2.9-.45-1.15 0-2.149.2-2.999.6-.85.4-1.55 1.052-2 1.803-.45.751-.7 1.652-.7 2.654 0 1.402.45 2.554 1.3 3.355.8.751 1.85 1.202 3.249 1.402l1.85.25c.4.05.75.15.95.2.2.051.35.151.5.351.3.25.45.701.45 1.252 0 .601-.2 1.052-.65 1.352-.5.35-1.2.551-2.1.551-.5 0-1-.05-1.399-.15-.4-.1-.8-.25-1.2-.45-.35-.201-.7-.451-1.05-.802-.1-.1-.2-.15-.35-.15-.15 0-.25.05-.35.15l-1.6 1.552c-.1.1-.15.2-.15.351 0 .15.05.25.15.35.8.802 1.65 1.353 2.6 1.703.95.35 2.05.5 3.299.5.85 0 1.7-.1 2.4-.35.75-.2 1.4-.55 1.95-1.001.55-.45 1-1.002 1.3-1.653.3-.65.45-1.352.45-2.103-.05-1.602-.55-2.804-1.5-3.605z"
      ></path>
      <path fill="#D6D9DC" d="M47 13H48V30H47z"></path>
    </svg>
  );
}

export default Icon;
