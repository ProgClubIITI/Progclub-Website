import React from "react";
import {
    AiFillInstagram,
    AiFillYoutube,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
export default function PromotionIcons() {
    return (
        <div className=" w-fit !mx-auto  z-[10000]">
            <div className="wrapper">
                <div className="navbar">
                    <div className="navbar__item">
                        <span className="navbar__icon">
                            <AiFillInstagram className="!w-8 !h-8" />
                        </span>
                    </div>
                    <div className="navbar__item">
                        <span className="navbar__icon">
                            <AiFillYoutube className="!w-8 !h-8" />
                        </span>
                    </div>
                    <div className="navbar__item">
                        <span className="navbar__icon">
                            <AiFillLinkedin className="!w-8 !h-8" />
                        </span>
                    </div>
                    <div className="navbar__item">
                        <span className="navbar__icon">
                            <BsDiscord className="!w-8 !h-8" />
                        </span>
                    </div>
                    <div className="navbar__item">
                        <span className="navbar__icon">
                            <AiFillFacebook className="!w-8 !h-8" />
                        </span>
                    </div>
                </div>
            </div>
            <svg
                style={{ display: "none" }}
                xmlns="http://www.w3.org/2000/svg"
                hidden
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <symbol id="icon-plus" viewBox="0 0 32 32">
                        <title>plus</title>
                        <path d="M32 14.4v3.2c0 0.8-0.64 1.44-1.44 1.44h-11.68v11.52c0 0.8-0.64 1.44-1.44 1.44h-3.040c-0.8 0-1.44-0.64-1.44-1.44v-11.52h-11.52c-0.8 0-1.44-0.64-1.44-1.44v-3.2c0-0.8 0.64-1.44 1.44-1.44h11.68v-11.52c-0.16-0.8 0.48-1.44 1.28-1.44h3.2c0.8 0 1.44 0.64 1.44 1.44v11.68h11.68c0.64-0.16 1.28 0.48 1.28 1.28z"></path>
                    </symbol>
                    <symbol id="icon-search" viewBox="0 0 32 32">
                        <title>search</title>
                        <path d="M30.56 28.64l-5.76-5.76c2.24-2.4 3.52-5.6 3.52-9.12 0-7.52-6.24-13.76-13.76-13.76s-13.76 6.24-13.76 13.76 6.24 13.76 13.76 13.76c2.72 0 5.12-0.8 7.36-2.080l6.080 6.080c0.32 0.32 0.8 0.48 1.28 0.48s0.96-0.16 1.28-0.48c0.8-0.8 0.8-2.080 0-2.88zM4.64 13.76c0-5.44 4.48-9.92 9.92-9.92s9.92 4.48 9.92 9.92-4.48 9.92-9.92 9.92-9.92-4.48-9.92-9.92z"></path>
                    </symbol>
                    <symbol id="icon-user" viewBox="0 0 32 32">
                        <title>user</title>
                        <path d="M16 0.64c4.16 0 7.52 3.36 7.52 7.36 0 4.16-3.36 7.52-7.52 7.52s-7.36-3.36-7.36-7.52c-0.16-4 3.2-7.36 7.36-7.36zM16 2.56c-3.2 0-5.6 2.56-5.6 5.6s2.4 5.6 5.6 5.6 5.76-2.56 5.76-5.76-2.56-5.44-5.76-5.44z"></path>
                        <path d="M16 16.32c-2.24 0-4.16-0.8-5.76-2.4s-2.4-3.68-2.4-5.76c0-2.24 0.8-4.16 2.4-5.76s3.52-2.4 5.76-2.4c4.48 0 8.16 3.68 8.16 8.16s-3.68 8.16-8.16 8.16zM16 1.44c-1.76 0-3.52 0.64-4.8 1.92s-1.92 3.040-1.92 4.8c0 1.76 0.64 3.52 1.92 4.8s2.88 1.92 4.8 1.92c3.84 0 6.72-3.040 6.72-6.72s-3.040-6.72-6.72-6.72zM16 14.56c-3.52 0-6.4-2.88-6.4-6.4 0-1.76 0.64-3.36 1.92-4.48s2.72-1.92 4.48-1.92c3.68 0 6.4 2.72 6.4 6.4 0 1.76-0.64 3.36-1.92 4.48-1.28 1.28-2.88 1.92-4.48 1.92zM16 3.2c-1.44 0-2.56 0.48-3.52 1.44s-1.44 2.080-1.44 3.52c0 2.72 2.24 4.96 4.96 4.96 1.28 0 2.56-0.48 3.52-1.44s1.44-2.24 1.44-3.52c0-2.72-2.24-4.96-4.96-4.96z"></path>
                        <path d="M3.68 30.4c0 1.12-1.76 1.12-1.76 0v-3.68c0-4.64 3.84-8.48 8.48-8.48h11.36c4.64 0 8.48 3.84 8.48 8.48v3.68c0 1.12-1.76 1.12-1.76 0v-3.68c0-3.68-3.040-6.72-6.72-6.72h-11.36c-3.68 0-6.72 3.040-6.72 6.72v3.68z"></path>
                        <path d="M29.28 32c-0.96 0-1.6-0.64-1.6-1.6v-3.68c0-1.6-0.64-3.040-1.76-4.16s-2.56-1.76-4.16-1.76h-11.36c-1.6 0-3.040 0.64-4.16 1.76s-1.76 2.56-1.76 4.16v3.68c0 0.96-0.64 1.6-1.6 1.6s-1.6-0.64-1.6-1.6v-3.68c0-2.4 0.96-4.8 2.72-6.56 1.6-1.6 3.84-2.56 6.4-2.56h11.36c2.4 0 4.8 0.96 6.56 2.72s2.72 4 2.72 6.56v3.52c-0.16 0.96-0.8 1.6-1.76 1.6zM10.4 19.36h11.36c1.92 0 3.84 0.8 5.28 2.24s2.24 3.2 2.24 5.28v3.52c0 0 0 0.16 0.16 0.16s0.16-0.16 0.16-0.16v-3.68c0-2.080-0.8-4-2.24-5.44s-3.36-2.24-5.44-2.24h-11.52c-2.080 0-4 0.8-5.44 2.24s-2.24 3.36-2.24 5.44v3.68c0 0 0 0.16 0.16 0.16s0-0.16 0-0.16v-3.68c0-1.92 0.8-3.84 2.24-5.28 1.44-1.28 3.2-2.080 5.28-2.080z"></path>
                    </symbol>
                    <symbol id="icon-cup" viewBox="0 0 32 32">
                        <title>cup</title>
                        <path d="M28 4h-1.28v-2.72c0-0.8-0.64-1.28-1.28-1.28h-18.72c-0.8 0-1.44 0.64-1.44 1.28v2.72h-1.28c-2.24 0-4 1.76-4 4v1.28c0 2.24 1.76 4 4 4h1.76c0.8 3.2 3.2 5.92 6.24 7.2v3.52h-1.28c-2.24 0-4 1.76-4 4v2.72c0 0.64 0.48 1.28 1.28 1.28h16c0.8 0 1.28-0.64 1.28-1.28v-2.72c0-2.24-1.76-4-4-4h-1.28v-3.52c3.2-1.28 5.44-4 6.4-7.2h1.6c2.24 0 4-1.76 4-4v-1.28c0-2.24-1.76-4-4-4zM4 10.72c-0.8 0-1.28-0.64-1.28-1.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h1.28v4h-1.28zM22.72 28v1.28h-13.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h10.72c0.8 0 1.44 0.48 1.44 1.28zM17.28 24h-2.56v-2.72c0.96 0.16 1.76 0.16 2.72 0v2.72zM16 18.72c-4.48 0-8-3.52-8-8v-8h16v8c0 4.32-3.52 8-8 8zM29.28 9.28c0 0.8-0.64 1.28-1.28 1.28h-1.28v-3.84h1.28c0.8 0 1.28 0.64 1.28 1.28v1.28z"></path>
                    </symbol>
                    <symbol id="icon-home" viewBox="0 0 32 32">
                        <title>home</title>
                        <path d="M16 4.48l12.48 9.92v14.080h-24.96v-14.080l12.48-9.92zM16 0.48l-15.52 12.48v18.72h31.040v-18.72l-15.52-12.48z"></path>
                        <path d="M32 32h-32v-19.2l16-12.8 16 12.8v19.2zM0.8 31.2h30.4v-18.080l-15.2-12.16-15.2 12.16v18.080zM28.8 28.8h-25.6v-14.56l12.8-10.24 12.8 10.24v14.56zM4 28h24.16v-13.44l-12-9.6-12 9.6v13.44z"></path>
                    </symbol>
                </defs>
            </svg>
            <style jsx>
                {`
                    .icon {
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        stroke-width: 0;
                        stroke: currentColor;
                        fill: currentColor;
                    }

                    .navbar {
                        display: inline-flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-items: center;
                        margin: auto auto;
                        padding-bottom: 20px;
                        box-shadow: 0px 20px 40px rgba(18, 34, 64, 0.1);
                        border-bottom-left-radius: 30px;
                        border-bottom-right-radius: 30px;
                        position: relative;
                    }
                    .navbar:after {
                        content: "";
                        width: 120px;
                        background: #d9e0ea;
                        position: absolute;
                        bottom: 8px;
                        left: 50%;
                        height: 3px;
                        transform: translatex(-50%);
                        opacity: 0.7;
                    }
                    .navbar__item {
                        width: 70px;
                        height: 70px;
                        position: relative;
                        cursor: pointer;
                        padding: 10px;
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 21px;
                    }
                    .navbar__item::before,
                    .navbar__item:after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        background-color: currentColor;
                        border-radius: 50%;
                        transform: scale(0.8);
                        opacity: 0;
                        transition: all 0.55s
                            cubic-bezier(0.71, 0.03, 0.23, 0.95);
                    }
                    .navbar__item::after {
                        box-shadow: 0 7px 15px currentColor;
                    }
                    .navbar__item {
                        color: white;
                    }

                    .navbar__item:hover::before,
                    .navbar__item:hover::after {
                        transform: translateY(-40px) scale(1.1);
                    }
                    .navbar__item:hover::before {
                        opacity: 1;
                    }
                    .navbar__item:hover::after {
                        opacity: 0.4;
                    }
                    .navbar__item:hover .navbar__icon {
                        transform: translateY(-37px) scale(1.25);
                        color: #fff;
                        transition-delay: 0.1s, 0.1s;
                    }
                    .navbar__icon {
                        transition: all 0.5s
                            cubic-bezier(0.71, 0.03, 0.23, 0.95);
                        transition-delay: 0.1s;
                        display: inline-block;
                        position: relative;
                        z-index: 2;
                    }

                    .navbar__item:hover > .navbar__icon {
                        color: black;
                    }
                `}
            </style>
        </div>
    );
}
