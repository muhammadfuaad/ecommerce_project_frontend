import React from "react";
import { Input } from "antd";
import { HeartTwoTone, UserOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons"; 

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overridden)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

const { Search } = Input;

const Header = () => {
  return (
    <div className="flex justify-around p-5 border border-green-500">
      <h1
      className="text-3xl"
      style={{
        background: 'linear-gradient(to right, red, orange, green, blue, indigo, violet)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      MFS Traders
    </h1>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{
          width: 500,
        }}
        // onSearch={onSearch}
      />
      <span className="flex gap-6 text-2xl">
        <button className="hover:cursor-pointer">
          <div class="group relative p-2 rounded-full">
            <span>
              <HeartTwoTone twoToneColor="#eb2f96" />
            </span>
            <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2">
              <span class="text-zinc-400 whitespace-nowrap">Wish List</span>
              <div class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </button>

        <button className="hover:cursor-pointer">
          <div class="group relative p-2 rounded-full">
            <span>
              <IconFont type="icon-shoppingcart" />
            </span>
            <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2">
              <span class="text-zinc-400 whitespace-nowrap">Cart</span>
              <div class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </button>

        <button
          className="hover:cursor-pointer"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          <div class="group relative p-2 rounded-full">
            <span>
              <UserOutlined />
            </span>
            <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2">
              <span class="text-zinc-400 whitespace-nowrap">Account</span>
              <div class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </button>
      </span>
    </div>
  );
};

export default Header;
