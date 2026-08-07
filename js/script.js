// 1. Translations Dictionary (AM / EN)
const translations = {
  hy: {
    // Header & Navigation
    nav_home: "Գլխավոր",
    nav_about: "Մեր Մասին",
    nav_solar: "☀️ Արևային",
    nav_automation: "⚙️ PLC / SCADA",
    nav_hardware: "🔬 Custom Hardware & PCB",
    nav_projects: "Նախագծեր",
    nav_faq: "FAQ",
    nav_contact: "Կապ",
    btn_contact: "Կապնվել Մեզ Հետ",

    // Home Page
    hero_tag: "ԻՆԺԵՆԵՐԱԿԱՆ ԼՈՒԾՈՒՄՆԵՐ, EMBEDDED SYSTEMS ԵՎ ՌՈԲՈՏՈՏԵԽՆԻԿԱ",
    hero_title: "ԲԱՐՁՐ ՃՇԳՐՏՈՒԹՅԱՆ ԱՎՏՈՄԱՏԱՑՎԱԾ ՀԱՄԱԿԱՐԳԵՐ ԱՐԴՅՈՒՆԱԲԵՐՈՒԹՅԱՆ ՀԱՄԱՐ",
    hero_desc: "MGG Systems-ը մասնագիտացված է ինտելեկտուալ ռոբոտացված ագրեգատների, արտադրական PLC/SCADA ավտոմատացման, custom էլեկտրոնային սալիկների (PCB) նախագծման և հատուկ նշանակության մեխանիզմների ստեղծման մեջ։",
    hero_btn_solar: "☀️ Արևային Համակարգեր ➔",
    hero_btn_automation: "⚙️ Արդյունաբերական Ավտոմատացում",

    // Features Bar
    feat_1_title: "📈 Առավելագույն Արտադրողականություն",
    feat_1_desc: "Պրոցեսների ավտոմատացումը բարձրացնում է ՕԳԳ-ն և նվազեցնում մարդկային գործոնի սխալները։",
    feat_2_title: "🛡️ IP67 Պաշտպանվածություն",
    feat_2_desc: "Սարքավորումները նախագծված են ծայրահեղ ջերմաստիճաններում (-30°C-ից +65°C) աշխատելու համար։",
    feat_3_title: "⚙️ Ավտոնոմ Ղեկավարում & IoT",
    feat_3_desc: "RS485/Modbus, CAN bus, Cloud-մոնիտորինգ, real-time տվյալների հավաքագրում։",
    feat_4_title: "🌿 Էկոլոգիական & Էներգախնայող",
    feat_4_desc: "Օպտիմալացված էներգասպառում, չոր մաքրման տեխնոլոգիա և անխափան ռեսուրսների խնայողություն։",
    feat_5_title: "⚡ Ultra-Fast Response",
    feat_5_desc: "24/7 վթարային ազդանշանների ստացում և արագ արձագանքման Cloud architecture։",
    feat_6_title: "🔒 Industrial Cybersecurity",
    feat_6_desc: "Պաշտպանված տվյալների փոխանցման պրոտոկոլներ և կոդավորված ալգորիթմներ։",
    feat_7_title: "🧩 Modular Hardware Design",
    feat_7_desc: "Հեշտ ընդլայնվող և փոխարինելի էլեկտրոնային ու մեխանիկական մոդուլներ։",
    feat_8_title: "🏆 ISO Quality Standards",
    feat_8_desc: "Բոլոր սարքավորումներն անցնում են խիստ լաբորատոր test-run և որակի ստուգում։",











    
    
    // Home Services Grid
    services_title: "Գործունեության 6 Հիմնական Ուղղությունները",
    services_subtitle: "Մեր բազմապրոֆիլ ինժեներական թիմն իրականացնում է բարդ խնդիրների լուծում հետևյալ ոլորտներում։",
    srv_1_title: "☀️ Արևային Կայանների Ռոբոտացում",
    srv_1_desc: "Արևային ֆերմաների և տանիքային կայանների ավտոմատացված ու ռոբոտացված լվացման համակարգեր։",
    srv_1_f1: "Փոշու և աղտոտվածության հեռացում 99.2% արդյունավետությամբ",
    srv_1_f2: "Էներգիայի արտադրողականության մինչև 30% վերականգնում",
    srv_1_f3: "Առանց ջրի չոր մաքրման արտոնագրված տեխնոլոգիա",
    
    srv_2_title: "🤖 Արդյունաբերական PLC / SCADA",
    srv_2_desc: "PLC/SCADA համակարգերի նախագծում, արտադրական գծերի ավտոմատացում և տվյալների հավաքագրում։",
    srv_2_f1: "Siemens S7, Schneider, Delta PLC ծրագրավորում",
    srv_2_f2: "HMI պանելների և SCADA դիսպետչերական համակարգեր",
    srv_2_f3: "PID control loop-եր և VFD շարժիչների ղեկավարում",

    srv_3_title: "🔬 Custom Hardware & PCB Layout",
    srv_3_desc: "Անհատական պատվերով էլեկտրոնային սալիկների (PCB) նախագծում և ներդրված համակարգերի մշակում։",
    srv_3_f1: "Altium Designer PCB layout (1-8 layer բազմաշերտ սալիկներ)",
    srv_3_f2: "STM32, ESP32, FPGA (Verilog RTL) micro-controller համակարգեր",
    srv_3_f3: "Power electronics, High-speed signal integrity",

    srv_4_title: "🚚 Ավտոնոմ Տրանսպորտային AGV Ռոբոտներ",
    srv_4_desc: "Պահեստային և արտադրական տարածքների համար բեռնատար AGV & AMR ռոբոտների մշակում։",
    srv_4_f1: "LiDAR 2D/3D mapping & SLAM navigation",
    srv_4_f2: "500kg+ բեռնատարողություն և ավտոմատ docking charge",
    srv_4_f3: "Fleet management ծրագրային ինտեգրում",

    srv_5_title: "🌐 Industrial IoT & Remote Telemetry",
    srv_5_desc: "Անլար սենսորային ցանցեր և հեռակա մոնիտորինգի IoT պլատֆորմներ արդյունաբերության համար։",
    srv_5_f1: "LoRaWAN, Wi-Fi, Cellular 4G/5G gateways",
    srv_5_f2: "MQTT, CoAP և REST API Cloud integration",
    srv_5_f3: "Real-time dashboard analytics & Alert systems",

    srv_6_title: "📡 FPGA & Ultra-Low Latency Signal Processing",
    srv_6_desc: "Բարձր հաճախականության տվյալների մշակում Xilinx FPGA և Verilog RTL ճարտարապետության վրա։",
    srv_6_f1: "High-speed ADC/DAC interfaces",
    srv_6_f2: "DSP pipeline ալգորիթմների իրականացում",
    srv_6_f3: "Ultra-fast hardware logic processing (<10ns)",

    learn_more: "Իմանալ ավելին ➔",

    // Stats
    stat_1_label: "Մ² Մաքրված Արևային Պանելներ",
    stat_2_label: "Սարքավորումների Անխափան Աշխատանք",
    stat_3_label: "Ավտոմատացված Արտադրական Նախագծեր",
    stat_4_label: "Հեռակա IoT Մոնիտորինգ & Support",

    // About Page
    about_hero_tag: "ՄԵՐ ՄԱՍԻՆ",
    about_hero_title: "ԻՆԺԵՆԵՐԱԿԱՆ ՄԻՏՔ, ԷԼԵԿՏՐՈՆԻԿԱ ԵՎ ՌՈԲՈՏՈՏԵԽՆԻԿԱ",
    about_hero_desc: "MGG Systems-ը հայկական առաջատար ինժեներական ընկերություն է, որը մասնագիտացված է ավտոմատացման համակարգերի, ռոբոտոտեխնիկայի, custom էլեկտրոնիկայի (PCB Design) և embedded ծրագրավորման մեջ։",
    about_mission_title: "🎯 Մեր Առաքելությունը",
    about_mission_desc: "Ապահովել արդյունաբերական, էներգետիկ և տեխնոլոգիական ոլորտի ընկերություններին ժամանակակից, հուսալի և բարձր արդյունավետությամբ օժտված ռոբոտացված լուծումներով։ Մենք ձգտում ենք դարձնել արտադրական պրոցեսները ավելի անվտանգ, արագ և էներգախնայող։",
    about_rnd_title: "🔬 Տեխնոլոգիական Բազան & R&D",
    about_rnd_desc: "Մեր լաբորատորիայում իրականացվում է 3D CAD մեխանիկական նախագծում, PCB layout Altium Designer-ով և embedded ծրագրավորում C/C++ ու Verilog լեզուներով։ Մենք ունենք սեփական CNC մշակման և տպասալիկների պատրաստման ու թեստավորման հանգույցներ։",
    about_iso_title: "🛡️ Որակի Ստանդարտներ & ISO",
    about_iso_desc: "Մեր կողմից արտադրվող բոլոր էլեկտրոնային սալիկներն ու ռոբոտացված մեխանիզմներն անցնում են էլեկտրամագնիսական համատեղելիության (EMC), ջերմաստիճանային shock-test-երի (-30°C - +65°C) և IP67 խոնավապաշտպանության փորձարկումներ։",
    about_partner_title: "🤝 Ռազմավարական Գործընկերություն",
    about_partner_desc: "Մենք համագործակցում ենք տարածաշրջանի խոշորագույն արևային ֆերմաների, արտադրական գործարանների և տեխնոլոգիական կենտրոնների հետ՝ ապահովելով անհատական ինժեներական մոտեցում յուրաքանչյուր նախագծին։",
    about_roadmap_title: "Մեր Աշխատանքային Փուլերը (Roadmap)",
    step_1_title: "Տեխնիկական Առաջադրանք",
    step_1_desc: "Խնդրի խորքային վերլուծություն, չափագրումներ, պահանջների հավաքագրում և ROI հաշվարկ։",
    step_2_title: "3D CAD & PCB Layout",
    step_2_desc: "Մեխանիկական կառուցվածքի 3D մոդելավորում և էլեկտրոնային սալիկների նախագծում Altium-ով։",
    step_3_title: "Prototyping & Testing",
    step_3_desc: "Պրոտոտիպի պատրաստում, Embedded firmware-ի գրում և լաբորատոր փորձարկումներ։",
    step_4_title: "Deployment & Support",
    step_4_desc: "Տեղադրում օբյեկտում, SCADA ինտեգրում, անձնակազմի ուսուցում և 24/7 երաշխիքային սպասարկում։",

    // Automation Page
    auto_hero_tag: "INDUSTRIAL AUTOMATION & CONTROL SYSTEMS",
    auto_hero_title: "ԱՐԴՅՈՒՆԱԲԵՐԱԿԱՆ ԱՎՏՈՄԱՏԱՑՈՒՄ (PLC, SCADA, HMI, IoT)",
    auto_hero_desc: "Մենք իրականացնում ենք արտադրական պրոցեսների, հոսքագծերի, պոմպակայանների և էներգետիկ հանգույցների ավտոմատացում։",
    auto_modules_title: "Ավտոմատացման 6 Հիմնական Մոդուլները",
    auto_m1_title: "⚙️ PLC Ծրագրավորում (Siemens, Schneider)",
    auto_m1_desc: "Siemens S7-1200/1500, Schneider Modicon, Delta, Allen Bradley PLC-ների ծրագրավորում Ladder, FBD, SCL լեզուներով։",
    auto_m2_title: "🖥️ SCADA & HMI Ինտերֆեյսներ",
    auto_m2_desc: "Siemens WinCC, Ignition, Wonderware SCADA դիսպետչերական համակարգեր real-time trend-երով և վթարային ազդանշաններով։",
    auto_m3_title: "⚡ VFD & Servo Motion Control",
    auto_m3_desc: "Հաճախականային կարգավորիչների (VFD) և Servo շարժիչների ղեկավարում՝ ճշգրիտ դիրքավորման ու էներգախնայողության համար։",
    auto_m4_title: "🎛️ Էլեկտրական Վահանների Հավաքում",
    auto_m4_desc: "Արդյունաբերական ղեկավարման վահանների (Control Cabinets) նախագծում և հավաքում՝ IP65/IP67 չափանիշներով։",
    auto_m5_title: "📡 Modbus / Profinet / CAN Networks",
    auto_m5_desc: "Արդյունաբերական ցանցային պրոտոկոլների կարգավորում, տվյալների անխափան փոխանցում սենսորներից դեպի սերվեր։",
    auto_m6_title: "🚨 Safety Systems & Interlocks",
    auto_m6_desc: "Վթարային կանգի, անվտանգության լազերային արգելապատնեշների և hardware interlock-երի ինտեգրում։",

    // Hardware Page
    hw_hero_tag: "EMBEDDED HARDWARE DESIGN",
    hw_hero_title: "CUSTOM ԷԼԵԿՏՐՈՆԱՅԻՆ ՍԱԼԻԿՆԵՐԻ (PCB) ՆԱԽԱԳԾՈՒՄ ԵՎ EMBEDDED ԾՐԱԳՐԱՎՈՒՄ",
    hw_hero_desc: "Մենք մշակում ենք հատուկ ձեր նախագծի համար օպտիմալացված էլեկտրոնային սալիկներ (PCB) և ներդրված (Embedded) ծրագրակազմ։",
    hw_directions_title: "Hardware Engineering Ուղղությունները",
    hw_d1_title: "📐 Altium Designer Multilayer PCB",
    hw_d1_desc: "1-ից 8 շերտանի բարդ տպասալիկների (PCB Layout) նախագծում High-Speed Routing-ով և Signal Integrity հաշվարկներով։",
    hw_d2_title: "🧠 STM32 & ESP32 Microcontrollers",
    hw_d2_desc: "ARM Cortex-M0/M4/M7 և ESP32 հենքով ներդրված համակարգերի (Embedded C/C++) ծրագրավորում Real-Time OS (FreeRTOS) միջավայրում։",
    hw_d3_title: "📡 FPGA RTL Design (Verilog)",
    hw_d3_desc: "Xilinx/Intel FPGA-ների վրա թվային տրամաբանության մշակում Verilog RTL լեզվով ultra-fast DSP ազդանշանների մշակման համար։",
    hw_d4_title: "🔋 Power Electronics & BLDC Drivers",
    hw_d4_desc: "Բարձր հզորության MOSFET/IGBT H-Bridge դրայվերների, DC-DC converter-ների և LiFePO4 BMS սալիկների նախագծում։",
    hw_d5_title: "🌐 Wireless Interfaces (LoRa, CAN, RS485)",
    hw_d5_desc: "LoRaWAN, Wi-Fi, Bluetooth LE, Isolated CAN Bus և RS485 Modbus ինտերֆեյսների hardware ինտեգրում։",
    hw_d6_title: "🛠️ Rapid Prototyping & Assembly",
    hw_d6_desc: "SMD/THD էլեկտրոնային բաղադրիչների մոնտաժում, stencil printing, reflow soldering և oscilloscope testing։",

    // Projects Page
    proj_hero_tag: "PORTFOLIO & CASE STUDIES",
    proj_hero_title: "ԻՐԱԿԱՆԱՑՎԱԾ ՆԱԽԱԳԾԵՐ ԵՎ ԻՆԺԵՆԵՐԱԿԱՆ ԼՈՒԾՈՒՄՆԵՐ",
    proj_hero_desc: "Սեղմեք ցանկացած նախագծի վրա՝ դրա ամբողջական տեխնիկական նկարագրությանը, չափանիշներին և ճարտարապետությանը ծանոթանալու համար։",
    p1_title: "☀️ MGG Solar Clean Robot Platform",
    p1_desc: "Արևային ֆերմաների համար ռելսային ավտոմատացված մաքրման ռոբոտացված համակարգ՝ ինքնալիցքավորման կայանով։",
    p1_f1: "Մաքրվող տարածք՝ 10,000+ մ²",
    p1_f2: "Արտադրողականության աճ՝ +24%",

    p2_title: "🤖 Custom Track Automation Platform (AGV)",
    p2_desc: "Արտադրական տարածքում ծանր բեռների ավտոմատացված տեղափոխման ռոբոտացված պլատֆորմ։",
    p2_f1: "Բեռնատարողություն՝ 500 կգ",
    p2_f2: "Լազերային նավիգացիա & Obstacle Avoidance",

    p3_title: "⚡ HMI & SCADA Dispatching Unit",
    p3_desc: "Արդյունաբերական պոմպակայանի հեռակա դիսպետչերական ղեկավարման համակարգ Siemens PLC հենքով։",
    p3_f1: "RS485/Modbus RTU ցանց",
    p3_f2: "Real-time graphical HMI interface",

    p4_title: "🔬 Custom BLDC Motor Controller Board",
    p4_desc: "Քայլային (Stepper) և BLDC շարժիչների ղեկավարման բարձր հզորության էլեկտրոնային սալիկ (STM32/CAN):",
    p4_f1: "4-Layer Board Design (Altium)",
    p4_f2: "CAN Bus / Isolated RS485 Interface",

    p5_title: "📡 High-Speed Signal Processor",
    p5_desc: "Xilinx FPGA-ի վրա հիմնված թվային ազդանշանային մշակման սալիկ՝ բարձր հաճախականության տվյալների հավաքագրման համար։",
    p5_f1: "Verilog RTL Design",
    p5_f2: "Ultra-low Latency processing",

    p6_title: "🌐 Smart Agro Climate Monitor",
    p6_desc: "Ջերմոցային համալիրների կլիմայի ավտոմատ հսկման IoT սարքավորումներ Cloud dashboard ինտեգրմամբ։",
    p6_f1: "ESP32 / Wi-Fi / LoRa connectivity",
    p6_f2: "MQTT Protocol Integration",

    p7_title: "🔋 Industrial LiFePO4 Smart BMS Controller",
    p7_desc: "48V 100Ah LiFePO4 մարտկոցային բլոկների ինտելեկտուալ BMS համակարգ հավասարակշռմամբ (Active Balancing):",
    p7_f1: "High-precision cell monitoring",
    p7_f2: "CAN bus / Modbus RTU telemetry",

    p8_title: "🏭 High-Speed Bottling Conveyor Automation",
    p8_desc: "Ըմպելիքների լցնման ավտոմատացված հոսքագծի ղեկավարում Schneider Modicon PLC-ի և optical sensor-ների միջոցով։",
    p8_f1: "12,000 շիշ/ժամ արտադրողականություն",
    p8_f2: "Automated defect rejection mechanism",

    p9_title: "🏢 Commercial Rooftop Lightweight Cleaner",
    p9_desc: "Կոմերցիոն շենքերի տանիքների արևային պանելների համար նախատեսված ultra-lightweight (15կգ) ռոբոտ։",
    p9_f1: "Wireless Remote Control",
    p9_f2: "Compact transportable frame",

    view_detail: "Դիտել Մանրամասն ➔",

    // Project Detail Section
    pd_back_btn: "⬅️ Վերադառնալ Նախագծերին",
    pd_meta_status: "Կարգավիճակ",
    pd_meta_duration: "Ժամկետ",
    pd_meta_tech: "Տեխնոլոգիաներ",
    pd_meta_roi: "ՕԳԳ Աճ / ROI",
    pd_problem_title: "📋 Նախագծի Խնդիրը & Մարտահրավերը",
    pd_solution_title: "💡 Ինժեներական Լուծումը",
    pd_specs_title: "Մանրամասն Տեխնիկական Պարամետրեր",
    pd_table_h_param: "Հանգույց / Պարամետր",
    pd_table_h_desc: "Մանրամասն Նկարագրություն",
    pd_cta_title: "Ցանկանո՞ւմ եք նմանատիպ լուծում ձեր օբյեկտի համար",
    pd_cta_desc: "Կապնվեք մեր ինժեներական թիմի հետ՝ անվճար տեխնիկական խորհրդատվություն և նախահաշիվ ստանալու համար։",
    pd_cta_btn: "Պատվիրել Խորհրդատվություն ➔",

    // FAQ Page
    faq_hero_tag: "QUESTIONS & ANSWERS",
    faq_hero_title: "ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ (FAQ)",
    faq_hero_desc: "Գտեք պատասխաններ մեր ծառայությունների, տեխնիկական երաշխիքների և համագործակցության վերաբերյալ։",
    faq_q1: "1. Որքա՞ն է պատվերի պատրաստման և ներդրման ժամկետը։",
    faq_a1: "Ստանդարտ արևային մաքրման ռոբոտները պատրաստ են լինում 2-3 շաբաթում։ Բարդ PLC/SCADA ավտոմատացման կամ custom PCB նախագծերը տևում են 4-ից 8 շաբաթ։",
    faq_q2: "2. Տալի՞ս եք արդյունաբերական երաշխիք և սպասարկում։",
    faq_a2: "Այո, մեր բոլոր պատրաստի սարքավորումներին տրամադրվում է 12-ից 36 ամսվա պաշտոնական երաշխիք և հետերաշխիքային 24/7 տեխնիկական սպասարկում։",
    faq_q3: "3. Ինչպե՞ս է իրականացվում Custom PCB էլեկտրոնային սալիկի պատվերը։",
    faq_a3: "Դուք ներկայացնում եք տեխնիկական առաջադրանքը, մենք մշակում ենք սխեման (Schematic), կատարում ենք PCB Layout-ը Altium-ով, պատրաստում պրոտոտիպը և թեստավորում լաբորատորիայում։",
    faq_q4: "4. Արդյո՞ք MGG ռոբոտները վնասում են արևային պանելների ապակին։",
    faq_a4: "Ոչ, մեր ռոբոտներում օգտագործվում են հատուկ փափուկ micro-fiber չոր խոզանակներ և ռեզինե թրթուրներ, որոնք բացառում են քերծվածքների առաջացումը։",
    faq_q5: "5. Կարո՞ղ ենք ինտեգրել ձեր սարքավորումները մեր գործող SCADA համակարգին։",
    faq_a5: "Այո, մեր բոլոր կոնտրոլերներն աջակցում են Modbus RTU/TCP, Profinet, CAN bus և MQTT պրոտոկոլները, ինչը թույլ է տալիս հեշտությամբ միանալ ցանկացած SCADA-ի։",
    faq_q6: "6. Ինչպե՞ս է իրականացվում ռոբոտի լիցքավորումը դաշտային պայմաններում։",
    faq_a6: "Ռոբոտներն ունեն իրենց վրա տեղադրված սեփական արևային մարտկոց և LiFePO4 ակումուլյատոր, ինչպես նաև ավտոմատ Docking Station ինքնալիցքավորման համար։",
    faq_q7: "7. Ինչպե՞ս է հաշվարկվում ավտոմատացման նախագծի արժեքը։",
    faq_a7: "Արժեքը ձևավորվում է բաղադրիչների (hardware), ծրագրավորման ծավալի (firmware/PLC) և տեղադրման/կարգաբերման աշխատանքների հիման վրա։",
    faq_q8: "8. Իրականացնո՞ւմ եք արտահանում կամ միջազգային պատվերներ։",
    faq_a8: "Այո, մեր պատրաստի սարքավորումներն ու էլեկտրոնային սալիկները կարող են առաքվել և տեղադրվել ցանկացած երկրում։",

    // Contact Page
    contact_title: "Կապնվել Մեզ Հետ",
    contact_subtitle: "Ուղարկեք հարցում կամ պատվիրեք անվճար տեխնիկական խորհրդատվություն",
    form_label_name: "Անուն Ազգանուն *",
    form_label_phone: "Հեռախոսահամար *",
    form_label_email: "Էլ․ Փոստ",
    form_label_select: "Հետաքրքրող Ուղղությունը",
    opt_solar: "Արևային Կայանների Ավտոմատ Մաքրում",
    opt_auto: "Արդյունաբերական Ավտոմատացում (PLC/SCADA)",
    opt_pcb: "Custom PCB & Embedded Hardware Design",
    opt_agv: "AGV/AMR Բեռնատար Ռոբոտներ",
    opt_iot: "Industrial IoT & Telemetry Systems",
    form_label_message: "Հաղորդագրություն",
    form_btn_submit: "Ուղարկել Հայտը",
    info_address_title: "📍 Արտադրամաս և Գրասենյակ",
    info_address_text: "ք. Երևան, Մուրացան փ․ (Արտադրական մասնաշենք)",
    info_hours_text: "Աշխատանքային ժամեր: Երկ - Ուրբ (09:00 - 18:00)",
    info_phone_title: "📞 Հեռախոսակապ",
    info_phone_main: "+374 44 77-47-48 (Գրասենյակ)",
    info_phone_tech: "+374 99 00-00-00 (Տեխնիկական բաժին)",
    info_email_title: "✉️ Էլեկտրոնային Փոստ",
// translations.hy-ի մեջ ավելացրու.
sol_hero_tag: "ՄԱՍՆԱԳԻՏԱՑՎԱԾ ՈՒՂՂՈՒԹՅՈՒՆ",
sol_hero_title: "ԱՐԵՎԱՅԻՆ ԿԱՅԱՆՆԵՐԻ ՌՈԲՈՏԱՑՎԱԾ ՄԱՔՐՈՒՄ ԵՎ ՄՈՆԻՏՈՐԻՆԳ",
sol_hero_desc: "MGG Systems-ի ռոբոտացված լուծումներն ապահովում են պանելների կատարյալ մաքրություն՝ վերականգնելով էներգիայի արտադրողականությունը։",
sol_models_title: "Արևային Ռոբոտացված Մոդելների Շարք",
sol_models_subtitle: "Մենք առաջարկում ենք ինչպես ստանդարտ, այնպես էլ custom պատվերով պատրաստվող ռոբոտացված համակարգեր։",
sol_m1_desc: "Ռելսային անխափան ավտոմատացված համակարգ՝ ինքնալիցքավորվող մարտկոցով խոշոր արևային ֆերմաների համար։",
sol_m1_f1: "Ավտոնոմ չոր մաքրում micro-fiber խոզանակով",
sol_m1_f2: "LoRa/RS485 հեռակա ղեկավարում",
sol_m2_desc: "Թեթև քաշով (18 կգ) տեղափոխվող ռոբոտ՝ տանիքային և փոքր/միջին կայանների համար։",
sol_m2_f1: "Ռեզինե թրթուրավոր ընթացք (no-slip tracks)",
sol_m2_f2: "Distance/Edge optical sensors",
sol_m3_desc: "Անհատական ինժեներական նախագծում բարդ տեղանքով և խոշոր արդյունաբերական կայանների համար։",
sol_m3_f1: "Մինչև 40° թեքության անկյան հաղթահարում",
sol_m3_f2: "IP67 heavy-duty waterproof housing",
sol_m4_desc: "Հիբրիդային ռոբոտ՝ ճնշումային ջրային ցողիչներով և չոր խոզանակով կոշտ աղտոտվածության համար։",
sol_m4_f1: "Low-water consumption nozzles",
sol_m4_f2: "Dual-brush counter-rotation system",
sol_m5_desc: "Բազմառոբոտ համակարգ կենտրոնական լիցքավորման կայանով խոշոր 10MW+ ֆերմաների համար։",
sol_m5_f1: "Central Docking station with Auto-Charging",
sol_m5_f2: "Scheduled daily cleaning programs",
sol_m6_desc: "Անօդաչու/ռոբոտացված ինսպեկցիոն սարք՝ թերմալ տեսախցիկով պանելների hot-spot-երը հայտնաբերելու համար։",
sol_m6_f1: "Thermal IR camera inspection",
sol_m6_f2: "Automated fault reporting via Cloud",
sol_cmp_title: "Չոր Մաքրում vs Ջրով Լվացում",
sol_th_param: "Պարամետր",
sol_th_mgg: "MGG Dry Cleaning Robot",
sol_th_trad: "Ավանդական Ջրով Լվացում",
sol_tr1_param: "Ջրի Ծախս",
sol_tr1_mgg: "0 Լիտր (100% Խնայողություն)",
sol_tr1_trad: "3-5 Լիտր / մ² (Մեծ ծախս)",
sol_tr2_param: "ՕԳԳ-ի Վերականգնում",
sol_tr2_mgg: "մինչև 99.2%",
sol_tr2_trad: "85-90% (Ջրային բծերի պատճառով)",
sol_tr3_param: "Աշխատանքային Ջերմաստիճան",
sol_tr3_mgg: "-25°C-ից +60°C (Ցանկացած եղանակի)",
sol_tr3_trad: "Միայն առավոտյան / երեկոյան (ջերմային շոկի ռիսկ)",
sol_tr4_param: "Մարդկային Աշխատուժ",
sol_tr4_mgg: "100% Ավտոմատացված / 1 օպերատոր",
sol_tr4_trad: "4-8 աշխատակից",
sol_calc_title: "Արդյունավետության & ROI Հաշվիչ",
sol_calc_lbl_power: "Կայանի Հզորությունը (կՎտ/kW):",
sol_calc_lbl_tariff: "Էլ․ էներգիայի սակագինը (դրամ / կՎտժ):",
sol_calc_lbl_loss: "Փոշոտվածության պատճառով կորուստ (%):",
sol_calc_lbl_result: "Տարեկան Վերականգնվող Օգուտը.",
    // Footer
    footer_about: "Բարձր տեխնոլոգիական ինժեներական լուծումներ, ռոբոտոսարքավորումների արտադրություն, PLC/SCADA ավտոմատացում և custom էլեկտրոնային սալիկների (PCB) նախագծում։",
    footer_nav_title: "Նավիգացիա",
    footer_services_title: "Ծառայություններ",
    footer_contacts_title: "Կոնտակտներ",
    footer_address: "📍 ք. Երևան, Մուրացան փ․",
    footer_copy: "© 2026 MGG Systems. Բոլոր իրավունքները պաշտպանված են։ | Industrial Engineering & Robotics Solutions"
  },

  en: {
    // Header & Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_solar: "☀️ Solar Clean",
    nav_automation: "⚙️ PLC / SCADA",
    nav_hardware: "🔬 Custom Hardware & PCB",
    nav_projects: "Projects",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_contact: "Contact Us",
sol_hero_tag: "SPECIALIZED DOMAIN",
sol_hero_title: "SOLAR PLANT ROBOTIC CLEANING & MONITORING",
sol_hero_desc: "MGG Systems robotic solutions ensure perfect panel cleanliness, fully restoring energy generation efficiency.",
sol_models_title: "Solar Robot Model Range",
sol_models_subtitle: "We offer both standard and custom engineered robotic cleaning systems.",
sol_m1_desc: "Automated rail system with self-charging docking for utility-scale solar farms.",
sol_m1_f1: "Autonomous dry cleaning via micro-fiber brush",
sol_m1_f2: "LoRa/RS485 remote control & telemetry",
sol_m2_desc: "Lightweight (18 kg) portable robot for rooftop and small/medium solar arrays.",
sol_m2_f1: "Non-marking rubber tracks (no-slip)",
sol_m2_f2: "Distance/Edge optical collision sensors",
sol_m3_desc: "Custom engineered platform for complex terrain and large industrial sites.",
sol_m3_f1: "Climbs up to 40° tilt angles",
sol_m3_f2: "IP67 heavy-duty waterproof housing",
sol_m4_desc: "Hybrid cleaning robot with pressurized water sprayers and dry brushes for tough dirt.",
sol_m4_f1: "Low-water consumption nozzles",
sol_m4_f2: "Dual-brush counter-rotation system",
sol_m5_desc: "Multi-robot fleet platform with central docking station for 10MW+ solar farms.",
sol_m5_f1: "Central Docking station with Auto-Charging",
sol_m5_f2: "Scheduled daily cleaning programs",
sol_m6_desc: "Robotic inspection unit equipped with thermal IR cameras to detect panel hot-spots.",
sol_m6_f1: "Thermal IR camera inspection",
sol_m6_f2: "Automated fault reporting via Cloud",
sol_cmp_title: "Dry Cleaning vs Water Washing",
sol_th_param: "Parameter",
sol_th_mgg: "MGG Dry Cleaning Robot",
sol_th_trad: "Traditional Water Washing",
sol_tr1_param: "Water Consumption",
sol_tr1_mgg: "0 Liters (100% Water Saved)",
sol_tr1_trad: "3-5 Liters / m² (High Cost)",
sol_tr2_param: "Yield Recovery",
sol_tr2_mgg: "Up to 99.2%",
sol_tr2_trad: "85-90% (Water spots reduction)",
sol_tr3_param: "Operating Temperature",
sol_tr3_mgg: "-25°C to +60°C (All weather)",
sol_tr3_trad: "Mornings/Evenings only (Thermal shock risk)",
sol_tr4_param: "Human Labor Required",
sol_tr4_mgg: "100% Automated / 1 operator",
sol_tr4_trad: "4-8 Workers required",
sol_calc_title: "Efficiency & ROI Calculator",
sol_calc_lbl_power: "Plant Capacity (kW):",
sol_calc_lbl_tariff: "Electricity Tariff (AMD / kWh):",
sol_calc_lbl_loss: "Soiling Yield Loss (%):",
sol_calc_lbl_result: "Annual Recovered Benefit:",
    // Home Page
    hero_tag: "ENGINEERING SOLUTIONS, EMBEDDED SYSTEMS & ROBOTICS",
    hero_title: "HIGH-PRECISION AUTOMATED SYSTEMS FOR INDUSTRY",
    hero_desc: "MGG Systems specializes in intelligent robotic units, industrial PLC/SCADA automation, custom printed circuit board (PCB) design, and specialized mechanical engineering.",
    hero_btn_solar: "☀️ Solar Systems ➔",
    hero_btn_automation: "⚙️ Industrial Automation",

    // Features Bar
    feat_1_title: "📈 Maximum Efficiency",
    feat_1_desc: "Process automation increases overall yield and eliminates human factor errors.",
    feat_2_title: "🛡️ IP67 Protection",
    feat_2_desc: "Hardware is designed to reliably operate in extreme temperatures (-30°C to +65°C).",
    feat_3_title: "⚙️ Autonomous & IoT",
    feat_3_desc: "RS485/Modbus, CAN bus, Cloud monitoring, real-time data acquisition.",
    feat_4_title: "🌿 Eco-Friendly & Energy Saving",
    feat_4_desc: "Optimized power consumption, dry cleaning technology, and sustainable operations.",
    feat_5_title: "⚡ Ultra-Fast Response",
    feat_5_desc: "24/7 emergency telemetry alerts with high-availability Cloud architecture.",
    feat_6_title: "🔒 Industrial Cybersecurity",
    feat_6_desc: "Secured data transfer protocols and encrypted firmware algorithms.",
    feat_7_title: "🧩 Modular Hardware Design",
    feat_7_desc: "Modular electronic and mechanical components for quick servicing and expansion.",
    feat_8_title: "🏆 ISO Quality Standards",
    feat_8_desc: "All hardware undergoes rigorous laboratory test-runs and quality assurance.",

    // Home Services Grid
    services_title: "6 Key Engineering Domains",
    services_subtitle: "Our multidisciplinary engineering team solves complex technical tasks across key domains.",
    srv_1_title: "☀️ Solar Plant Robotics",
    srv_1_desc: "Automated robotic cleaning and monitoring systems for utility-scale and rooftop solar plants.",
    srv_1_f1: "Dust & soil removal with up to 99.2% efficiency",
    srv_1_f2: "Restores power yield up to 30%",
    srv_1_f3: "Patented dry-cleaning waterless technology",

    srv_2_title: "🤖 Industrial PLC / SCADA",
    srv_2_desc: "Complete PLC/SCADA systems engineering, production line control, and telemetry setup.",
    srv_2_f1: "Siemens S7, Schneider, Delta PLC programming",
    srv_2_f2: "HMI panels and centralized SCADA dispatching",
    srv_2_f3: "PID control loops and VFD motor drive integration",

    srv_3_title: "🔬 Custom Hardware & PCB Layout",
    srv_3_desc: "End-to-end electronic circuit design, multi-layer PCB layout, and embedded firmware programming.",
    srv_3_f1: "Altium Designer PCB layout (1-8 layer multi-layer boards)",
    srv_3_f2: "STM32, ESP32, FPGA (Verilog RTL) controller designs",
    srv_3_f3: "Power electronics & high-speed signal integrity",

    srv_4_title: "🚚 Autonomous AGV / AMR Robots",
    srv_4_desc: "Development of heavy-load AGV & AMR transport robots for logistics and warehouse automation.",
    srv_4_f1: "LiDAR 2D/3D mapping & SLAM navigation",
    srv_4_f2: "500kg+ payload capacity with auto docking charge",
    srv_4_f3: "Fleet management software integration",

    srv_5_title: "🌐 Industrial IoT & Remote Telemetry",
    srv_5_desc: "Wireless sensor networks and remote monitoring IoT platforms for smart industrial units.",
    srv_5_f1: "LoRaWAN, Wi-Fi, Cellular 4G/5G gateways",
    srv_5_f2: "MQTT, CoAP, and REST API Cloud integration",
    srv_5_f3: "Real-time dashboard analytics & Alert systems",

    srv_6_title: "📡 FPGA & Ultra-Low Latency DSP",
    srv_6_desc: "High-frequency real-time signal processing based on Xilinx FPGA and Verilog RTL architectures.",
    srv_6_f1: "High-speed ADC/DAC interfaces",
    srv_6_f2: "DSP pipeline algorithms implementation",
    srv_6_f3: "Ultra-fast hardware logic processing (<10ns)",

    learn_more: "Learn More ➔",

    // Stats
    stat_1_label: "M² Cleaned Solar Panels",
    stat_2_label: "Uptime Hardware Reliability",
    stat_3_label: "Automated Industrial Projects",
    stat_4_label: "Remote IoT Monitoring & Support",

    // About Page
    about_hero_tag: "ABOUT US",
    about_hero_title: "ENGINEERING MINDSET, ELECTRONICS & ROBOTICS",
    about_hero_desc: "MGG Systems is a leading Armenian engineering company specializing in industrial automation, robotics, custom electronics (PCB Layout), and embedded firmware.",
    about_mission_title: "🎯 Our Mission",
    about_mission_desc: "To empower industrial, energy, and tech enterprises with modern, highly reliable, and efficient robotic solutions, making production processes safer, faster, and energy-efficient.",
    about_rnd_title: "🔬 Technological Base & R&D",
    about_rnd_desc: "Our lab carries out 3D CAD mechanical modeling, PCB layout in Altium Designer, and embedded firmware development in C/C++ and Verilog. We operate CNC processing and PCB testing stations.",
    about_iso_title: "🛡️ Quality Standards & ISO",
    about_iso_desc: "All manufactured hardware undergoes rigorous Electromagnetic Compatibility (EMC), thermal shock testing (-30°C to +65°C), and IP67 ingress protection verification.",
    about_partner_title: "🤝 Strategic Partnership",
    about_partner_desc: "We partner with major solar farms, manufacturing plants, and industrial complexes in the region, bringing a customized engineering approach to every project.",
    about_roadmap_title: "Our Development Roadmap",
    step_1_title: "Requirement Engineering",
    step_1_desc: "In-depth problem analysis, field measurement, system requirements specification, and ROI calculation.",
    step_2_title: "3D CAD & PCB Layout",
    step_2_desc: "Mechanical 3D modeling and multi-layer PCB layout design using Altium Designer.",
    step_3_title: "Prototyping & Testing",
    step_3_desc: "Hardware assembly, Embedded firmware writing, and lab validation tests.",
    step_4_title: "Deployment & Support",
    step_4_desc: "On-site installation, SCADA integration, staff training, and 24/7 technical warranty support.",

    

    // Automation Page
    auto_hero_tag: "INDUSTRIAL AUTOMATION & CONTROL SYSTEMS",
    auto_hero_title: "INDUSTRIAL AUTOMATION (PLC, SCADA, HMI, IoT)",
    auto_hero_desc: "We deliver full-cycle industrial process automation, conveyor lines, pumping stations, and energy units control.",
    auto_modules_title: "6 Core Automation Modules",
    auto_m1_title: "⚙️ PLC Programming (Siemens, Schneider)",
    auto_m1_desc: "Siemens S7-1200/1500, Schneider Modicon, Delta, Allen Bradley PLCs programmed via Ladder, FBD, and SCL.",
    auto_m2_title: "🖥️ SCADA & HMI Interfaces",
    auto_m2_desc: "Siemens WinCC, Ignition, Wonderware SCADA systems with real-time trends and alarms.",
    auto_m3_title: "⚡ VFD & Servo Motion Control",
    auto_m3_desc: "Variable Frequency Drives (VFD) and Servo drive control for exact positioning and energy saving.",
    auto_m4_title: "🎛️ Control Cabinet Assembly",
    auto_m4_desc: "Custom industrial control panel design and electrical assembly compliant with IP65/IP67 standards.",
    auto_m5_title: "📡 Modbus / Profinet / CAN Networks",
    auto_m5_desc: "Industrial fieldbus setup ensuring seamless data flow from field sensors to servers.",
    auto_m6_title: "🚨 Safety Systems & Interlocks",
    auto_m6_desc: "Emergency stop circuits, laser safety barriers, and hardware interlock system integration.",

    // Hardware Page
    hw_hero_tag: "EMBEDDED HARDWARE DESIGN",
    hw_hero_title: "CUSTOM PCB DESIGN & EMBEDDED SYSTEM DEVELOPMENT",
    hw_hero_desc: "We design high-performance electronic boards (PCB) and low-level firmware tailored to your specific hardware requirements.",
    hw_directions_title: "Hardware Engineering Capabilities",
    hw_d1_title: "📐 Altium Designer Multilayer PCB",
    hw_d1_desc: "1 to 8 layer PCB layout with high-speed differential routing and signal integrity optimization.",
    hw_d2_title: "🧠 STM32 & ESP32 Microcontrollers",
    hw_d2_desc: "ARM Cortex-M0/M4/M7 and ESP32 embedded software development running under FreeRTOS.",
    hw_d3_title: "📡 FPGA RTL Design (Verilog)",
    hw_d3_desc: "Digital logic design on Xilinx/Intel FPGAs in Verilog RTL for ultra-fast DSP signal processing.",
    hw_d4_title: "🔋 Power Electronics & BLDC Drivers",
    hw_d4_desc: "High-power MOSFET/IGBT H-Bridge motor drivers, DC-DC converters, and BMS board design.",
    hw_d5_title: "🌐 Wireless Interfaces (LoRa, CAN, RS485)",
    hw_d5_desc: "Hardware integration of LoRaWAN, Wi-Fi, BLE, Isolated CAN Bus, and RS485 Modbus.",
    hw_d6_title: "🛠️ Rapid Prototyping & Assembly",
    hw_d6_desc: "In-house SMD/THD assembly, stencil printing, reflow soldering, and oscilloscope validation.",

    // Projects Page
    proj_hero_tag: "PORTFOLIO & CASE STUDIES",
    proj_hero_title: "COMPLETED ENGINEERING PROJECTS",
    proj_hero_desc: "Click on any project card below to read detailed technical specifications, parameters, and architecture.",
    p1_title: "☀️ MGG Solar Clean Robot Platform",
    p1_desc: "Autonomous tracked rail cleaning system with auto-docking charging station for solar farms.",
    p1_f1: "Cleaned Area: 10,000+ m²",
    p1_f2: "Efficiency Gain: +24%",

    p2_title: "🤖 Custom Track Automation Platform (AGV)",
    p2_desc: "Heavy-duty automated guided transport vehicle for indoor factory material handling.",
    p2_f1: "Payload Capacity: 500 kg",
    p2_f2: "Laser Navigation & Obstacle Avoidance",

    p3_title: "⚡ HMI & SCADA Dispatching Unit",
    p3_desc: "Remote SCADA telemetry and control unit for municipal pumping stations powered by Siemens PLC.",
    p3_f1: "RS485/Modbus RTU Network",
    p3_f2: "Real-time Graphical HMI Interface",

    p4_title: "🔬 Custom BLDC Motor Controller Board",
    p4_desc: "High-power driver board for Stepper and BLDC motor control built on STM32 with CAN interface.",
    p4_f1: "4-Layer Board Design (Altium)",
    p4_f2: "CAN Bus / Isolated RS485 Interface",

    p5_title: "📡 High-Speed Signal Processor",
    p5_desc: "Digital signal processing board based on Xilinx FPGA for ultra-high frequency data acquisition.",
    p5_f1: "Verilog RTL Design",
    p5_f2: "Ultra-low Latency processing",

    p6_title: "🌐 Smart Agro Climate Monitor",
    p6_desc: "Industrial IoT environmental monitoring controller for commercial greenhouses with Cloud analytics.",
    p6_f1: "ESP32 / Wi-Fi / LoRa Connectivity",
    p6_f2: "MQTT Protocol Integration",

    p7_title: "🔋 Industrial LiFePO4 Smart BMS Controller",
    p7_desc: "Smart 48V 100Ah LiFePO4 battery management controller with active balancing hardware.",
    p7_f1: "High-precision cell monitoring",
    p7_f2: "CAN bus / Modbus RTU telemetry",

    p8_title: "🏭 High-Speed Bottling Conveyor Automation",
    p8_desc: "Fully automated beverage conveyor line control system based on Schneider Modicon PLC.",
    p8_f1: "12,000 bottles/hour capacity",
    p8_f2: "Automated defect rejection mechanism",

    p9_title: "🏢 Commercial Rooftop Lightweight Cleaner",
    p9_desc: "Ultra-lightweight (15kg) portable robot designed for commercial rooftop solar panel arrays.",
    p9_f1: "Wireless Remote Control",
    p9_f2: "Compact transportable frame",

    view_detail: "View Details ➔",

    // Project Detail Section
    pd_back_btn: "⬅️ Back to Projects",
    pd_meta_status: "Status",
    pd_meta_duration: "Duration",
    pd_meta_tech: "Technologies",
    pd_meta_roi: "ROI / Efficiency",
    pd_problem_title: "📋 Problem & Challenge",
    pd_solution_title: "💡 Engineering Solution",
    pd_specs_title: "Detailed Technical Parameters",
    pd_table_h_param: "Unit / Parameter",
    pd_table_h_desc: "Detailed Description",
    pd_cta_title: "Need a similar solution for your facility?",
    pd_cta_desc: "Get in touch with our engineering team for a free technical consultation and cost estimate.",
    pd_cta_btn: "Request Consultation ➔",

    // FAQ Page
    faq_hero_tag: "QUESTIONS & ANSWERS",
    faq_hero_title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
    faq_hero_desc: "Find quick answers regarding our engineering services, warranties, and collaboration workflow.",
    faq_q1: "1. What is the typical turnaround time for orders?",
    faq_a1: "Standard solar cleaning robots are ready within 2-3 weeks. Complex PLC/SCADA or custom PCB engineering takes 4 to 8 weeks.",
    faq_q2: "2. Do you provide industrial warranty and maintenance?",
    faq_a2: "Yes, all our manufactured equipment comes with a 12-36 month official warranty and 24/7 post-warranty service.",
    faq_q3: "3. How does the Custom PCB design process work?",
    faq_a3: "You provide the specifications, we design the Schematic & Altium PCB layout, build the physical prototype, and validate it in our lab.",
    faq_q4: "4. Do MGG robots scratch or damage solar panel glass?",
    faq_a4: "No, our robots utilize specialized ultra-soft micro-fiber dry brushes and non-marking rubber tracks that eliminate scratching.",
    faq_q5: "5. Can your hardware integrate into our existing SCADA systems?",
    faq_a5: "Yes, our controllers natively support Modbus RTU/TCP, Profinet, CAN bus, and MQTT for seamless integration.",
    faq_q6: "6. How do the robots charge in remote off-grid fields?",
    faq_a6: "Each robot features an onboard solar panel with LiFePO4 batteries and an automatic Docking Station for autonomous auto-charging.",
    faq_q7: "7. How is an automation project cost estimated?",
    faq_a7: "The cost is calculated based on hardware components, software/firmware scope, and on-site commissioning work.",
    faq_q8: "8. Do you ship or deploy hardware internationally?",
    faq_a8: "Yes, our manufactured devices and custom PCB units can be shipped and installed worldwide.",

    // Contact Page
    contact_title: "Contact Us",
    contact_subtitle: "Send us a message or request a free technical consultation",
    form_label_name: "Full Name *",
    form_label_phone: "Phone Number *",
    form_label_email: "Email Address",
    form_label_select: "Field of Interest",
    opt_solar: "Solar Panel Automated Cleaning",
    opt_auto: "Industrial Automation (PLC/SCADA)",
    opt_pcb: "Custom PCB & Embedded Hardware Design",
    opt_agv: "AGV/AMR Logistics Robots",
    opt_iot: "Industrial IoT & Telemetry Systems",
    form_label_message: "Your Message",
    form_btn_submit: "Send Request",
    info_address_title: "📍 Workshop & Office",
    info_address_text: "Yerevan, Muratsan St. (Industrial Complex)",
    info_hours_text: "Working Hours: Mon - Fri (09:00 - 18:00)",
    info_phone_title: "📞 Phone Contacts",
    info_phone_main: "+374 44 77-47-48 (Office)",
    info_phone_tech: "+374 99 00-00-00 (Technical Dept)",
    info_email_title: "✉️ Email",

    // Footer
    footer_about: "High-tech engineering solutions, robotics manufacturing, PLC/SCADA automation, and custom electronic PCB layout design.",
    footer_nav_title: "Navigation",
    footer_services_title: "Services",
    footer_contacts_title: "Contacts",
    footer_address: "📍 Yerevan, Muratsan St.",
    footer_copy: "© 2026 MGG Systems. All rights reserved. | Industrial Engineering & Robotics Solutions"
  }
};

