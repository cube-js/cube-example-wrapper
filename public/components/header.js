const headerTemplate = `
    <header class="Header" id="header">
        <div class="Header__logo">
            <a href="https://cube.dev/" class="Header__logoRootLink">
                <svg xmlns="http://www.w3.org/2000/svg" width="98" height="28" fill="none">
                    <path d="M26.13 7.04 14 0v4.87l12.13 7V7.05Z" fill="#FF6492" />
                    <path d="M26.13 11.88 22.5 14 14 9.08l-4.85 2.8L5.5 9.91 14 4.87l12.12 7Z" fill="#141446" />
                    <path d="M9.15 11.88 5.5 9.91V14l3.64-2.12Z" fill="#A14474" />
                    <path d="M1.87 20.96 14 14l12.13 6.96L14 28 1.87 20.96Z" fill="#141446" />
                    <path d="M26.13 16.13 14 9.01V14l12.13 6.96v-4.83Z" fill="#FF6492" />
                    <path d="M5.5 14V9.91L14 4.87V0L1.87 7.04v13.92L14 14V9l-8.5 5Z" fill="#7A77FF" />
                    <path
                        d="M33.66 14.73c0-4.2 3.34-7.48 7.55-7.48a6.8 6.8 0 0 1 6 3.33l-2.14 1.7c-.93-1.32-2.12-2.2-3.83-2.2-2.62 0-4.47 2.05-4.47 4.65 0 2.66 1.85 4.68 4.47 4.68 1.68 0 2.87-.85 3.83-2.16l2.14 1.66a6.87 6.87 0 0 1-6 3.33 7.45 7.45 0 0 1-7.55-7.5ZM49.86 15.9V7.57h3.01v8.57a3.11 3.11 0 0 0 3.23 3.27c1.74 0 3.13-1.26 3.13-3.27V7.57h3.05v8.33c0 3.9-2.7 6.35-6.18 6.35-3.54 0-6.24-2.46-6.24-6.35ZM80.77 14.76c0 4.27-2.93 7.49-6.97 7.49-2.09 0-3.92-.85-4.99-2.31v1.99h-2.84V0h3.05v9.33a6.03 6.03 0 0 1 4.76-2.08c4.06 0 6.99 3.24 6.99 7.51Zm-3.14-.03c0-2.77-1.91-4.67-4.35-4.67-2.15 0-4.3 1.46-4.3 4.7 0 3.28 2.18 4.68 4.3 4.68 2.47 0 4.35-1.93 4.35-4.7ZM96.53 15.76H85.91c.4 2.36 2.2 3.77 4.64 3.77 1.66 0 2.96-.65 4.15-1.7l1.45 2.1a8.1 8.1 0 0 1-5.69 2.32c-4.4 0-7.66-3.25-7.66-7.49 0-4.2 3.22-7.51 7.37-7.51a6.4 6.4 0 0 1 6.6 6.58c0 .79-.15 1.55-.24 1.93Zm-10.56-2.4h7.75c-.06-2.25-1.72-3.51-3.66-3.51-2 0-3.63 1.38-4.1 3.5Z"
                        fill="var(--dark)" />
                </svg>
            </a>
            <a href="https://cube.dev/docs/examples" class="Header__logoSubLink">
                <svg width="125" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.1488 14.0224c0-3.7152-2.7648-6.48-6.5376-6.48-4.1184 0-7.3152 3.2544-7.3152 7.4016 0 4.176 3.2256 7.3728 7.6032 7.3728 2.2464 0 4.1472-.864 5.6448-2.2752l-1.44-2.0736c-1.1808 1.0368-2.4768 1.6704-4.1184 1.6704-2.4192 0-4.2048-1.3824-4.608-3.7152h10.5408c.0864-.3744.2304-1.1232.2304-1.9008ZM7.496 10.1056c1.9296 0 3.5712 1.2384 3.6288 3.456H3.4352c.4608-2.1024 2.0736-3.456 4.0608-3.456ZM29.5149 22l-5.2704-7.3152 4.896-6.8256h-3.456l-3.1392 4.6656-3.168-4.6656h-3.456l4.8672 6.7968L15.5469 22h3.456l3.5136-5.184L26.0589 22h3.456Zm7.7734-14.4576c-2.3904 0-4.4928.9504-5.9616 3.024l1.7567 1.7856c1.1233-1.3248 2.2753-2.1024 3.9169-2.1024 1.9296 0 3.024 1.0656 3.024 3.024v.9216h-4.0032c-3.168 0-5.2128 1.5552-5.2128 4.032 0 2.448 1.9583 4.0896 4.9248 4.0896 1.9584 0 3.5135-.6912 4.5216-1.9008V22h2.8224v-8.5536c0-3.9168-2.3904-5.904-5.7888-5.904Zm-.9216 12.4416c-1.3825 0-2.4769-.6336-2.4769-1.872 0-1.152.8928-1.728 2.5057-1.728h3.6288v.2592c0 1.9296-1.6704 3.3408-3.6576 3.3408Zm26.903-12.4416c-2.0736 0-3.7728.9216-4.7808 2.2176-.8352-1.3536-2.2752-2.2176-4.2912-2.2176-1.6992 0-3.1104.6048-4.0896 1.6416V7.8592h-2.8224V22h3.024v-8.4096c0-1.9584 1.2672-3.2832 3.1104-3.2832 1.8144 0 2.9664 1.3248 2.9664 3.2832V22h3.024v-8.5536c0-1.7856 1.2672-3.1392 3.1104-3.1392 1.8432 0 2.9376 1.3248 2.9376 3.2832V22h3.0528v-8.8416c0-3.312-1.9008-5.616-5.2416-5.616Zm17.1882 0c-2.0736 0-3.888.8352-4.9248 2.304V7.8592h-2.8224V27.184h3.024v-6.912c1.0944 1.296 2.7936 2.0448 4.7232 2.0448 4.032 0 6.9408-3.168 6.9408-7.4016 0-4.2048-2.9088-7.3728-6.9408-7.3728Zm-.4896 12.0096c-2.1312 0-4.2624-1.44-4.2624-4.6368 0-3.2256 2.16-4.608 4.2624-4.608 2.448 0 4.32 1.9008 4.32 4.6368 0 2.736-1.9008 4.608-4.32 4.608ZM90.8794 22h3.024V.4h-3.024V22Zm20.3566-7.9776c0-3.7152-2.765-6.48-6.537-6.48-4.119 0-7.3155 3.2544-7.3155 7.4016 0 4.176 3.2255 7.3728 7.6035 7.3728 2.246 0 4.147-.864 5.644-2.2752l-1.44-2.0736c-1.18 1.0368-2.476 1.6704-4.118 1.6704-2.419 0-4.205-1.3824-4.608-3.7152h10.541c.086-.3744.23-1.1232.23-1.9008Zm-6.653-3.9168c1.93 0 3.572 1.2384 3.629 3.456h-7.689c.46-2.1024 2.073-3.456 4.06-3.456Zm14.496 12.2112c2.822 0 5.241-1.4688 5.241-4.32 0-2.0736-1.296-3.1968-3.859-4.2624l-1.353-.5472c-1.296-.5472-1.872-.9216-1.872-1.6704 0-.9216.806-1.3536 1.929-1.3536 1.239 0 2.419.5184 3.312 1.44l1.642-1.872c-1.181-1.4112-2.851-2.1888-4.896-2.1888-2.794 0-4.983 1.4688-4.983 4.0896 0 2.1312 1.412 3.168 3.687 4.1184l1.44.6048c1.152.4608 1.987.8352 1.987 1.7568 0 1.0656-1.037 1.584-2.275 1.584-1.613 0-2.851-.8352-3.975-2.016l-1.728 1.9008c1.21 1.584 3.197 2.736 5.703 2.736Z"
                        fill="var(--dark_04_a30)" />
                </svg>
            </a>
        </div>
        <button aria-label="ariaLabelMenuButton" id="toggleNavVisibilityButton" aria-expanded="false"
            class="Header__openButton">
            <span class="Header__openMenuIcon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </button>
        <div class="Header__overlay" id="headerOverlay"></div>
        <nav class="Header__navigation" id="headerNavigation" aria-controls="toggleMenuVisibilityButton">
            <div class="Dropdown Header__linkList" id="menu">
                <button class="Dropdown__button Header__link Button Button--outline Button--size-s load" id="menu-button"
                    aria-expanded="false" tabindex="0">
                    <span id="menu-button-text" class="Dropdown__text"></span>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="Dropdown__arrow">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.6" />
                    </svg>
                </button>
                <!-- add class .overflow and > 7 .Dropdown__link items to test overflow behaviour  -->
                <ul class="Header__dropdownMenuList Dropdown__content" id="menu-list" aria-label="Cube examples list">
                </ul>
            </div>
            <ul class="Header__linkList Header__linkList--actions">
                <li class="Header__linkItem">
                    <a href="https://slack.cube.dev/" class="Header__link">Discuss on Slack</a>
                </li>
                <a href="https://cubecloud.dev/auth/signup" class="Button Button--size-s Button--pink">Get started with
                    Cube</a>
            </ul>
        </nav>
    </header>
`;

export default headerTemplate;