 // Detailed Database of 12 Projects for Dynamic View
    const projectsDatabase = {
      'solar-robot': {
        badge: 'Solar Robotics',
        title: 'MGG Solar Clean Robot Platform',
        subtitle: 'Արևային ֆերմաների համար ռելսային ավտոմատացված մաքրման ռոբոտացված համակարգ՝ ինքնալիցքավորման կայանով։',
        status: 'Հանձնված է / Գործող',
        duration: '6 Շաբաթ',
        tech: 'STM32, RS485, LiFePO4, SolidWorks 3D, Custom PCB',
        roi: '+24% Էներգիայի Աճ',
        image: 'photo_5436380638060681609_w.jpg',
        problem: 'Արևային կայանում փոշու, ավազի և թռչունների աղտոտվածության պատճառով արտադրողականությունը նվազել էր 20-25%-ով։ Ձեռքով լվացումը թանկ էր և պահանջում էր մեծ քանակությամբ ջուր։',
        solution: 'MGG Systems-ը նախագծեց և պատրաստեց ավտոնոմ ռոբոտացված համակարգ, որն աշխատում է առանց ջրի (Dry Cleaning method)՝ հատուկ էլեկտրոստատիկ չոր խոզանակների միջոցով։ Ռոբոտը լիցքավորվում է իր սեփական արևային մարտկոցից և ունի IP67 պաշտպանություն։',
        specs: [
          ['Կենտրոնական Կոնտրոլեր', 'STM32F4 Cortex-M4 Microcontroller'],
          ['Էներգասնուցում', '24V 20Ah LiFePO4 Battery + Integrated Solar Charging Panel'],
          ['Մաքրման Մեխանիզմ', 'High-speed Microfiber Brush (1200 RPM) Dry Cleaning'],
          ['Անվտանգության Սենսորներ', 'Optical Edge Detectors, Rain & Wind Sensor'],
          ['Կապ և Մոնիտորինգ', 'LoRaWAN + RS485 Modbus Interface to Station Central SCADA']
        ]
      },
      'agv-robot': {
        badge: 'Robotics',
        title: 'Custom Track Automation Platform (AGV)',
        subtitle: 'Արտադրական տարածքում ծանր բեռների ավտոմատացված տեղափոխման ռոբոտացված պլատֆորմ։',
        status: 'Հանձնված է / Գործող',
        duration: '8 Շաբաթ',
        tech: 'LiDAR Navigation, STM32, CAN Bus, BLDC Motors',
        roi: '2x Արտադրողականության Աճ',
        image: 'img/1.png',
        problem: 'Արտադրամասում հումքի տեղափոխումը կատարվում էր ձեռքով, ինչը դանդաղեցնում էր հոսքագիծը և առաջացնում վնասվածքների ռիսկ։',
        solution: 'Ստեղծվեց ավտոնոմ AGV (Automated Guided Vehicle) ռոբոտ, որն ունակ է տեղափոխել մինչև 500 կգ բեռ՝ օգտագործելով լազերային 3D LiDAR նավիգացիա և խոչընդոտների շրջանցման ալգորիթմներ։',
        specs: [
          ['Բեռնատարողություն', '500 կգ'],
          ['Նավիգացիոն Համակարգ', '2D/3D LiDAR Mapping + IMU Fusion'],
          ['Շարժիչներ', 'Dual 1kW BLDC Servo Motors with Optical Encoders'],
          ['Անվտանգություն', 'Safety Laser Scanners (360° Field of View), Emergency Stop Bumper'],
          ['Աշխատանքի Ժամանակ', 'Մինչև 10 ժամ անընդմեջ (Fast Wireless Docking Charge)']
        ]
      },
      'scada-pump': {
        badge: 'SCADA & Automation',
        title: 'HMI & SCADA Dispatching Unit for Pump Station',
        subtitle: 'Արդյունաբերական պոմպակայանի հեռակա դիսպետչերական ղեկավարման համակարգ Siemens PLC հենքով։',
        status: 'Հանձնված է',
        duration: '4 Շաբաթ',
        tech: 'Siemens S7-1200, WinCC SCADA, Modbus TCP, VFD Drivers',
        roi: '-35% Էներգասպառման Նվազում',
        image: 'img/1.png',
        problem: 'Պոմպակայանի աշխատանքը կարգավորվում էր մեխանիկորեն, ինչը բերում էր էլեկտրաէներգիայի գերասպառման և խողովակաշարերի հիդրոհարվածների։',
        solution: 'Իրականացվել է Siemens PLC-ի և WinCC SCADA-ի ներդրում, հաճախականային կարգավորիչների (VFD) ինտեգրում PID ճնշման ավտոմատ պահպանմամբ և հեռակա SMS/Web ազդարարմամբ։',
        specs: [
          ['Կենտրոնական PLC', 'Siemens S7-1200 CPU 1214C DC/DC/DC'],
          ['SCADA Ծրագրակազմ', 'Siemens WinCC Advanced Web Navigator'],
          ['Աջակցվող Պրոտոկոլներ', 'Profinet, Modbus RTU/TCP, Industrial Ethernet'],
          ['Կարգավորման Ճշգրտություն', 'PID Control loop 0.01 bar precision'],
          ['Վթարային Ծանուցում', 'Automated Telegram Bot & SMS Gateway']
        ]
      },
      'motor-driver': {
        badge: 'Custom PCB',
        title: 'Custom High-Power BLDC Motor Controller',
        subtitle: 'Քայլային (Stepper) և BLDC շարժիչների ղեկավարման բարձր հզորության էլեկտրոնային սալիկ (STM32/CAN):',
        status: 'Սերիական Արտադրություն',
        duration: '5 Շաբաթ',
        tech: 'Altium Designer, STM32, MOSFET Array, CAN Bus, FreeRTOS',
        roi: '100% Hardware Optimization',
        image: 'img/1.png',
        problem: 'Շուկայում առկա պատրաստի դրայվերները չափերով մեծ էին և չունեին անհրաժեշտ CAN bus ինտերֆեյսը ռոբոտի հիմնական մայրական սալիկին միանալու համար։',
        solution: 'Մշակվել է 4-շերտանի compact PCB layout, որն իր մեջ ներառում է STM32 MCU, Mosfet H-Bridge հզորային կասկադ, հոսանքի սենսորներ և hardware պաշտպանություն overcurrent-ից։',
        specs: [
          ['Տպասալիկի Տեսակը', '4-Layer FR4 Board with Copper Thicken Lines (2oz)'],
          ['Աշխատանքային Լարում/Հոսանք', '12V - 60V DC / Up to 40A Continuous Peak'],
          ['Միկրոկոնտրոլեր', 'STM32F303 Cortex-M4 with Hardware FPU'],
          ['Ինտերֆեյսներ', 'Isolated CAN Bus 2.0B, UART, PWM inputs'],
          ['Պաշտպանություններ', 'Hardware Overcurrent, Thermal Shutdown, Undervoltage Lockout']
        ]
      },
      'fpga-dsp': {
        badge: 'FPGA / Digital Logic',
        title: 'High-Speed Signal Processor Board',
        subtitle: 'Xilinx FPGA-ի վրա հիմնված թվային ազդանշանային մշակման սալիկ։',
        status: 'Հանձնված է',
        duration: '7 Շաբաթ',
        tech: 'Xilinx Spartan-7 FPGA, Verilog RTL, High-speed ADC',
        roi: 'Ultra-low Latency Processing',
        image: 'img/1.png',
        problem: 'Պահանջվում էր մշակել բարձր հաճախականության անալոգային ազդանշաններ real-time ռեժիմում՝ առանց միկրոկոնտրոլերային հապաղումների (Zero Latency):',
        solution: 'Նախագծվել է Xilinx FPGA հենքով Verilog RTL logic, որը կատարում է ազդանշանների թվայնացում 100 MSPS արագությամբ և զուգահեռ ֆիլտրացիա։',
        specs: [
          ['FPGA Ճարտարապետություն', 'Xilinx Spartan-7 XC7S50 FPGA'],
          ['Ազդանշանային Լեզու', 'Verilog RTL Hardware Description Language'],
          ['ADC Ընդունիչ', 'Dual-Channel 12-Bit 100 MSPS Analog-to-Digital Converter'],
          ['Հիշողություն', '256MB DDR3 High-Speed Memory Interface'],
          ['Հապաղում (Latency)', '< 10 nanoseconds pipeline speed']
        ]
      },
      'smart-agro': {
        badge: 'IoT System',
        title: 'Smart Agro Climate Monitor & Automation',
        subtitle: 'Ջերմոցային համալիրների կլիմայի ավտոմատ հսկման IoT սարքավորումներ Cloud dashboard ինտեգրմամբ։',
        status: 'Հանձնված է / Գործող',
        duration: '3 Շաբաթ',
        tech: 'ESP32, LoRaWAN, MQTT Protocol, Cloud Web Dashboard',
        roi: '+18% Բերքատվության Աճ',
        image: 'img/1.png',
        problem: 'Ջերմոցային տնտեսությունում խոնավության և ջերմաստիճանի տատանումները բերում էին բերքի կորստի։',
        solution: 'Տեղադրվել են LoRaWAN անլար սենսորային հանգույցներ, որոնք փոխանցում են տվյալները կենտրոնական Gateway-ին և ավտոմատ միացնում ոռոգումն ու օդափոխությունը։',
        specs: [
          ['Անլար Կապ', 'LoRaWAN Long Range (մինչև 5 կմ) + Wi-Fi Backup'],
          ['Սենսորներ', 'Soil Moisture, NPK, Air Temp/Humidity, Lux Sensors'],
          ['Ամպային Արխիվ', 'Cloud MQTT Server with Live Web/Mobile Dashboard'],
          ['Ավտոնոմություն', 'Solar Panel + Li-Ion Battery (3 տարի անխափան)'],
          ['Կառավարում', 'Relay Outputs for Valve & Fan Automatic Switching']
        ]
      },
      'bms-battery': {
        badge: 'Power Electronics',
        title: 'Industrial LiFePO4 Smart BMS Controller',
        subtitle: '48V 100Ah LiFePO4 մարտկոցային բլոկների ինտելեկտուալ BMS համակարգ Active Balancing-ով։',
        status: 'Հանձնված է',
        duration: '5 Շաբաթ',
        tech: 'Texas Instruments BQ ICs, STM32, Isolated CAN, OLED Display',
        roi: '+30% Battery Lifespan Extension',
        image: 'img/1.png',
        problem: 'Արդյունաբերական մարտկոցների cell-երի անհավասար լիցքավորումը կարճացնում էր դրանց ծառայության ժամկետը։',
        solution: 'Նախագծվեց 16S LiFePO4 Active Balancing BMS տպասալիկ hardware short-circuit պաշտպանությամբ և CAN telemetry-ով։',
        specs: [
          ['Մարտկոցների Տեսակ', '16S LiFePO4 (48V nominal, 58.4V max)'],
          [' Active Balancing', '2A Active Transformer Balancing Circuit'],
          ['Պաշտպանություն', 'Overvoltage, Undervoltage, Overcurrent, Dual Temp Sensors'],
          ['Կապի Ինտերֆեյս', 'Isolated CAN 2.0B & RS485 Modbus']
        ]
      },
      'conveyor-plc': {
        badge: 'Factory Automation',
        title: 'High-Speed Bottling Conveyor Automation System',
        subtitle: 'Ըմպելիքների լցնման ավտոմատացված հոսքագծի ղեկավարում Schneider Modicon PLC-ով։',
        status: 'Հանձնված է',
        duration: '6 Շաբաթ',
        tech: 'Schneider Modicon M241, Lexium Servo, Magelis HMI',
        roi: '12,000 Bottles / Hour Speed',
        image: 'img/1.png',
        problem: 'Հին մեխանիկական հոսքագիծն ունենում էր հաճախակի խափանումներ և ցածր արտադրողականություն։',
        solution: 'Ամբողջ գիծը վերասարքավորվեց Schneider PLC-ով, high-speed optical sensors-ով և servo դիրքավորիչներով։',
        specs: [
          ['Արտադրողականություն', '12,000 շիշ / ժամ ճշգրիտ synchronization-ով'],
          ['Կենտրոնական PLC', 'Schneider Modicon M241 Ethernet PLC'],
          ['HMI Ղեկավարում', '10" Schneider Magelis Touch Panel'],
          ['Խոտանի Զտում', 'Pneumatic Defect Rejection System with Vision Sensor']
        ]
      },
      'rooftop-cleaner': {
        badge: 'Rooftop Solar',
        title: 'Commercial Rooftop Lightweight Cleaner Robot',
        subtitle: 'Կոմերցիոն շենքերի տանիքների արևային պանելների ultra-lightweight (15կգ) ռոբոտ։',
        status: 'Սերիական Արտադրություն',
        duration: '4 Շաբաթ',
        tech: 'Aluminum Frame, 24V BLDC, Wireless Remote, Li-Ion',
        roi: '1 Operator for Whole Roof',
        image: 'photo_5436380638060681609_w.jpg',
        problem: 'Տանիքային կայանները դժվար հասանելի են և ծանր ռոբոտների բարձրացումը տանիք վտանգավոր էր։',
        solution: 'Մշակվեց ալյումինե թեթև կորպուսով 15 կգ քաշով ռոբոտ, որը հեշտությամբ տեղափոխվում է 1 մարդու կողմից։',
        specs: [
          ['Քաշ', 'Ընդամենը 15 կգ (Easy Transport)'],
          ['Մաքրման Լայնություն', '1100 մմ (1.1 метр)'],
          ['Անլար Ղեկավարում', '2.4GHz Joystick Remote Control (100m range)'],
          ['Մարտկոց', 'Quick-swap 24V 15Ah Li-Ion Block']
        ]
      },
      'lora-gateway': {
        badge: 'Telemetry',
        title: 'Long-Range LoRaWAN Industrial Gateway',
        subtitle: '15կմ շառավղով հեռահար անլար տվյալների հավաքագրման Gateway արդյունաբերական գոտիների համար։',
        status: 'Հանձնված է',
        duration: '3 Շաբաթ',
        tech: 'Semtech SX1302, Raspberry Pi Compute Module 4, OpenWrt',
        roi: '15km Wireless Coverage',
        image: 'img/1.png',
        problem: 'Խոշոր արդյունաբերական տարածքում մալուխների անցկացումը չափազանց թանկ էր։',
        solution: 'Նախագծվեց IP67 LoRaWAN Gateway, որը հավաքում է ցուցմունքները 500+ անլար սենսորներից 15կմ շառավղով։',
        specs: [
          ['LoRa Չիպսեթ', 'Semtech SX1302 Concentrator Engine'],
          ['Ալիքների Քանակ', '8 Parallel Channels (868MHz / 915MHz)'],
          ['Backhaul Connection', '4G LTE Module with SIM slot + Gigabit Ethernet'],
          ['Կորպուս', 'Outdoor Aluminum Waterproof Enclosure (IP67)']
        ]
      },
      'cnc-controller': {
        badge: 'Motion Control',
        title: '5-Axis CNC Interpolator & Servo Controller Board',
        subtitle: '5-առանցքանի CNC հաստոցների ճշգրիտ ղեկավարման սալիկ real-time motion control-ով։',
        status: 'Հանձնված է',
        duration: '7 Շաբաթ',
        tech: 'STM32H7, FPGA Co-processor, Differential Line Drivers',
        roi: 'Sub-micron CNC Precision',
        image: 'img/1.png',
        problem: 'Ստանդարտ USB CNC կոնտրոլերները չունեին բավարար արագություն 5-առանցքանի միաժամանակյա ինտերպոլացիայի համար։',
        solution: 'Մշակվեց STM32H7 + FPGA սալիկ, որն ապահովում է Ethernet G-code streaming և 100kHz pulse rate։',
        specs: [
          ['Պրոցեսոր', 'STM32H743 Cortex-M7 (480MHz) + FPGA Acceleration'],
          ['Առանցքների Քանակ', '5 Axis Simultaneous Linear & Circular Interpolation'],
          ['Էլեկտրական Ինտերֆեյս', 'Differential Pulse/Dir Outputs for Servo Amplifiers'],
          ['G-Code Support', 'Full RS274/NGC G-Code Command Standard']
        ]
      },
      'hvac-scada': {
        badge: 'Building Automation',
        title: 'Smart HVAC & Clean Room Climate Controller',
        subtitle: 'Դեղագործական մաքուր սենյակների (Clean Rooms) ճնշման և կլիմայի ավտոմատ պահպանման SCADA:',
        status: 'Հանձնված է / Գործող',
        duration: '5 Շաբաթ',
        tech: 'Delta PLC, Ignition SCADA, High-Precision Differential Pressure Sensor',
        roi: '100% ISO Cleanroom Compliance',
        image: 'img/1.png',
        problem: 'Մաքուր սենյակներում ճնշման անկումը բերում էր օդի աղտոտման և արտադրանքի խոտանման։',
        solution: 'Իրականացվեց Delta PLC-ով ճնշման տարբերության (Differential Pressure) PID ղեկավարում HEPA ֆիլտրերի ավտոմատ փոխանցմամբ։',
        specs: [
          ['Ճնշման Ճշգրտություն', '±0.5 Pa Differential Pressure Control'],
          ['Ջերմաստիճան / Խոնավություն', 'PID loop ±0.1°C և ±1% RH accuracy'],
          ['SCADA logging', '24/7 Audit Trail logging per FDA CFR 21 Part 11 standard']
        ]
      }
    };

    // SPA Navigation Handler
    function showPage(pageId) {
      document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

      const selectedPage = document.getElementById('page-' + pageId);
      if (selectedPage) {
        selectedPage.classList.add('active');
      }

      const navItem = document.getElementById('nav-' + pageId);
      if (navItem) navItem.classList.add('active');
      
      document.getElementById('navLinks').classList.remove('active');
      window.scrollTo(0, 0);
    }

    // Function to Open Detailed Project View with Dynamic Data
    function openProjectDetail(projectId) {
      const proj = projectsDatabase[projectId];
      if (!proj) return;

      document.getElementById('pd-badge').innerText = proj.badge;
      document.getElementById('pd-title').innerText = proj.title;
      document.getElementById('pd-subtitle').innerText = proj.subtitle;
      document.getElementById('pd-status').innerText = proj.status;
      document.getElementById('pd-duration').innerText = proj.duration;
      document.getElementById('pd-tech').innerText = proj.tech;
      document.getElementById('pd-roi').innerText = proj.roi;
      document.getElementById('pd-image').src = proj.image;
      document.getElementById('pd-problem').innerText = proj.problem;
      document.getElementById('pd-solution').innerText = proj.solution;

      // Populate Specs Table
      const specsBody = document.getElementById('pd-specs-body');
      specsBody.innerHTML = '';
      proj.specs.forEach(spec => {
        const row = `<tr><td><strong>${spec[0]}</strong></td><td>${spec[1]}</td></tr>`;
        specsBody.innerHTML += row;
      });

      showPage('project-detail');
    }

    // Toggle Mobile Navigation Menu
    function toggleMobileMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }

    // Solar Calculator Handler
    const powerInput = document.getElementById('calc-power');
    const tariffInput = document.getElementById('calc-tariff');
    const lossInput = document.getElementById('calc-loss');
    const outputDisplay = document.getElementById('calc-output');
    const outputMonthlyDisplay = document.getElementById('calc-output-monthly');

    function calculateSavings() {
      const power = parseFloat(powerInput.value) || 0;
      const tariff = parseFloat(tariffInput.value) || 0;
      const loss = parseFloat(lossInput.value) || 0;

      const annualGeneration = power * 1350; 
      const recoveredEnergy = annualGeneration * (loss / 100);
      const totalSavings = Math.round(recoveredEnergy * tariff);
      const monthlySavings = Math.round(totalSavings / 12);

      outputDisplay.innerText = totalSavings.toLocaleString('hy-AM') + ' ֏';
      if (outputMonthlyDisplay) {
        outputMonthlyDisplay.innerText = '(~' + monthlySavings.toLocaleString('hy-AM') + ' ֏ / ամիս)';
      }
    }

    if (powerInput) {
      powerInput.addEventListener('input', calculateSavings);
      tariffInput.addEventListener('input', calculateSavings);
      lossInput.addEventListener('input', calculateSavings);
    }

    // Contact Form AJAX Handler
    function submitForm(e) {
      e.preventDefault();
      
      const form = document.getElementById('contactForm');
      const statusBox = document.getElementById('formStatus');
      const submitBtn = document.getElementById('submitBtn');
      const formData = new FormData(form);
      
      submitBtn.innerText = "Ուղարկվում է...";
      submitBtn.disabled = true;

      fetch('send_email.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        statusBox.style.display = 'block';
        if (data.trim() === "SUCCESS") {
          statusBox.className = "form-status success";
          statusBox.innerText = "✓ Ձեր հայտը հաջողությամբ ուղարկվեց։ Մենք շուտով կապ կհաստատենք ձեզ հետ։";
          form.reset();
        } else {
          statusBox.className = "form-status error";
          statusBox.innerText = "❌ Տեղի ունեցավ սխալ նամակը ուղարկելիս։ Խնդրում ենք փորձել նորից կամ զանգահարել։";
        }
      })
      .catch(error => {
        statusBox.style.display = 'block';
        statusBox.className = "form-status error";
        statusBox.innerText = "❌ Կապի սխալ։ Խնդրում ենք ստուգել ինտերնետային միացումը։";
      })
      .finally(() => {
        submitBtn.innerText = "Ուղարկել Հայտը";
        submitBtn.disabled = false;
      });
    }