// Current language tracker
let currentLang = 'hy';

// 2. Language Switcher Function
function switchLanguage(lang) {
  currentLang = lang;

  // Highlight active button
  document.getElementById('lang-hy').classList.toggle('active', lang === 'hy');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  // Translate all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Re-run project detail render if open
  const activeView = document.querySelector('.page-view.active');
  if (activeView && activeView.id === 'page-project-detail' && window.currentProjectKey) {
    openProjectDetail(window.currentProjectKey);
  }
}

// 3. Navigation & Page View Controller
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.remove('active'));

  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update navbar links state
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.id === `nav-${pageId}`) {
      link.classList.add('active');
    }
  });

  // Close mobile menu
  const menu = document.getElementById('navLinks');
  if (menu && menu.classList.contains('mobile-active')) {
    menu.classList.remove('mobile-active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navRightGroup = document.querySelector('.nav-right-group');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      if (navRightGroup) {
        navRightGroup.classList.toggle('mobile-active');
      }
    });
  }

  // Հղման վրա սեղմելիս մենյուն ավտոմատ փակելու համար
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (navRightGroup) {
          navRightGroup.classList.remove('mobile-active');
        }
      }
    });
  });
});

// 5. Dynamic Project Data & Detailed View
const projectsDatabase = {
  'solar-robot': {
    badge: 'Solar Robotics',
    title: { hy: 'MGG Solar Clean Robot Platform', en: 'MGG Solar Clean Robot Platform' },
    subtitle: {
      hy: 'Արևային ֆերմաների համար ռելսային ավտոմատացված մաքրման ռոբոտացված համակարգ՝ ինքնալիցքավորման կայանով։',
      en: 'Autonomous tracked rail cleaning system with auto-docking charging station for solar farms.'
    },
    status: { hy: 'Հանձնված է / Գործող', en: 'Deployed / Active' },
    duration: { hy: '6 Շաբաթ', en: '6 Weeks' },
    tech: 'STM32, RS485, LiFePO4, SolidWorks',
    roi: { hy: '+24% Էներգիայի Աճ', en: '+24% Yield Restored' },
    img: 'img/1.png',
    problem: {
      hy: 'Արևային կայանում փոշու, ավազի և թռչունների աղտոտվածության պատճառով արտադրողականությունը նվազել էր 20-25%-ով։ Ձեռքով լվացումը թանկ էր և պահանջում էր մեծ քանակությամբ ջուր, որը տվյալ տարածաշրջանում սահմանափակ էր։',
      en: 'Dust, sand, and soiling reduced power generation by 20-25%. Manual cleaning was labor-intensive and consumed excessive water, which was scarce in the region.'
    },
    solution: {
      hy: 'MGG Systems-ը նախագծեց և պատրաստեց ավտոնոմ ռոբոտացված համակարգ, որն աշխատում է առանց ջրի (Dry Cleaning method)՝ հատուկ էլեկտրոստատիկ չոր խոզանակների միջոցով։ Ռոբոտը լիցքավորվում է իր սեփական արևային մարտկոցից և ունի IP67 ջրանցանիկ ու փոշեկայուն կորպուս։',
      en: 'MGG Systems engineered an autonomous waterless (Dry Cleaning) robot utilizing microfiber brushes. The system charges via integrated solar panels and features IP67 weatherproofing.'
    },
    specs: [
      { name: { hy: 'Էներգասնուցում', en: 'Power Source' }, desc: { hy: 'LiFePO4 24V 20Ah + Onboard Solar Panel 50W', en: 'LiFePO4 24V 20Ah + Onboard Solar Panel 50W' } },
      { name: { hy: 'Մաքրման Տեսակը', en: 'Cleaning Method' }, desc: { hy: 'Չոր մաքրում microfiber հակաստատիկ խոզանակով', en: 'Dry cleaning with anti-static microfiber brush' } },
      { name: { hy: 'Արագություն', en: 'Cleaning Speed' }, desc: { hy: '12 մ/րոպե (մինչև 1,200 մ²/ժամ)', en: '12 m/min (up to 1,200 m²/hr)' } },
      { name: { hy: 'Կապի Ինտերֆեյս', en: 'Telemetry' }, desc: { hy: 'LoRaWAN 868MHz / RS485 Modbus RTU', en: 'LoRaWAN 868MHz / RS485 Modbus RTU' } }
    ]
  },
  'agv-robot': {
    badge: 'Robotics',
    title: { hy: 'Custom Track Automation Platform (AGV)', en: 'Custom Track Automation Platform (AGV)' },
    subtitle: {
      hy: 'Արտադրական տարածքում ծանր բեռների ավտոմատացված տեղափոխման ռոբոտացված պլատֆորմ։',
      en: 'Heavy-duty automated guided transport vehicle for indoor factory material handling.'
    },
    status: { hy: 'Ավարտված', en: 'Completed' },
    duration: { hy: '8 Շաբաթ', en: '8 Weeks' },
    tech: 'LiDAR, ROS2, STM32, BLDC 1kW, CAN Bus',
    roi: { hy: '3 աշխատակցի օպտիմալացում', en: '3 FTE Cost Saved' },
    img: 'img/4.png',
    problem: {
      hy: 'Գործարանի ներսում ծանր հումքի տեղափոխումը կատարվում էր ձեռքով, ինչը դանդաղեցնում էր հոսքագծի աշխատանքը և առաջացնում վնասվածքների ռիսկեր։',
      en: 'Manual transport of heavy raw materials within the shop floor caused bottleneck delays and workplace safety risks.'
    },
    solution: {
      hy: 'Մշակվել է 500կգ բեռնատարողությամբ AGV/AMR ռոբոտ LiDAR SLAM նավիգացիայով, որը ինքնուրույն շրջանցում է արգելքները և տեղափոխում բեռները։',
      en: 'Developed a 500kg load capacity AGV/AMR robot featuring LiDAR SLAM navigation, automated obstacle avoidance, and precise line docking.'
    },
    specs: [
      { name: { hy: 'Բեռնատարողություն', en: 'Max Payload' }, desc: { hy: '500 կգ (Heavy Heavy Duty Chassis)', en: '500 kg (Heavy Duty Chassis)' } },
      { name: { hy: 'Նավիգացիա', en: 'Navigation' }, desc: { hy: '2D LiDAR SLAM + Optical Tape Guide', en: '2D LiDAR SLAM + Optical Tape Guide' } },
      { name: { hy: 'Շարժիչներ', en: 'Drivetrain' }, desc: { hy: '2x 1kW BLDC Planetary Gear Motors', en: '2x 1kW BLDC Planetary Gear Motors' } }
    ]
  },
  'scada-pump': {
    badge: 'SCADA & Automation',
    title: { hy: 'HMI & SCADA Dispatching Unit', en: 'HMI & SCADA Dispatching Unit' },
    subtitle: {
      hy: 'Արդյունաբերական պոմպակայանի հեռակա դիսպետչերական ղեկավարման համակարգ Siemens PLC հենքով։',
      en: 'Remote SCADA telemetry and control unit for municipal pumping stations powered by Siemens PLC.'
    },
    status: { hy: 'Գործող', en: 'Operational' },
    duration: { hy: '4 Շաբաթ', en: '4 Weeks' },
    tech: 'Siemens S7-1200, WinCC, Modbus RTU, VFD',
    roi: { hy: '-35% Էլեկտրաէներգիայի ծախս', en: '-35% Power Consumption' },
    img: 'img/2.png',
    problem: {
      hy: 'Պոմպակայանը աշխատում էր ֆիքսված արագությամբ, որն առաջացնում էր էներգիայի հսկայական վատնում և ջրային հարվածների (water hammer) ռիսկ։',
      en: 'The pumping station operated at fixed speed, causing high electricity wastage and risk of hydraulic water hammers.'
    },
    solution: {
      hy: 'Տեղադրվեց Siemens S7-1200 PLC, VFD հաճախականային կարգավորիչներ PID control-ով և SCADA դիսպետչերական պանել real-time տվյալների համար։',
      en: 'Integrated Siemens S7-1200 PLC with VFD closed-loop PID pressure control and WinCC SCADA interactive telemetry.'
    },
    specs: [
      { name: { hy: 'Կոնտրոլեր', en: 'PLC Controller' }, desc: { hy: 'Siemens S7-1200 CPU 1214C DC/DC/DC', en: 'Siemens S7-1200 CPU 1214C DC/DC/DC' } },
      { name: { hy: 'HMI Էկրան', en: 'HMI Panel' }, desc: { hy: 'Siemens KTP700 Basic 7-inch Touch', en: 'Siemens KTP700 Basic 7-inch Touch' } }
    ]
  }
};

