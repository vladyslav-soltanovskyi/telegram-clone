<template>
  <div
    class="absolute top-0 left-0 w-30 flex flex-col pb-12 box-border h-screen brand overflow-y-scroll z-50 bg-background1 max-sm:w-full">
    <div class="flex justify-between box-border pl-2 pr-4 pt-4 pb-4 items-center text-white gap-8">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-color2 cursor-pointer css-vubbuv" focusable="false"
        aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg>
      <h1 class="w-70 font-semibold box-border pl-4 text-color2">Profile detail</h1><svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-color2 cursor-pointer css-vubbuv" focusable="false"
        aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon">
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </svg>
    </div>
    <div class="w-full h-full bg-cover bg-center" style="background-color: grey;"></div>
    <li class="w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 hover:bg-color3"><svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
        viewBox="0 0 24 24" data-testid="LocalPhoneOutlinedIcon">
        <path
          d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z">
        </path>
      </svg>
      <h2>994773184121</h2>
    </li>
    <li class="w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 "><svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
        viewBox="0 0 24 24" data-testid="ContactPageOutlinedIcon">
        <path
          d="M13.17 4 18 8.83V20H6V4h7.17M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.99 0-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8v-.57z">
        </path>
      </svg>
      <h2>your bio is here</h2>
    </li>
    <li class="w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2"><svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
        viewBox="0 0 24 24" data-testid="PersonOutlineOutlinedIcon">
        <path
          d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z">
        </path>
      </svg>
      <h2>@username</h2>
    </li>
    <div class="hidden">
      <div class="text-white w-full flex flex-col gap-8 pt-4">
        <div class="relative h-11 w-full min-w-[200px]"><input
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            value="994773184121"><label
            class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Phone
            number</label></div>
        <div class="relative h-11 w-full min-w-[200px]"><input
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            value="your bio is here"><label
            class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Bio</label>
        </div>
        <div class="relative h-11 w-full min-w-[200px]"><input
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            value="@username"><label
            class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Username</label>
        </div><input type="file">
      </div>
      <p class="text-start text-red-600 pr-4"></p>
      <div class="flex"><button data-ripple-light="true" data-dialog-target="dialog"
          class="middle none center mr-4 rounded-lg bg-red-500 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Cancel</button><button
          data-ripple-light="true" data-dialog-target="dialog"
          class="middle none center mr-4 rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Save</button>
      </div>
    </div>
  </div>
</template>