function openProjectDetail(projectKey) {
  const p = projectsDatabase[projectKey];
  if (!p) return;

  window.currentProjectKey = projectKey;

  document.getElementById('pd-badge').textContent = p.badge;
  document.getElementById('pd-title').textContent = p.title[currentLang] || p.title.hy;
  document.getElementById('pd-subtitle').textContent = p.subtitle[currentLang] || p.subtitle.hy;
  document.getElementById('pd-status').textContent = p.status[currentLang] || p.status.hy;
  document.getElementById('pd-duration').textContent = p.duration[currentLang] || p.duration.hy;
  document.getElementById('pd-tech').textContent = p.tech;
  document.getElementById('pd-roi').textContent = p.roi[currentLang] || p.roi.hy;
  document.getElementById('pd-image').src = p.img;
  document.getElementById('pd-problem').textContent = p.problem[currentLang] || p.problem.hy;
  document.getElementById('pd-solution').textContent = p.solution[currentLang] || p.solution.hy;

  // Build Specs Table
  const tbody = document.getElementById('pd-specs-body');
  tbody.innerHTML = '';
  if (p.specs) {
    p.specs.forEach(spec => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>${spec.name[currentLang] || spec.name.hy}</strong></td>
        <td>${spec.desc[currentLang] || spec.desc.hy}</td>
      `;
      tbody.appendChild(row);
    });
  }

  showPage('project-detail');
}

// 6. Solar ROI Calculator Event Listeners
function initCalculator() {
  const calcPower = document.getElementById('calc-power');
  const calcTariff = document.getElementById('calc-tariff');
  const calcLoss = document.getElementById('calc-loss');

  if (!calcPower || !calcTariff || !calcLoss) return;

  function calculateROI() {
    const powerKW = parseFloat(calcPower.value) || 0;
    const tariff = parseFloat(calcTariff.value) || 0;
    const lossPct = parseFloat(calcLoss.value) || 0;

    // Average daily output per 1kW in Armenia ~ 3.8 kWh
    const annualKWh = powerKW * 3.8 * 365;
    const recoveredKWh = annualKWh * (lossPct / 100);
    const annualSavings = recoveredKWh * tariff;
    const monthlySavings = annualSavings / 12;

    document.getElementById('calc-output').textContent = `${Math.round(annualSavings).toLocaleString()} ֏`;
    document.getElementById('calc-output-monthly').textContent = `(~${Math.round(monthlySavings).toLocaleString()} ֏ / month)`;
  }

  calcPower.addEventListener('input', calculateROI);
  calcTariff.addEventListener('input', calculateROI);
  calcLoss.addEventListener('input', calculateROI);

  calculateROI();
}

// 7. Contact Form Handler
function submitForm(e) {
  e.preventDefault();
  const statusDiv = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');

  btn.disabled = true;
  btn.textContent = currentLang === 'hy' ? 'Ուղարկվում է...' : 'Sending...';

  setTimeout(() => {
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = '#dcfce7';
    statusDiv.style.color = '#15803d';
    statusDiv.style.padding = '12px';
    statusDiv.style.borderRadius = '8px';
    statusDiv.style.marginBottom = '16px';
    statusDiv.textContent = currentLang === 'hy' 
      ? '✅ Շնորհակալություն։ Ձեր հայտը հաջողությամբ ուղարկվեց։ Մենք կապ կհաստատենք ձեզ հետ։' 
      : '✅ Thank you! Your request has been sent successfully. We will contact you soon.';

    document.getElementById('contactForm').reset();
    btn.disabled = false;
    btn.textContent = translations[currentLang].form_btn_submit;
  }, 1000);
}

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage('hy');
  initCalculator();
});
